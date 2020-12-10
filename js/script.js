'use strict';

const burger = document.querySelector('.burger'),
	headerNav = document.querySelector('.header__nav');

burger.addEventListener('click', e => {
	headerNav.classList.toggle('header__nav--open');
	burger.classList.toggle('burger--active');
});
