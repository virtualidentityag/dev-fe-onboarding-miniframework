var toggleShutterBox = {

    getButtonsArray: document.querySelectorAll('.ctaSection__button'),
    allContactUsElementsArray: document.querySelectorAll('.ctaSection__shutterBox'),

    init: function () {
        this.bindEventListeners();
    },

    bindEventListeners: function() {
        var self = this;
        self.getButtonsArray.forEach(function (elem) {
            elem.addEventListener('click', function(event) {
                self.openInfobox(event);
            });
        });
    },

    openInfobox: function(event) {
        var self = this;
        var btn = event.target;
        var elementBlockSelector = 'ctaSection__shutterBox';
        var openModifier = '--opened';
        var ctaSectionSelector = '.ctaSection';

        self.allContactUsElementsArray.forEach (function (elem) {
            if (btn.closest(ctaSectionSelector).querySelector('.ctaSection__shutterBox') !== elem) {  
                elem.classList.remove(elementBlockSelector + openModifier);
            }
        });
        
        btn.closest(ctaSectionSelector).querySelector('.ctaSection__shutterBox').classList.toggle(elementBlockSelector + openModifier);
    }
};

toggleShutterBox.init();