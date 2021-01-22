'use strict';
// import '/src/style/style.scss';

//=============== burger menu ==========================-------->
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const persdata = document.querySelector('.header-wrapper');
const arrow = document.querySelector('.arrow');
burger.addEventListener('click', () => {
  nav.classList.toggle('menu');
  burger.classList.toggle('open');
})

//=============== nav ==========================-------->
const skills = document.querySelector('.skills');
const skillsTitle = document.querySelector('.nav-skills');
skillsTitle.addEventListener('click', () => {
  // alert(123);
  skills.scrollIntoView();
})


//=============== foto ==========================-------->
const foto = document.querySelector('.main-foto__img');
foto.addEventListener('click', () => {
  foto.classList.toggle('full');
})
//=============== skills & lang ==========================-------->
const skillList = document.querySelector('.skill-list');
const skillItems = document.querySelectorAll('.skill-item');
const lang = document.querySelector('.lang-list');

function getCoordsStart (elem) {
  let box = elem.getBoundingClientRect();
  return box.top + pageYOffset
}
function getCoordsEnd (elem) {
  let box = elem.getBoundingClientRect();
  return box.bottom + pageYOffset
}

let extraPX = 35;

window.addEventListener('scroll', () => {
  const skillListYCoordsStart = getCoordsStart(skillList); 
  const skillListYCoordsEnd = getCoordsEnd(skillList); 
  const langStart = getCoordsStart(lang); 
  const langEnd = getCoordsEnd(lang); 
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
    if ((scroll > (skillItemYCoordsStart - extraPX)) && ((scroll < (skillItemYCoordsEnd + extraPX)))) {
      skillItems[i].querySelector('span').classList.add('visi');
      skillItems[i].querySelector('img').classList.add('toleft');
    } else {
      skillItems[i].querySelector('span').classList.remove('visi');
      skillItems[i].querySelector('img').classList.remove('toleft');
    }
  }

  if ((scroll > (langStart - extraPX)) && ((scroll < (langEnd + extraPX)))) {
    lang.classList.add('lang-effect');
  } else {
    lang.classList.remove('lang-effect');
  }

})

//=============== contacts ==========================-------->
// const contact = document.querySelector('.your-site__link');
// const contacts = document.querySelector('.footer-contacts');

// contact.addEventListener('click', () => {
//   contacts.classList.toggle('grad');
//   contact.addEventListener('transitionend', al, false)
// })

