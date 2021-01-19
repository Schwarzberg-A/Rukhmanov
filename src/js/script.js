'use strict';
// import '/src/style/style.scss';


const cross = document.querySelector('.header__nav-cross');
const burger = document.querySelector('.nav-burger');
const nav = document.querySelector('.header__nav');
burger.addEventListener('click', () => {
  console.log(123);
  nav.style.gridTemplateRows = "100px";
})
