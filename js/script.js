$(document).ready(function(){
$(".project-carousel").owlCarousel({
    loop: true,
    nav: true,
    items:2,
    dots:false,
    responsive: {

        320: {
            items: 1
        },
        600: {
            items: 1
        },
        900:{
            items: 2
        }}
});
    $(".rent-car").owlCarousel({
        loop: true,
        nav: true,
        items:1,
        dots:false,

    }   );

});
$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show');
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 83) {
            $('#navi').addClass('slow');
        }
        else {
            $('#navi').removeClass('slow');
        }
    });});
