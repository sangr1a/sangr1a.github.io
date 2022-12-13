(function ($) {
    "use strict";
    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });
// TOP Menu Sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $("#sticky-header").removeClass("sticky");
            $('#back-top').fadeIn(500);
        } else {
            $("#sticky-header").addClass("sticky");
            $('#back-top').fadeIn(500);
        }
    });
    $(document).ready(function(){

// mobile_menu
        var menu = $('ul#navigation');
        if(menu.length){
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: '+',
                openedSymbol:'-'
            });
        };

        if (document.getElementById('default-select')) {
            $('select').niceSelect();
        }

    });
})(jQuery);