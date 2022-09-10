$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        prevArrow: '<button type="button" class="btn slider-btn slider-prev"><img src="img/arrow-left-solid.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="btn slider-btn slider-next"><img src="img/arrow-right-solid.svg" alt="arrow-right"></button>',
        asNavFor: '.sliders-two',

        responsive: [{
            breakpoint: 1051,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    })

    $(".sliders-two").slick({
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sliders',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 451,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            }
        ]
    })
});