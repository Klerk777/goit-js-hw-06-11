import { fetchCountries } from '../common-fn/fetchCountries';
import { Notify } from 'notiflix';
import countriesListTemplate from '../../templates/countriesListTemplate.hbs';
import countryTemplate from '../../templates/countryTemplate.hbs';
import _ from 'lodash';

const DEBOUNCE_DELAY = 500;
const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

function clearDOM() {
  refs.info.innerHTML = '';
  refs.list.innerHTML = '';
}

function render(data) {
  console.log(data);
  clearDOM();
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    return;
  } else if (data.length === 1) {
    refs.info.innerHTML = countryTemplate(data);
  } else {
    refs.list.innerHTML = countriesListTemplate(data);
  }
}

function onInputHandler(e) {
  const clientQuery = e.target.value.trim();
  if (clientQuery) {
    fetchCountries(clientQuery)
      .then(render)
      .catch(error => {
        clearDOM();
        Notify.failure(`Oops, there is no country with that name. ${error}`);
      });
  } else {
    clearDOM();
  }
}
refs.input.addEventListener('input', _.debounce(onInputHandler, DEBOUNCE_DELAY));

//TODO: Add option to open country info by click on country in countries list
