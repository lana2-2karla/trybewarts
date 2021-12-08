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

function filledForm(event) {
  event.preventDefault();
  data.Nome = document.getElementById('input-name').value + ' ' + document.getElementById('input-lastname').value;
  data.Email = document.getElementById('input-email').value;
  data.Casa = document.getElementById('house').value;
  data.Família = document.getElementById('evaluation-form').family.value;
  data.Matérias = subjectCheck();
  data.Avaliação = document.getElementById('evaluation-form').rate.value;
  data.Observações = document.getElementById('textarea').value;
}
function subjectCheck () {
    const subjectClass = document.querySelectorAll('input[class="subject"]:checked');
    const boxChecked = [];
    for (let i = 0; i < subjectClass.length; i += 1) {
      boxChecked.push(subjectClass[i].value);
    }
    return boxChecked.join(', ');
  }
  console.log(data);

submitBtn.addEventListener('click',filledForm);

/* Referências:
Consulta ao repositório de Lilian Azevedo e Polyana Sousa : https://github.com/tryber/sd-018-b-project-trybewarts/blob/polyana-sousa-trybewarts/script.js;

Super Apoio do Kesley Muniz XP -B;

contador:  https://medium.com/walternascimentobarroso-pt/contador-de-caracteres-com-html-e-js-648ee612d7be
https://www.ti-enxame.com/pt/javascript/mostrar-quantos-caracteres-restantes-em-uma-caixa-de-texto-html-usando-javascript/1068970731/;

Acessa input type: radio: https://pt.stackoverflow.com/questions/219949/pegar-o-valor-do-input-radio-com-javascript
*/
