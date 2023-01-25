$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header-container").addClass("add-shadow");
    } else {
        $(".header-container").removeClass("add-shadow");
    }
});