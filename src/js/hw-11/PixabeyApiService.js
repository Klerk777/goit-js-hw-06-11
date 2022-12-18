const axios = require('axios').default;

export default class PixabayApiService {
  constructor() {
    this.requestConfig = {
      url: 'https://pixabay.com/api/',
      params: {
        key: '32148291-f9daa6b0a4ebde44950954495',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
      },
    };
  }
  get query() {
    return this.requestConfig.params.q;
  }
  set query(newQuery) {
    this.requestConfig.params.q = newQuery;
  }
  async getPhotos() {
    const response = await axios(this.requestConfig);
    console.log('getPhotos method respons: ', response);
    this.incrementPage();
    console.log('This: ', this);
    return response;
  }
  incrementPage() {
    this.requestConfig.params.page += 1;
  }
  resetPage() {
    this.requestConfig.params.page = 1;
  }
}

// const requestConfig = {
//   params: {
//     key: PIXABAY_API_KEY,
//     q: 'cat',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: 1,
//     per_page: 40,
//   },
// };
