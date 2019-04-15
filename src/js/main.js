/* eslint semi: "error" */

import { animatedScrollTo } from './es6-scroll-to.js';

animatedScrollTo(50);

var toggleButtons = [].slice.call(document.querySelectorAll('.callToAction__togglebutton'));

console.log(toggleButtons);

var imageContainer = document.querySelector('.callToAction--thirdConversion').querySelector('.callToAction__backgroundImage');
console.log(imageContainer);

toggleButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    var tooltipClicked = e.target.parentNode.parentNode.querySelector('.callToAction__tooltip');
    var imageFlat = e.target.parentNode.parentNode.querySelector('.callToAction__image');
    document.querySelectorAll('.callToAction__tooltip--show').forEach((tooltipOpen) => {
      if (tooltipOpen !== tooltipClicked) {
        tooltipOpen.classList.remove('callToAction__tooltip--show');
      };
    });
    document.querySelectorAll('.callToAction_image--round').forEach((imageRound) => {
      if (imageRound !== imageFlat) {
        imageRound.classList.remove('callToAction__image--round');
      };
    });
    tooltipClicked.classList.toggle('callToAction__tooltip--show');
    imageFlat.classList.toggle('callToAction__image--round');
    imageContainer.classList.toggle('callToAction__backgroundImage--round');
  });
});
