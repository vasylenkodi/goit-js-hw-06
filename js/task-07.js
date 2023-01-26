const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector('#text');


inputElement.addEventListener('input', (event) => {
    textElement.style.fontSize = `${event.currentTarget.value}px`;
})