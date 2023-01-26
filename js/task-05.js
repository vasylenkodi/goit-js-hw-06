const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener('input', (event) => {
    spanElement.textContent = event.currentTarget.value
      ? event.currentTarget.value
      : "Anonymous";
})