import {
  animatedScrollTo
} from './es6-scroll-to.js';

animatedScrollTo(50);

var toggleButtons = [].slice.call(jQuery("body").find(".callToAction__togglebutton"));
console.log(toggleButtons);

$(".callToAction__togglebutton").each(function() {

  $(this).on("click", function() {
    var callToActionClicked = $(this).parent().parent();
    var callToActionWithTooltipOpen = $(".callToAction--tooltipOpen");  
    callToActionClicked.toggleClass("callToAction--tooltipOpen");
    if (callToActionWithTooltipOpen && (callToActionClicked !== callToActionWithTooltipOpen)) {
      callToActionWithTooltipOpen.removeClass("callToAction--tooltipOpen");
    }; 
  });
});