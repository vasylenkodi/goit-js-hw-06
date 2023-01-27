const formElement = document.querySelector(".login-form");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === "" || formElements.password.value === '') {
        window.alert('Все поля должны быть заполнены')
    } else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            formData[name] = value;
        })
        console.log(formData);
        event.currentTarget.reset();
    }
});