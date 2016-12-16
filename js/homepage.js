/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).on('load', function () {
    'use strict';
    if ($(window).width() < 1000) {
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '-=250px'}, 250);
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "false");
        }
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "hidden");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "false");
        }
    }
    if ($(window).width() >= 1000) {
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '250px'});
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "true");
        }
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "visible");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "true");
        }
    }
});

$(window).on('resize', function () {
    'use strict';
    if ($(window).width() < 1000) {
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '-=250px'}, 250);
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "false");
            $('[id="wrapper"]').animate({ 'padding-left': "0px", 'padding-right': "0px"}, 250);
            $('[id="wrapper"]').attr("expanded-left", "true");
            $('[id="wrapper"]').attr("expanded-right", "true");
        }
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "true") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "hidden");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "false");
        }
    }
    if ($(window).width() >= 1000) {
        if ($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-left-wrapper"]').animate({'left': '250px'});
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "true");
            $('[id="wrapper"]').animate({ 'padding-left': "250px", 'padding-right': "250px"}, 250);
            $('[id="wrapper"]').attr("expanded-left", "false");
            $('[id="wrapper"]').attr("expanded-right", "false");
        }
        if ($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "false") {
            $('[id="sidebar-right-wrapper"]').css("visibility", "visible");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "true");
        }
    }
});

// animate slide left
$('[data-toggle="collapse-slide-left"]').on('click', function () {
    'use strict';
    var $navMenuCont;
    $navMenuCont = $($(this).data('target'));
    if ($navMenuCont.attr("aria-expanded") === "true") {
        $navMenuCont.animate({'left': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
        if ($('[id="wrapper"]').attr("expanded-left") === "false" && $(window).width() < 1000) {
            $('[id="wrapper"]').animate({'padding-left': '0px'}, 250);
            $('[id="wrapper"]').attr("expanded-left", "true");
        }
    } else {
        $navMenuCont.animate({'left': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
        if ($('[id="wrapper"]').attr("expanded-left") === "true") {
            $('[id="wrapper"]').animate({'padding-left': '250px'}, 250);
            $('[id="wrapper"]').attr("expanded-left", "false");
        }
    }
});

// animate slide right
$('[data-toggle="collapse-slide-right"]').on('click', function () {
    'use strict';
    var $navMenuCont;
    $navMenuCont = $($(this).data('target'));
    if ($navMenuCont.attr("aria-expanded") === "true") {
        if ($(window).width() < 1000) {
            $navMenuCont.css("visibility", "hidden");
        } else {
            $navMenuCont.animate({'right': '-=250px'}, 250);
        }
        $navMenuCont.attr("aria-expanded", "false");
        if ($('[id="wrapper"]').attr("expanded-right") === "false" && $(window).width() < 1000) {
            $('[id="wrapper"]').animate({'padding-right': '0px'}, 250);
            $('[id="wrapper"]').attr("expanded-right", "true");
        }
    } else {
        if ($navMenuCont.css("visibility") === "hidden") {
            $navMenuCont.css("visibility", "visible");
            $navMenuCont.attr("aria-expanded", "true");
        } else {
            $navMenuCont.animate({'right': '+=250px'}, 250);
            $navMenuCont.attr("aria-expanded", "true");
        }
        if ($('[id="wrapper"]').attr("expanded-right") === "true" && $(window).width() < 1000) {
            $('[id="wrapper"]').animate({'padding-right': '250px'}, 250);
            $('[id="wrapper"]').attr("expanded-right", "false");
        }
    }
});