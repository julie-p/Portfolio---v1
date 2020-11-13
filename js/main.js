/* Loader */
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function() {
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

$(document).ready(function () {
    //Ouvre le menu
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
    //Ferme le menu s/click et redirige vers la section
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    //Smooth scroll down
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });
    //Smooth scroll up  
    $('#up').on('click', function () {
        $('html, body').animate( {
            scrollTop: 0
        }, 2000);
    });
    //Initialisation AOS
    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});