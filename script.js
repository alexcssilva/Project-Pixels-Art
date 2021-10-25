let listUl = document.getElementById('pixel-board');

for (let index = 0; index < 5; index += 1) {
  let liLine = document.createElement('li');

  let ulLIne = document.createElement('ul');
  for (let index1 = 0; index1 < 5; index1 += 1) {
    let liChild = document.createElement('li');
    liChild.classList.add('pixel');
    ulLIne.appendChild(liChild);
  }
  liLine.appendChild(ulLIne);
  listUl.appendChild(liLine);
}

window.onload = () => {
  let allPixel = document.querySelectorAll('.pixel');

  for (let pixel of allPixel){
    pixel.style.backgroundColor = 'white';
  }
alert(allPixel.length)
};
