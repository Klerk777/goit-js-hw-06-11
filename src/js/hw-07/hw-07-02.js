// Завдання 2 - бібліотека SimpleLightbox

// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox,
// яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна,
// а також гортання зображень за допомогою клавіатури.
// Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону
//    елемента галереї.Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//    Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery.
//    Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
//    Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import galleryItemsTamplate from '../../templates/galleryItemsTemplate.hbs'; // import handlebars template (.hbs)
import galleryItems from '../../data/galleryItems.json'; // import data
import SimpleLightbox from 'simplelightbox'; // import library

//---------------------------- get refs on gallery -----------------------------------
const gallery = document.querySelector('.gallery');

//---------------------------- insert template in DOM from .hbs-template ----------------------------------------------------
gallery.innerHTML = galleryItemsTamplate(galleryItems);

//---------------------------- create an instance of SimpleLightbox ----------------------------------------------------
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.9,
});
