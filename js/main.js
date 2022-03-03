$( function() {

    $('.container').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: true,
        slidesToShow: 2,
     
        
    })


    $('.container1').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: true,
        slidesToShow: 1,
        dots: true
    })

   })