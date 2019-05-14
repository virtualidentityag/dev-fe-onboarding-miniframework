const toggleButtons = [...document.querySelectorAll('.callToAction__togglebutton')]; // Array.from(nodelist); Array.prototype.slice.call(nodelist);
const allComponents = [...document.querySelectorAll('.callToAction')];

toggleButtons.forEach(function (element) {
    element.addEventListener('click', function (event) {
        var componentClick = event.target.parentNode.parentNode;
        var tellOthersToClose = new CustomEvent('closeTooltipEvent', {
            detail: {
                origin: componentClick
            }
        });
        allComponents.forEach(component => {
            component.dispatchEvent(tellOthersToClose);
        })
    })
})

allComponents.forEach(function (element) {
    element.addEventListener('closeTooltipEvent', function (event) {
        if (event.detail.origin == element) {
            element.classList.toggle('callToAction--tooltipOpen');
        } else {
            element.classList.remove('callToAction--tooltipOpen');
        }
    })
})