const REQUEST_BASE_URL = 'https://restcountries.com/v3.1/name/';
const REQUEST_OPTIONS_URL = '?fields=name,capital,population,flags,languages,currencies';

export function fetchCountries(name) {
  return fetch(`${REQUEST_BASE_URL}${name}${REQUEST_OPTIONS_URL}`).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error('Error 404. Not found.'));
    } else {
      return response.json();
    }
  });
}

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов
