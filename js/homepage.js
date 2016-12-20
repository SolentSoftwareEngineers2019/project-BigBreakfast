/*jslint browser: true*/
/*global $, jQuery, alert*/

var smallScreenSize = 750;
var mediumScreenSize = 1000;


/*do on launch*/
$(window).load (function () {
    'use strict';

    /*launch login window*/
    $('[id="login-window"]').modal('toggle');

    /*auto close sidebars if screensize gets too small*/
    if ($(window).width() < mediumScreenSize) {
        /*animation for left sidebar*/
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '-=250px'}, 0);
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "false");
            $('[id="wrapper"]').animate({ 'padding-left': "0px", 'padding-right': "0px"}, 0);
            $('[id="wrapper"]').attr("expanded-left", "true");
            $('[id="wrapper"]').attr("expanded-right", "true");
        }
        /*animation for right sidebar*/
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "hidden");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "false");
        }
    }

    /*auto open sidebars if screensize is big enough*/
    if ($(window).width() >= mediumScreenSize) {
        /*animation for left sidebar*/
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '250px'});
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "true");
            $('[id="wrapper"]').animate({ 'padding-left': "250px", 'padding-right': "250px"}, 0);
            $('[id="wrapper"]').attr("expanded-left", "false");
            $('[id="wrapper"]').attr("expanded-right", "false");
        }
        /*animation for right sidebar*/
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "visible");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "true");
        }
    }
});

/*do on window resize*/
$(window).on('resize', function () {
    'use strict';

    /*auto close sidebars if window is too small*/
    if ($(window).width() < mediumScreenSize) {
        /*animation for left sidebar*/
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '-=250px'}, 250);
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "false");
            $('[id="wrapper"]').animate({ 'padding-left': "0px", 'padding-right': "0px"}, 250);
            $('[id="wrapper"]').attr("expanded-left", "true");
            $('[id="wrapper"]').attr("expanded-right", "true");
        }
        /*animation for right sidebar*/
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "hidden");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "false");
        }
    }

    /*auto open sidebars if window is big enough*/
    if ($(window).width() >= mediumScreenSize) {
        /*animation for left sidebar*/
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '250px'});
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "true");
            $('[id="wrapper"]').animate({ 'padding-left': "250px", 'padding-right': "250px"}, 250);
            $('[id="wrapper"]').attr("expanded-left", "false");
            $('[id="wrapper"]').attr("expanded-right", "false");
        }
        /*animation for right sidebar*/
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "visible");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "true");
        }
    }
});

/*toggle left sidebar*/
$('[data-toggle="collapse-slide-left"]').on('click', function () {
    'use strict';
    var $navMenuCont;
    $navMenuCont = $($(this).data('target'));
    if ($navMenuCont.attr("aria-expanded") === "true") {
        $navMenuCont.animate({'left': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
        if ($('[id="wrapper"]').attr("expanded-left") === "false" && $(window).width() < mediumScreenSize && $(window).width() > smallScreenSize) {
            $('[id="wrapper"]').animate({'padding-left': '0px'}, 250);
            $('[id="wrapper"]').attr("expanded-left", "true");
        }
    } else {
        $navMenuCont.animate({'left': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
        if ($('[id="wrapper"]').attr("expanded-left") === "true" && $(window).width() < mediumScreenSize && $(window).width() > smallScreenSize) {
            $('[id="wrapper"]').animate({'padding-left': '250px'}, 250);
            $('[id="wrapper"]').attr("expanded-left", "false");
        }
    }
});

/*toggle right sidebar*/
$('[data-toggle="collapse-slide-right"]').on('click', function () {
    'use strict';
    var $navMenuCont;
    $navMenuCont = $($(this).data('target'));
    if ($navMenuCont.attr("aria-expanded") === "true") {
        /*===BUG right sidebar does not follow window after animating out===*/
        $navMenuCont.animate({'right': '-=250px'}, 250);
        /*============================*/
        $navMenuCont.attr("aria-expanded", "false");
        if ($('[id="wrapper"]').attr("expanded-right") === "false" && $(window).width() < mediumScreenSize && $(window).width() > smallScreenSize) {
            $('[id="wrapper"]').animate({'padding-right': '0px'}, 250);
            $('[id="wrapper"]').attr("expanded-right", "true");
        }
    } else {
        /*===BUG refer to previous===*/
        $navMenuCont.animate({'right': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
        /*==========================*/
        if ($('[id="wrapper"]').attr("expanded-right") === "true" && $(window).width() < mediumScreenSize && $(window).width() > smallScreenSize) {
            $('[id="wrapper"]').animate({'padding-right': '250px'}, 250);
            $('[id="wrapper"]').attr("expanded-right", "false");
        }
    }
});