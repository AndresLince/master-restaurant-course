$(function() {
    var boton = $('#menumovil');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(boton).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    })
    $(window).resize(function() {
        var width = $(window).width();
        if (width > 320 && menu.is(':hidden')) {
            console.log('entra')
           menu.removeAttr('style')
        }
    })
});