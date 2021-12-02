// const divForm = document.querySelectorAll(".trybewarts-login");
const addButton = document.querySelector('#btn');

function submit(event) {
  event.preventDefault();
  const inputEmail = document.querySelector('#email');
  const inputPass = document.querySelector('#password');
  if (inputEmail.value === 'tryber@teste.com' && inputPass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

addButton.addEventListener('click', submit);
