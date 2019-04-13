/* eslint semi: "error" */

import { animatedScrollTo } from './es6-scroll-to.js';

animatedScrollTo(50);

var toggleButtons = [].slice.call(document.querySelectorAll('.callToAction__togglebutton'));

console.log(toggleButtons);

toggleButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    var tooltipClosed = e.target.parentNode.parentNode.querySelector('.callToAction__tooltip');
    document.querySelectorAll('.callToAction__tooltip--show').forEach((tooltipOpen) => {
      if (tooltipOpen !== tooltipClosed) {
        tooltipOpen.classList.replace('callToAction__tooltip--show', 'callToAction__tooltip');
      };
    });
    tooltipClosed.classList.toggle('callToAction__tooltip--show');
  });
});
