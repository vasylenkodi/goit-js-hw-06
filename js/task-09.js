function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector("body");
const btnElement = document.querySelector(".change-color");
const textElement = document.querySelector(".color");

const onBodyBgcChange = () => {
  const bodyBgc = getRandomHexColor();

  bodyElement.style.backgroundColor = bodyBgc;
  textElement.textContent = bodyBgc;
};

btnElement.addEventListener('click', onBodyBgcChange);