
var buttons = document.getElementsByClassName('ctaSection__button');


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
        
        console.log(element);
        
        
        if (btn.closest(ctaSection).getElementsByClassName('contactUs')[0] !== element) {
            element.classList.remove(elementBlockSelector + open);    
        };
        
    };
    btn.closest(ctaSection).getElementsByClassName('contactUs')[0].classList.toggle(elementBlockSelector + open);

};