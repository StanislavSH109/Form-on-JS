const nameElement = document.querySelector('.input-name');
const emailElement = document.querySelector('.input-email');
const value = document.querySelector('#service');
const rangeElement = document.querySelector('#range-nums');
const formElement = document.querySelector('.form');
let outputResult = document.querySelector('.result');
value.textContent = rangeElement.value;


rangeElement.addEventListener('input', (evt) => {
    value.textContent = evt.target.value;
});

formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (nameElement.value == '') {
        nameElement.setCustomValidity('Заполните поле имени!');
        nameElement.reportValidity();
    } else if (emailElement.value == '') {
        emailElement.setCustomValidity('Неверный email!')
        emailElement.reportValidity();
    } else {

        const data = new FormData(formElement);
        let outputHTML = '';

        const interest = [];
            formElement.querySelectorAll('input[name="interest"]:checked').forEach(checkbox => {
                interest.push(checkbox.value);
            });


        data.forEach((element, index) => {
            if (index !== 'interest') {
                outputHTML += `<p>${index}: ${element}</p>`;
            }

            });

            if (interest.length > 0) {
                outputHTML += `<p>Интересы пользователя: ${interest.join(', ')}</p>`;
            }
                outputResult.innerHTML = outputHTML;
        
        }

});