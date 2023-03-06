const rangeSlider = document.querySelector('[type=range]');

document.documentElement.classList.add('js');

rangeSlider.addEventListener(
	'input',
	e => {
		rangeSlider.style.setProperty('--val', +rangeSlider.value);
	},
	false
);
