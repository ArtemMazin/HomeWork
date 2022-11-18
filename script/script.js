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

const color = document.querySelectorAll('.colors__color'),
      button = document.querySelector('.random-button');

function generateColor() {
  let colorRandom = '';
  for (let i = 0; i < 3; i++) {
    colorRandom += Math.floor(Math.random() * 255) + ',';
  }
  return 'rgb(' + colorRandom.slice(0, colorRandom.length - 1) + ')'
}
generateColor();

function createColor () {
  color.forEach((box) => {
    box.style.background = generateColor();
    box.textContent = generateColor();
  })
}
createColor();
button.addEventListener('click', createColor);

// ---------------------------------------------------------------------------