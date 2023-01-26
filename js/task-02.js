const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElement = document.querySelector("#ingredients");

for (const ingredient of ingredients) { //перебирает массив ингредиентов
  const listItem = document.createElement('li');  //создает элемент ли
  listItem.textContent = ingredient; //записывает ингредиент в элемент ли
  listItem.classList.add('item'); //добавляет класс итем
  listElement.append(listItem); //добавляет ли в юл
}