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
  tab.forEach((item, i) => {
    // if (e.target && e.target.classList.contains('tabs__content')) {
      if (e.target == item) {
        hide();
        show(i);
      }
    // }
  })
})