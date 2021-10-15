const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.elements.email.value;
    const passwd = form.elements.password.value;
    if (!email || !passwd) {
        return alert('Все поля должны быть заполнены');
    }
    const sendObject = {
        email,
        passwd
    };
    console.log(sendObject);
    form.reset();
})