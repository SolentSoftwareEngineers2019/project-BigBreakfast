// animate slide left
$('[data-toggle="collapse-slide-left"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    if($navMenuCont.attr("aria-expanded") === "true"){
        $navMenuCont.animate({'left': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
    }else{
        $navMenuCont.animate({'left': '+=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "true");
    }
});

// animate slide right
$('[data-toggle="collapse-slide-right"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    if($navMenuCont.attr("aria-expanded") === "true"){
        $navMenuCont.animate({'right': '-=250px'}, 250);
        $navMenuCont.attr("aria-expanded", "false");
    }else{
        if($navMenuCont.css("visibility") === "hidden"){
            $navMenuCont.css("visibility", "visible");
            $navMenuCont.attr("aria-expanded", "true");
        }else{
            $navMenuCont.animate({'right': '+=250px'}, 250);
            $navMenuCont.attr("aria-expanded", "true");
        }
    }
});

$(window).on('resize', function() {
   if($(window).width() < 1000){
       if($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "true"){
            $('[id="sidebar-left-wrapper"]').animate({'left': '-=250px'}, 250);
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "false");
       }
       if($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "true"){
            $('[id="sidebar-right-wrapper"]').css("visibility", "hidden");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "false");
       }
    }
    if($(window).width() >= 1000){
        if($('[id="sidebar-left-wrapper"]').attr("aria-expanded") === "false"){
            $('[id="sidebar-left-wrapper"]').animate({'left': '250px'});
            $('[id="sidebar-left-wrapper"]').attr("aria-expanded", "true");
       }
       if($('[id="sidebar-right-wrapper"]').attr("aria-expanded") === "false"){
            $('[id="sidebar-right-wrapper"]').css("visibility", "visible");
            $('[id="sidebar-right-wrapper"]').attr("aria-expanded", "true");
       }
    }
});