$(".callToAction__togglebutton").each((index, button) => {
    $(button).on('click', function (clickevent) {
        $(".callToAction").each(function (index, mainComponent) {
            $(mainComponent).trigger('closeOthers', [{
                origin: $(button).parent().parent()
            }]);
        })
    })
})

$(".callToAction").each((index, component) => {
    $(component).on('closeOthers', function (event, data) {
        if (data.origin[0] == component) {
            $(component).toggleClass("callToAction--tooltipOpen")
        } else {
            $(component).removeClass("callToAction--tooltipOpen")
        }
    })
})
