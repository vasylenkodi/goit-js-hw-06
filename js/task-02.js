const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector("#ingredients");
const listItems = [];

for (const ingredient of ingredients) { //перебирает массив ингредиентов
  const listItem = document.createElement('li');  //создает элемент ли
  listItem.textContent = ingredient; //записывает ингредиент в элемент ли
  listItem.classList.add('item'); //добавляет класс итем
  listItems.push(listItem);
}

  listElement.append(...listItems); //добавляет ли в юл