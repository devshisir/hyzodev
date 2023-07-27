$(document).ready(function() {
    // feater slider active
    $('.featerSliderActive').owlCarousel({
            loop: true,
            margin: 15,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>'],
            autoplay:true,
            autoplayTimeout:5000,
            smartSpeed: 1000,
            items: 3,
            responsive: {
                0: {
                    nav: true,
                    items: 1,
                    stagePadding: 50,
                    margin: 8,
                },
                576:{
                    nav: true,
                    items: 2,
                    stagePadding: 20,
                    margin: 8,
                },
                768:{
                    nav: true,
                },
                992:{
                    nav: true,
                },
                1200:{
                    nav: false,
                }
            }
    })
    $('.addcardSliderActive').owlCarousel({
        loop: true,
            margin: 15,
            responsiveClass: true,
            nav: false,
            autoplay:true,
            autoplayTimeout:7000,
            smartSpeed: 1000,
            items: 1,
    })
    $('.sliderActive').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fa-regular fa-angle-left"></i>', '<i class="fa-regular fa-angle-right"></i>'],
        responsive: {
             0: {
                  items: 1,
                  nav: true,
                  stagePadding: 40,
                  margin: 10,
             },
             576: {
                  items: 2,
                  nav: true
             },
             768: {
                  items: 3,
                  nav: true,
                  loop: true
             }
        }
   })
    
});