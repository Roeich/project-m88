$(document).ready(function() {
    /* __________________ start home page __________________ */
    // ... header marquee
    $('.header_marquee .marquee').marquee({
        startVisible: true,
        duration: 15000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    });

    // .. offer slider 
    $(".offer_slider").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        nav:false,
        margin:10,
        autoplay:true,
        autoplayTimeout: 3000
    });

    // .. filtering items
    $("[data-filter]").on("click",function(){
        const selector=$(this).attr("data-filter");
        $("[data-filter]").removeClass("active");
        $(this).addClass("active");
        if(selector==="*"){
            $(".filter_item").removeClass("d-none");
        }else{
            $(".filter_item").addClass("d-none");
            $(`.${selector}`).removeClass("d-none");
        }
    });
    /* __________________ end home page __________________ */
});