$(".callToAction__togglebutton").each((index, button) => {
    $(button).on('click', function (clickevent) {
        $(".callToAction").each(function (index, mainComponent) {
            $(mainComponent).trigger('closeOthers', [{
                origin: $(button).parent().parent(),
                object: {
                    0: "hallo",
                    1: "test",
                    test: 123
                }
            }]);
        })
    })
})

$(".callToAction").each((index, component) => {
    $(component).on('closeOthers', function (event, data) {
        console.log(data.object[1]); 
        if (data.origin[0] == component) {
            $(component).toggleClass("callToAction--tooltipOpen")
        } else {
            $(component).removeClass("callToAction--tooltipOpen")
        }
    })
})
