const incrBtn = document.querySelector('[data-action = increment]');
const decrBtn = document.querySelector("[data-action = decrement]");
const counter = document.querySelector('#value');
let counterValue = 0;

incrBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

decrBtn.addEventListener("click", () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});