const inputValue = document.getElementById('name-input');
const outputValue = document.getElementById('name-output');
inputValue.addEventListener('input', () => {
    outputValue.textContent = inputValue.value.trim();
    if(!inputValue.value.trim()) {
        outputValue.textContent = 'Anonymous';
    }
})

