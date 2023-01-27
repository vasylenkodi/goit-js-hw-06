const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener('blur', (event) => {
    const inputDataLength = Number(event.currentTarget.dataset.length);
    if (event.currentTarget.value.length === inputDataLength) {
        event.currentTarget.classList.value = 'valid';
    } else {
        event.currentTarget.classList.value = 'invalid';
    }
})
