$(document).ready(function(){
    // meanmenu
    // jQuery('.nav').meanmenu({
    //     meanMenuContainer: '.manueee',
    //     meanScreenWidth: "767"
    // });

    // slider
    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // vidieo popup
$('.vidieo').magnificPopup({
  type: 'iframe'

});

// course-active
$('.course-active').owlCarousel({
    loop:true,
    autoplay:true,
    smartSpeed:3000,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

// counter
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// creative-active
$('.creative-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
    
$('.students-active').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

})