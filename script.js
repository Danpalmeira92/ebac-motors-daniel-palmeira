$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })
})