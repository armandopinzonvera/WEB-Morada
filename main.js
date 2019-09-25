$(document).ready(function(){

    $(window).scroll(function(){

var barra = $(window).scrolltop();
var posicion = barra * 0.2;

$('Illustracion').css({
'background': '0 -' + posicion + 'px'
});

    });
});