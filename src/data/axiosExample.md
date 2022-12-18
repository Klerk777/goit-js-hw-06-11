const axios = require('axios');

// Робимо запит для користувача з даним ID axios.get('/user?ID=12345') .then(function (response) { // обробка успішного запиту console.log(response); }) .catch(function (error) { // обробка помилки console.log(error); }) .then(function () { // виконується завжди });

// За бажанням вищевказаний запит також можна виконати так axios.get('/user', { params: { ID: 12345 } }) .then(function (response) { console.log(response); }) .catch(function (error) { console.log(error); }) .then(function () { // виконується завжди });

// Хочете використовувати async/await? Додайте ключове слово `async` до своєї зовнішньої функції/методу. async function getUser() { try { const response = await axios.get('/user?ID=12345'); console.log(response); } catch (error) { console.error(error); } }
