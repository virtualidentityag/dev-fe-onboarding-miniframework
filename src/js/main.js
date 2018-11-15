// const buttons = document.querySelectorAll('.button');
// buttons.forEach(btnClick => btnClick.addEventListener('click', openInfobox));


// function openInfobox(event) {
//     const btn = event.target;
//     const elementBlockSelector = 'contactUs';
//     const open = '--opened';
//     const allContactUs = document.querySelectorAll('.contactUs');
//     const ctaSection = '.ctaSection';


//     for (let i = 0; i < allContactUs.length; i++) {
//         const element = allContactUs[i];

//         if (btn.closest(ctaSection).querySelector('.contactUs') !== element) {
//             element.classList.remove(elementBlockSelector + open);
//         }
//     };

//     btn.closest(ctaSection).querySelector('.contactUs').classList.toggle(elementBlockSelector + open);
// };



// ---ES6 way of doing the loop---
// console.log(allContactUs.forEach);
// allContactUs.forEach(function(element){
//     console.log(element);
//     element.classList.remove(elementBlockSelector + open);
// });



var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
    const element = buttons[i];

    element.addEventListener('click', openInfobox)
};

function openInfobox(event) {
    var btn = event.target;
    var elementBlockSelector = 'contactUs';
    var open = '--opened';
    var allContactUs = document.querySelectorAll('.contactUs');
    var ctaSection = '.ctaSection';

    for (let i = 0; i < allContactUs.length; i++) {
        var element = allContactUs[i];

        
        
        if (btn.closest(ctaSection).getElementsByClassName('contactUs')[0] !== element) {
            element.classList.remove(elementBlockSelector + open);    
        };
        
    };
    btn.closest(ctaSection).getElementsByClassName('contactUs')[0].classList.toggle(elementBlockSelector + open);

};