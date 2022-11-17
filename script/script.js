'use strict'

const tabLink = document.querySelectorAll('.tabs__link'),
      tab = document.querySelectorAll('.tabs__content'),
      tabsParent = document.querySelector('.tabs__links');

function hide() {
  tab.forEach(function (e) {
    e.style.display = 'none'; 
  })
}

function show(i = 0) {
  tab[i].style.display = 'block'; 
}
hide();
show();

tabsParent.addEventListener('click', function(e) {
  tabLink.forEach((item, i) => {
      if (e.target == item) {
        hide();
        show(i);
      }
  })
})

// ---------------------Colors--------------------------------

const color = document.querySelectorAll('.colors__color');

function generateColor() {

  const hexCode = '0123456789ABCDEF'
  let colorRandom = '';
  for (let i = 0; i < 6; i++) {
    colorRandom += hexCode[Math.floor(Math.random() * hexCode.length)]
  }
  return '#' + colorRandom
}

function setRandomColors() {
  color.forEach((box) => {
    box.style.background = generateColor()
  })
}
setRandomColors();