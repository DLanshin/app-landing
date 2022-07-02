$(function () {
    $(".header__btn, .rightside-menu__close").on("click", function () {
        $(".rightside-menu").toggleClass("rightside-menu-close")
    });
    $(".top__slider").slick({
        dots: true,
        arrows: false,
        autoPlay: true,
    });
})