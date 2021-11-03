const listUl = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
  const liLine = document.createElement('div');

  const ulLIne = document.createElement('div');
  for (let index1 = 0; index1 < 5; index1 += 1) {
    const liChild = document.createElement('div');
    liChild.classList.add('pixel');
    ulLIne.appendChild(liChild);
  }
  liLine.appendChild(ulLIne);
  listUl.appendChild(liLine);
}

window.onload = () => {
  const allPixel = document.querySelectorAll('.pixel');

  for (const pixel of allPixel) {
    pixel.style.backgroundColor = 'white';
  }
  const colorPalette = document.getElementById('color-palette');
  colorPalette.firstElementChild.classList.add('selected');
};

const clickColor = document.querySelectorAll('.color');

/* Desafio concluido e resolvido em grupo
pelo os alunos George Lucas - Turma 17, Abner Sousa - Turma 17, Gabriel Medeiros, Joao Keuwe - Turma -17 */
function getColor(evento) {
  const classSelect = document.querySelector('.selected');
  classSelect.classList.remove('selected');
  evento.target.classList.add('selected');
}
// -----------------------------------------------------------------------------------------------------------

for (let index = 0; index < clickColor.length; index += 1) {
  clickColor[index].addEventListener('click', getColor);
}

let selectColor = 'black';

for (const color of clickColor) {
  color.addEventListener('click', (event) => {
    selectColor = event.target.id;
  });
}

const pixelColors = document.querySelectorAll('.pixel');

for (const pixels of pixelColors) {
  pixels.addEventListener('click', (event) => {
    event.target.style.backgroundColor = selectColor;
  });
}

const btnClear = document.querySelector('#clear-board');

btnClear.addEventListener('click', () => {
  const divWhite = document.querySelectorAll('.pixel');

  for (let i = 0; i < divWhite.length; i += 1) {
    divWhite[i].style.backgroundColor = 'white';
  }
});
