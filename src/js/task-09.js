function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const windowBgColor = document.body;
const btnEl = document.querySelector(".change-color")
const colorEl = windowBgColor.querySelector(".color");

btnEl.addEventListener('click', changeBgColor)

function changeBgColor(event) {
  if (event) {
    colorEl.textContent = getRandomHexColor();

    windowBgColor.style.backgroundColor = colorEl.textContent;
  }
}



