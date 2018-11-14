const buttons = document.querySelectorAll('.button');
buttons.forEach(btnClick => btnClick.addEventListener('click', openInfobox));


function openInfobox(event) {
    const btn = event.target;
    const elementBlockSelector = 'contactUs';
    const open = '--opened';
    const allContactUs = document.querySelectorAll('.contactUs');
    const ctaSection = '.ctaSection';


    for (let i = 0; i < allContactUs.length; i++) {
        const element = allContactUs[i];

        if (btn.closest(ctaSection).querySelector('.contactUs') !== element) {
            element.classList.remove(elementBlockSelector + open);
        }
    };
    // ---ES6 way of doing the loop---
    // console.log(allContactUs.forEach);
    // allContactUs.forEach(function(element){
    //     console.log(element);
    //     element.classList.remove(elementBlockSelector + open);
    // });

    btn.closest(ctaSection).querySelector('.contactUs').classList.toggle(elementBlockSelector + open);
};