// import InfiniteScroll from 'infinite-scroll';

import SimpleLightbox from 'simplelightbox';
import { Notify } from 'notiflix';
import 'simplelightbox/dist/simple-lightbox.min.css';
import PixabayApiService from './PixabeyApiService';
import photoCardsTemplate from '../../templates/photoCardsTemplate.hbs';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
  toggleBtn: document.querySelector('.toggle-btn'),
  formContainer: document.querySelector('.form-container'),
};

//======================== create an instance of PixabayApiService class =============================
const pixabayApi = new PixabayApiService();

//======================== create an instance of SimpleLightbox =============================
const lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.9,
});

//=================================== SubmitHandler ======================================
async function onSubmitHandler(e) {
  e.preventDefault();
  refs.loadMore.classList.remove('active'); // hide loadMore button

  //---- check on empty request
  if (e.target.searchQuery.value.trim() === '') {
    Notify.warning(`Empty request. Please enter search keywords.`);
    return;
  }

  //----- prepare for new request
  pixabayApi.query = e.target.searchQuery.value.trim();
  pixabayApi.resetPage();
  refs.gallery.innerHTML = '';

  //----- send async get-request to backend
  const response = await pixabayApi.getPhotos();
  console.log('onSubmitHandler respons: ', response);

  //----- check response from backend
  const totalHits = response.data.totalHits;
  if (totalHits === 0) {
    Notify.warning(`Sorry, there are no images matching your search query. Please try again.`);
    return;
  }

  //------ succes notify and call render function
  Notify.success(`Hooray! We found ${totalHits} images.`);
  render(response);
  refs.loadMore.classList.add('active'); // show loadMore button
}

async function onLoadMoreHandler() {
  const response = await pixabayApi.getPhotos();
  render(response);
}

//=================================== Render ======================================
function render(response) {
  const photosArray = response.data.hits;
  refs.gallery.insertAdjacentHTML('beforeend', photoCardsTemplate(photosArray));
  lightbox.refresh();
}

//============================ To fix the search form at the top of the window ===============================
function onScrollHandler() {
  window.scrollY >= 250 ? refs.formContainer.classList.add('fixed') : refs.formContainer.classList.remove('fixed');
}

//=================================== Register listeners ======================================
refs.form.addEventListener('submit', onSubmitHandler);
refs.loadMore.addEventListener('click', onLoadMoreHandler);
window.addEventListener('scroll', onScrollHandler);
