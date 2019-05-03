import {
  animatedScrollTo
} from './es6-scroll-to.js';

animatedScrollTo(50);

var toggleButtons = [].slice.call(jQuery("body").find(".callToAction__togglebutton"));
console.log(toggleButtons);

$.each(toggleButtons, function() {
  console.log("huhu00");
  $(this).click(function() {
    console.log("clickclick");
    
  })
});

$(".callToAction__togglebutton").each(function() {
  console.log("huhu11");
  $(this).on("click", function() {
    var callToActionClicked = $(this).parent().parent();
    console.log("clicked" + callToActionClicked); 
    var callToActionWithTooltipOpen = $(".callToAction--tooltipOpen");  
    if (callToActionWithTooltipOpen && (callToActionClicked !== callToActionWithTooltipOpen)) {
      callToActionWithTooltipOpen.removeClass("callToAction--tooltipOpen");
    };
    callToActionClicked.toggleClass("callToAction--tooltipOpen");
  });
});

// toggleButtons.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     var callToActionClicked = e.target.parentNode.parentNode;
//     console.log(callToActionClicked);
//     var callToActionWithTooltipOpen = document.querySelector('.callToAction--tooltipOpen');
//     if (callToActionWithTooltipOpen && (callToActionClicked !== callToActionWithTooltipOpen)) {
//       callToActionWithTooltipOpen.classList.remove('callToAction--tooltipOpen');
//     };
//     callToActionClicked.classList.toggle('callToAction--tooltipOpen');
//   });
// });

