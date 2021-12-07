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

const data = {
  Nome: '-Nome- -Sobrenome-',
  Email: '-Email-',
  Casa: '-Casa-',
  Família: '-Família-',
  Matérias: '-Matérias Selecionadas-',
  Avaliação: '-Avaliação-',
  Observações: '-Observações-',
};

const subjectClass = document.getElementsByClassName('subject')[0].value;

const boxChecked = [];

function filledForm(event) {
  event.preventDefault();
  data.Nome = document.getElementById('input-name').value + ' ' + document.getElementById('input-lastname').value;
  data.Email = document.getElementById('input-email').value;
  data.Casa = document.getElementById('house').value;
  data.Família = document.getElementById('evaluation-form').family.value;
  
  // fazer um for dentro de outro for pra percorrer subjectclass
  //pesquisar getelements classname
  for (let i = 0; i < subjectClass.length; i += 1) {
    let subjectClass = document.getElementsByClassName('subject')[i].value;
    if (subjectClass[i].checked) {
      boxChecked.push(subjectClass[i]);
    }
  }
  console.log(subjectClass);
}
submitBtn.addEventListener('click',filledForm);
/* Referências:
Super Apoio do Kesley Muniz XP -B
contador:  https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be
https://www.ti-enxame.com/pt/javascript/mostrar-quantos-caracteres-restantes-em-uma-caixa-de-texto-html-usando-javascript/1068970731/
Acessa input type: radio: https://pt.stackoverflow.com/questions/219949/pegar-o-valor-do-input-radio-com-javascript
*/
