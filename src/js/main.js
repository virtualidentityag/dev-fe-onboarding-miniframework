/* eslint semi: "error" */

import {
  animatedScrollTo
} from './es6-scroll-to.js';

animatedScrollTo(50);

var toggleButtons = [].slice.call(document.querySelectorAll('.callToAction__togglebutton'));

console.log(toggleButtons);

toggleButtons.forEach((element) => {
  element.addEventListener('click', (e) => {
    var callToActionClicked = e.target.parentNode.parentNode;
    console.log(callToActionClicked);
    var callToActionWithTooltipOpen = document.querySelector('.callToAction--tooltipOpen');
    if (callToActionWithTooltipOpen && (callToActionClicked !== callToActionWithTooltipOpen)) {
      callToActionWithTooltipOpen.classList.remove('callToAction--tooltipOpen');
    };
    callToActionClicked.classList.toggle('callToAction--tooltipOpen');
  });
});


const smallValls = [1,12,15,6,43].map(function (val) {
  if (val < 10) {
    val = 0;
  } else {
    val = 99;
  }
  return val;
});
console.table(smallValls);

const rndValls = new Array(50).fill(0).map(i => i + Math.random());
console.log(rndValls);

