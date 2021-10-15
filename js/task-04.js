
const value = document.getElementById('value');

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrement.addEventListener('click', () => {
    counterValue--;
    value.textContent = counterValue.toString();
})
increment.addEventListener('click', () => {
    counterValue++;
    value.textContent = counterValue.toString();
})