'use strict'

const tabLink = document.querySelectorAll('.tabs__link'),
  tab = document.querySelectorAll('.tabs__content'),
  tabsParent = document.querySelector('.tabs__links');

function hide() {
  tab.forEach(function (e) {
    e.style.display = 'none';
    e.classList.remove('active');
  })
  tabLink.forEach(function (e) {
    e.classList.remove('active');
  })
}

function show(i = 0) {
  tab[i].style.display = 'block';
  tab[i].classList.add('active');
  tabLink[i].classList.add('active');
}
hide();
show();

tabsParent.addEventListener('click', function (e) {
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

function createColor() {
  color.forEach((box) => {
    const rgbText = generateColor();
    box.style.background = rgbText;
    box.textContent = rgbText;
  })
}
createColor();
button.addEventListener('click', createColor);

// ----------------------------Slider-----------------------------------------------

const wrapper = document.querySelector('.slider-wrapper'),
  slider = document.querySelector('.slider'),
  images = document.querySelectorAll('.slider__image'),
  btnPrev = document.querySelector('.button__slider-prev'),
  btnNext = document.querySelector('.button__slider-next'),
  width = window.getComputedStyle(wrapper).width;

let offset = 0;
slider.style.width = width.slice(0, width.length - 2) * images.length + 'px';
images.forEach((e) => {
  e.style.width = width;
})

btnNext.addEventListener('click', () => {
  if (offset == width.slice(0, width.length - 2) * (images.length - 1)) {
    offset = 0;
  } else {
    offset += +width.slice(0, width.length - 2);
  }

  slider.style.transform = `translateX(-${offset}px)`;
});
btnPrev.addEventListener('click', () => {
  if (offset == 0) {
    offset = width.slice(0, width.length - 2) * (images.length - 1);
  } else {
    offset -= +width.slice(0, width.length - 2);
  }

  slider.style.transform = `translateX(-${offset}px)`;
});


// -------------------------------Basket------------------------------------------------------------------

const basketCard = document.querySelectorAll('.basket__card'),
  basketBtn = document.querySelectorAll('.basket__btn'),
  basketCards = document.querySelector('.basket__cards'),
  basketCardsBuy = document.querySelector('.basket__cards-ul');

function removeCard(e) {
  let liFirst = document.createElement('li'),
    liBtn = document.createElement('button');
  basketBtn.forEach((btn, i) => {
    if (e.target == btn) {
      e.target.remove();


      basketCardsBuy.append(liFirst);
      liFirst.append(basketCard[i]);
      liFirst.append(liBtn);
      liBtn.innerHTML = 'Удалить';
      liBtn.classList = 'liButton button';
    }
  })
}

// function removeCardBasket(e) {
//   liBtn.forEach((btn, i) => {
//     if (e.target == btn) {
//       e.target.remove();
//       basketCard[i].remove();
//     }
//   })
// }

basketBtn.forEach((btn) => {
  btn.addEventListener('click', removeCard);
})


basketCardsBuy.addEventListener('click', (e) => {
  if (e.target.className == 'liButton button') {

    const liBtn = document.querySelectorAll('.liButton'),
          cardsBasket = basketCardsBuy.querySelectorAll('.basket__card');

    liBtn.forEach((btn, i) => {
      if (e.target == btn) {
        e.target.remove();
        cardsBasket[i].remove();
      }
    })
  }
})