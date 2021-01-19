'use strict';
// import '/src/style/style.scss';

//=============== burger menu ==========================-------->
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const persdata = document.querySelector('.header-wrapper');
const arrow = document.querySelector('.arrow');
burger.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  persdata.classList.toggle('menu-close');
  burger.classList.toggle('open');
})

//=============== skills ==========================-------->
const foto = document.querySelector('.main-foto__img');
foto.addEventListener('click', () => {
  foto.classList.toggle('full');
})
//=============== skills ==========================-------->
const skillList = document.querySelector('.skill-list');
const skillItems = document.querySelectorAll('.skill-item');

function getCoordsStart (elem) {
  let box = elem.getBoundingClientRect();
  return box.top + pageYOffset
}
function getCoordsEnd (elem) {
  let box = elem.getBoundingClientRect();
  return box.bottom + pageYOffset
}

window.addEventListener('scroll', () => {
  const skillListYCoordsStart = getCoordsStart (skillList); 
  const skillListYCoordsEnd = getCoordsEnd (skillList); 
  const VHcenter = document.documentElement.clientHeight / 2;
  let scroll = window.scrollY + VHcenter;
  if ((scroll > skillListYCoordsStart) && ((scroll < skillListYCoordsEnd))) {
    arrow.style.opacity = .3;
  } else {
    arrow.style.opacity = 0;
  }

  for (let i = 0; i < skillItems.length; i++) {
    let skillItemYCoordsStart = getCoordsStart(skillItems[i]);
    let skillItemYCoordsEnd = getCoordsEnd(skillItems[i]);
    if ((scroll > skillItemYCoordsStart) && ((scroll < skillItemYCoordsEnd))) {
      skillItems[i].classList.add('toLeft');
    } else {
      skillItems[i].classList.remove('toLeft');
    }
  }

})


//=============== skills ==========================-------->

