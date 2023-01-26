const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener('blur', () => {
    if (inputElement.value.length === 6) {
        inputElement.classList.value = 'valid';
    } else {
        inputElement.classList.value = 'invalid';
    }
})
