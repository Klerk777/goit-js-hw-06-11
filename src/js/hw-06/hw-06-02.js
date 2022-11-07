//  Напиши скрипт, який для кожного елемента масиву ingredients :

//     Створить окремий елемент <li> . Обов'язково використовуй метод document.createElement() .
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item .
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients .

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const items = [];
ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  items.push(item);
  //   list.append(item); // add item to DOM on each iteration of .map() method
});
list.append(...items); // add items to DOM in one action.
