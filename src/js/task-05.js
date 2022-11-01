const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');
const elementSpace = spanElement.textContent;

inputElement.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === '') {
        spanElement.textContent = elementSpace;
    } else {
        spanElement.textContent = event.currentTarget.value;
    };
});


