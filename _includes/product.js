function needHelpClick(el) {
    Tawk_API.toggle();
    $(el).remove();
}

window.setupProduct = function() {
    /* Setup scroll tracking, might move this to nav.js if necessary */
    var $navbar = $('.navbar').first();
    var topOfNav = $navbar.offset().top;
    var height = $navbar.outerHeight();
    var $navContent = $('.product-nav-content');

    $(window).scroll(function() {
        if($(window).scrollTop() > (topOfNav + height)) {
            $navContent.css('position', 'fixed');
            $navContent.css('top', '2rem');
        } else {
            $navContent.css('position', 'inherit');
            $navContent.css('top', '0');
        }
    });

    /* Check for mobile nav */
    var $navMobile = $('.product-nav-mobile').first();
    if ($navMobile.css('display') !== 'none') {
        /* We're on Mobile */
        $('.product-main').first().css('padding-bottom', $navMobile.outerHeight());
        /* Change Tawk.To behavior */
        window.onTawkLoad = function() {  
            Tawk_API.hideWidget();
            Tawk_API.onChatMinimized = function() {
                Tawk_API.hideWidget();
            };
        };
        if (Tawk_API && Tawk_API.hideWidget) {
            Tawk_API.hideWidget();
        }
    }
};
