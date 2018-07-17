$('.chat-toggle').click(function () {
    $('.chat').fadeIn(500)
})

$('.chat-close').click(function () {
    $('.chat').fadeOut(500)
})

$(function () {
    var doc = $(document).height();
    console.log(doc)
    $(window).scroll(function () {
        if($(window).scrollTop() > doc/4) {
            $('.chat-toggle').fadeIn(500);
        }
    })
})

$('.sl-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.sl-slider-control',
    prevArrow: '<div class="sl-prev"></div>',
    nextArrow: '<div class="sl-next"></div>'
});
