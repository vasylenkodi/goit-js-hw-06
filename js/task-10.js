function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnElement = document.querySelector("[data-create]");
const destroyBtnElement = document.querySelector("[data-destroy]");
const inputElement = document.querySelector("#controls input");
const containerElement = document.querySelector("#boxes");

const boxCreator = {
  size: 30,

  createBoxes() {
    const newBox = document.createElement("div");
    newBox.style.width = `${this.size}px`;
    newBox.style.height = `${this.size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    containerElement.append(newBox);
    this.size += 10;
  },

  destroyBoxes() {
    containerElement.innerHTML = '';
  },
};

inputElement.addEventListener("input", (event) => {   
  boxCreator.amount = event.currentTarget.value;      
});

createBtnElement.addEventListener('click', () => {  
  for (let i = 0; i < boxCreator.amount; i += 1) {  
    boxCreator.createBoxes();
  }
  boxCreator.size = 30;
})

destroyBtnElement.addEventListener('click', () => {
  boxCreator.destroyBoxes();
})