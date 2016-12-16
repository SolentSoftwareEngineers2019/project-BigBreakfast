// animate slide left
$('[data-toggle="collapse-slide-left"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    if($navMenuCont.attr("aria-expanded") === "true"){
        $navMenuCont.animate({'left': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
    }else{
        $navMenuCont.animate({'left': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
    }
});

// animate slide right
$('[data-toggle="collapse-slide-right"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    if($navMenuCont.attr("aria-expanded") === "true"){
        $navMenuCont.animate({'right': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
    }else{
        $navMenuCont.animate({'right': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
    }
});