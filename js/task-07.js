const getInputValue = document.getElementById('font-size-control');
const resizeText = document.getElementById('text');
resizeText.style.fontSize = getInputValue.value + 'px';
getInputValue.addEventListener('input', function() {
    resizeText.style.fontSize = getInputValue.value + 'px';
})

