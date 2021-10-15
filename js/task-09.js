function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
buttonChangeColor.addEventListener('click', changeRandomColor);
function changeRandomColor() {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}