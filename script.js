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
