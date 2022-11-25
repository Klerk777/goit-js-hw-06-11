// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.
// Розбий його на декілька підзавдань:

//  1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//  2. Реалізація делегування на div.gallery і отримання url великого зображення.
//  3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і
//     додай у проект посилання на мініфіковані(.min) файли бібліотеки.
//  4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//  5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову
//     розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї

// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і
// вказуватися в href посилання.Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде
// перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.

// Закриття з клавіатури
// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було
// тільки доти, доки відкрите модальне вікно.Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import galleryItems from './galleryItems';
import * as basicLightbox from 'basiclightbox';

//---------------------------- initializing an instance of basicLightbox -----------------------------------
const modal = basicLightbox.create(`
    <img class="lightboxImg" src="">
`);
modal.show(modal.close());
console.log(modal.visible());

//---------------------------- get refs on required elements -----------------------------------
const gallery = document.querySelector('.gallery');
const modalImg = document.querySelector('.lightboxImg');
console.log(modalImg);

//---------------------------- function getGalleryItemsTamplate ---------------------------------------------
function getGalleryItemsTamplate(data) {
  return data
    .map(item => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
          </a>
        </div>`;
    })
    .join('');
}

//---------------------------- function render ----------------------------------------------------
function render() {
  gallery.innerHTML = getGalleryItemsTamplate(galleryItems);
}

//---------------------------- function getImageSource ---------------------------------------------
function getImageSource(e) {
  return e.target.dataset.source;
}

//---------------------------- function onGalleryItemClick -----------------------------------------
function onGalleryItemClick(e) {
  if (!e.target.classList.contains('gallery__image')) return; // check which element was clicked

  e.preventDefault();
  // open modal
  modal.show(() => {
    modalImg.src = getImageSource(e); // set the target src for modal <img>
    document.addEventListener('keydown', onEscPress); // add eventListner on keydown when modal is open
  });
}

//---------------------------- function onEscPress -----------------------------------------
function onEscPress(evt) {
  if (evt.keyCode !== 27) return; // check which key was pressed
  // close modal and remove eventListner
  modal.close(() => {
    document.removeEventListener('keydown', onEscPress);
  });
}

gallery.addEventListener('click', onGalleryItemClick);

//run
render();
