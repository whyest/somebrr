import { gsap } from 'gsap';

let tl = gsap.timeline();

tl.from('.page__body', { opacity: 0, duration: 0.5 })
	// .from('.header', { opacity: 0, duration: 0.5 })
	.from('.cta__title', { opacity: 0, y: 100, duration: 0.7 })
	.from('.cta__title-text', { opacity: 0, y: 100, duration: 0.7 }, '-=0.7')
	.from('.logo', { opacity: 0, y: 100, duration: 0.7 }, '-=0.7')
	.from('.form', { opacity: 0, x: 400, duration: 0.7 });
