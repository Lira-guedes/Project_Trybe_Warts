const email = document.querySelector('#email');
const pass = document.querySelector('#pass');
const btnEntrar = document.querySelector('#Entrar')

const validaLogin = () => {
  btnEntrar.addEventListener('submit', (event) => {
    console.log(event);
    if (email.event.target === "tryber@teste.com" && pass.event.target === "123456") {
      alert("Olá, Tryber!")
    } else {
      alert("Email ou senha inválidos.")
    }
  })
}
