const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const btnEntrar = document.querySelector('#Entrar');

    btnEntrar.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value === 'tryber@teste.com' && pass.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
    });


