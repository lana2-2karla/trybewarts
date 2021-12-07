// requisito 3
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

// requisito 18
const checkboxAgree = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');
checkboxAgree.addEventListener('change', (event) => {
  if (event.target.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

function counter() {
  const comment = document.querySelector('#textarea').value;
  document.getElementById('counter').innerHTML = 500 - comment.length;
}

counter();

/* Referências:
contador:  https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be
https://www.ti-enxame.com/pt/javascript/mostrar-quantos-caracteres-restantes-em-uma-caixa-de-texto-html-usando-javascript/1068970731/
*/
