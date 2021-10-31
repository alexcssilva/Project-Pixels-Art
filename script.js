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

let clickColor = document.querySelectorAll('.color');

for (let index = 0; index < clickColor.length; index += 1) {
  clickColor[index].addEventListener('click', getColor);
}

/* Desafio concluido e resolvido em grupo
pelo os alunos George Lucas - Turma 17, Abner Sousa - Turma 17, Gabriel Medeiros, Joao Keuwe - Turma -17 */
function getColor(evento) {
  const classSelect = document.querySelector('.selected');
  classSelect.classList.remove('selected');
  evento.target.classList.add('selected');
}

let selectColor = 'black';

for (let color of clickColor) {
  color.addEventListener('click', function (element) {
    selectColor = element.target.id;
  });
}

let pixelColors = document.querySelectorAll('.pixel');

for (let pixels of pixelColors) {
  pixels.addEventListener('click', function (elementPixel) {
    elementPixel.target.style.backgroundColor = selectColor;
  });
}
