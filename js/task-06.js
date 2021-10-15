const valueInput = document.getElementById('validation-input');
console.log(valueInput.dataset.length)
valueInput.addEventListener('blur', validateInput);
function validateInput() {
    if(Number(valueInput.dataset.length) === valueInput.value.length) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
}
