$(document).ready(function(){
    $('.reassons__carusel').slick({
        autoplay:true,
        speed:2000,
        prevArrow: ('<button type="button" class="slick-prev"></button>'),
        nextArrow: ('<button style="outline: none" type="button" class="slick-next">\n' +
            '                        <img src="img/Vector%20(Stroke).png" alt="">\n' +
            '                    </button>')
    })
    $('ul.reassons__tabs').on('click', 'li:not(.reassons__tab_active)', function() {
        $(this)
            .addClass('reassons__tab_active').siblings().removeClass('reassons__tab_active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('ul.slider__tabs').on('click', 'li:not(.slider__tab-active)', function() {
        $(this)
            .addClass('slider__tab-active').siblings().removeClass('slider__tab-active')
            .closest('div.slider__content').find('div.slider__item').removeClass('slider__item-active').eq($(this).index()).addClass('slider__item-active');
    });
    VANTA.NET({
        el: "#footer_dom",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe3b873,
        backgroundColor: 0x131313
    })
})