const listElement = document.querySelector("#categories");
const listItemElement = document.querySelectorAll('.item');

console.log("Number of categories: ", listElement.children.length);

listItemElement.forEach((element) => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});