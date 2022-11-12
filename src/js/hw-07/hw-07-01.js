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

import galleryItems from './galleryItems'; // import data
import * as basicLightbox from 'basiclightbox'; // import basicLightbox

//---------------------------- initializing var for basicLightbox instance -----------------------------------
let modal;
//---------------------------- get refs on gallery -----------------------------------
const gallery = document.querySelector('.gallery');

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

//---------------------------- function createModal -----------------------------------------
function createModal(e) {
  // create an instance of basicLightbox and set the target src and alt for modal <img>
  modal = basicLightbox.create(
    `
    <img class="lightboxImg" src="${e.target.dataset.source}" alt="${e.target.alt}">`,
    {
      omShow: () => {
        document.addEventListener('keydown', onEscPress); // add eventListner when modal is open
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscPress); // remove eventListner when modal is close
      },
    },
  );
}

//---------------------------- function onGalleryItemClick -----------------------------------------
function onGalleryItemClick(e) {
  if (!e.target.classList.contains('gallery__image')) return; // check which element was clicked
  e.preventDefault();
  createModal(e); // create modal
  modal.show(); // open modal
}

//---------------------------- function onEscPress -----------------------------------------
function onEscPress(evt) {
  if (evt.keyCode !== 27) return; // check which key was pressed
  modal.close(); // close modal by Esc key
}

gallery.addEventListener('click', onGalleryItemClick);

//run
render();
