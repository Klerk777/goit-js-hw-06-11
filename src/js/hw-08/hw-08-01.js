import galleryItemsTamplate from '../../templates/galleryItemsTamplate.hbs'; // import handlebars template (.hbs)
import galleryItems from '../../data/galleryItems.json'; // import data
import SimpleLightbox from 'simplelightbox'; // import library

const gallery = document.querySelector('.gallery');

gallery.innerHTML = galleryItemsTamplate(galleryItems);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.9,
});
