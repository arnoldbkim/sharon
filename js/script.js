$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
    
})

$(document).ready(function() {

    $('#slides').superslides({
      
    });

    let typed = new Typed(".typed", {
        strings: ["Actress.", "Writer.", "Translator."],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    });




    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            },
        }
    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
        
    })
   


    $("#navigation li a").click(function(e){
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");
    });

    
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation(){
        let body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav")
        }

    }

});