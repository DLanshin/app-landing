$(function () {
    $(".header__btn, .rightside-menu__close").on("click", function () {
        $(".rightside-menu").toggleClass("rightside-menu-close")
    });
    $(".top__slider").slick({
        dots: true,
        arrows: false,
        autoPlay: true,
    });
    $(".companies__items").slick({
        dots: false,
        arrows: false,
        autoPlay: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });
    debugger
    $(".collection").each( function(i, item){

        var count = parseInt(item.getAttribute("data-slides"));
        $(item).slick({
            dots: true,
            arrows: false,
            autoPlay: false,
            infinite: true,
            slidesToShow: count,
            slidesToScroll: count,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    })
    if($(".gallery__inner").length){
        var mixer = mixitup(".gallery__inner",{
            load:{
                filter: ".bedroom"
            }
        });
    }
})