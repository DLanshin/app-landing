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
    var mixer = mixitup(".gallery__inner",{
        load:{
            filter: ".bedroom"
        }
    });
})