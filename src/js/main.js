/* eslint semi: "error" */

import { animatedScrollTo } from './es6-scroll-to.js';

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
