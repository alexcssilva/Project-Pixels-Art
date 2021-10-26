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
};

function getColor (evento) {
  let selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  evento.target.classList.add('selected');
};