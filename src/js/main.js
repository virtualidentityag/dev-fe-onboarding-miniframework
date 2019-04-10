import {animatedScrollTo} from './es6-scroll-to.js';

//document.querySelector('.title').innerHTML = 'Great success!'
//document.querySelector('.text').innerHTML = 'Javascript is working!'

// $('document').ready(function(){
//     // your code
// });

// without jQuery (doesn't work in older IEs)
document.addEventListener('DOMContentLoaded', function(){
    // your code goes here
    console.log(document.querySelector(".imageText__linkButton--showInfo"));
    console.log("page loaded");
    console.log(document.getElementsByClassName("imageText__linkButton--showInfo"));

    var linkButtons = [].slice.call(document.querySelectorAll(".imageText__linkButton--showInfo"));
    console.log(linkButtons);
linkButtons.forEach((linkButton) =>{
  console.log("i am a button");

linkButton.addEventListener("click", (e) =>{
    console.log("clicked");
    var tooltipToToggle = e.target.parentNode.parentNode.querySelector(".imageText__tooltip");
    document.querySelectorAll(".imageText__tooltip--show").forEach((tooltipOpened) => {
if (tooltipToToggle != tooltipOpened){
    tooltipOpened.classList.remove("imageText__tooltip--show");
}
    });
    tooltipToToggle.classList.toggle("imageText__tooltip--show")
  });
});

}, false);
animatedScrollTo(500);
