const inputElement = document.querySelector("#name-input");
const spanElement = document.querySelector("#name-output");

inputElement.addEventListener('input', (event) => {
  const inputElementValue = event.currentTarget.value;

    spanElement.textContent = inputElementValue
      ? inputElementValue
      : "Anonymous";
})