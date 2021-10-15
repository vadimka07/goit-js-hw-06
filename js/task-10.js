function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const containerElements = document.getElementById('boxes');
const inputValue = document.querySelector('input[type="number"]');
const btnCreateList = document.querySelector('[data-create]');
const btnClearList = document.querySelector('[data-destroy]');


btnCreateList.addEventListener('click', () => {
    createBoxes(Number(inputValue.value));
})
function createBoxes(amount) {
    const divArray = [];
    let width = 20;
    let height = 20;
    for(let i = 0; i <= amount; i++){
        const newElement = document.createElement('div');
        width += 10;
        height += 10;
        newElement.style.width = width + 'px';
        newElement.style.height = height + 'px';
        newElement.style.backgroundColor = getRandomHexColor();
        divArray.push(newElement);
    }
    containerElements.append(...divArray);
}

btnClearList.addEventListener('click', () => {
    containerElements.innerHTML = '';
})