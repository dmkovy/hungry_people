'use strict';

const burger = document.querySelector('.burger'),
	headerNav = document.querySelector('.header__nav');

document.addEventListener('click', e => {
	if (burger.contains(e.target)) {
		headerNav.classList.add('header__nav--open');
	} else if (!burger.contains(e.target)) {
		handleClick(e);
	}
});

const handleClick = e => {
	if (!headerNav.contains(e.target)) {
		// headerNav.closest('.container').hidden = true;
		// headerNav.hidden = true;
		headerNav.classList.remove('header__nav--open');
	}
};
