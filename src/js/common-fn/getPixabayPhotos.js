const REQUEST_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '32148291-f9daa6b0a4ebde44950954495';

const axios = require('axios').default;
const requestConfig = {
  params: {
    key: PIXABAY_API_KEY,
    q: 'cat',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};

export async function getPixabayPhotos() {
  const response = await axios(REQUEST_BASE_URL, requestConfig);
  console.log(response);
  return response;
}

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.
