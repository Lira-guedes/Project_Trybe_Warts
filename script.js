const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const btnEntrar = document.querySelector('#Entrar');
const btnSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

/*
const activeSubmit = () => {
    if (agreement.checked === true) {
     btnSubmit.disabled = false;
    } else {
    btnSubmit.disabled = true;
    }
};

agreement.addEventListener('click', activeSubmit);
*/

agreement.addEventListener('click', () => {
    btnSubmit.disabled = !agreement.checked;
})

function textCount () {
  const text = document.getElementById('text').value.length;
  const counter = document.getElementById('counter');
  counter.innerText = 500 - text;
}
