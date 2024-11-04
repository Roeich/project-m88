$(document).ready(function() {

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
    })
});