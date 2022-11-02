
const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputElement.addEventListener("input", (event) => {
    if (event.currentTarget.value + '1' ) {
        textElement.style.fontSize = event.currentTarget.value + 'px';
    }
});