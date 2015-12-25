/*Allows smooth scrolling to a link*/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});

/*Fades in texts*/
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
            $('.fadein :first-child').fadeOut()
                .next('img').fadeIn()
                .end().appendTo('.fadein');},
        1000);
});

/*Scroll Spy*/
$('body').scrollspy({ target: '#spy', offset:80});

$(function(){
    $('.fade').fadeIn('1500');
});



/*Allows the circular sidebar to expand when clicked and change css traits*/
$(".btn").mouseup(function(){
    $(this).blur();
});

$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {

        if (!active1) $(this).find('.test1').css({'background-color': '#003333', 'transform': 'translate(0px,125px)', opacity: '.7'});
        else $(this).find('.test1').css({'background-color': 'transparent', 'transform': 'none', opacity: '0'});
        if (!active2) $(this).find('.test2').css({'background-color': 'darkblue', 'transform': 'translate(60px,105px)', opacity: '.7'});
        else $(this).find('.test2').css({'background-color': 'transparent', 'transform': 'none', opacity: '0'});
        if (!active3) $(this).find('.test3').css({'background-color': '#003333', 'transform': 'translate(105px,60px)', opacity: '.7'});
        else $(this).find('.test3').css({'background-color': 'transparent', 'transform': 'none', opacity: '0'});
        if (!active4) $(this).find('.test4').css({'background-color': 'darkblue', 'transform': 'translate(125px,0px)', opacity: '.7'});
        else $(this).find('.test4').css({'background-color': 'transparent', 'transform': 'none', opacity: '0'});
        active1 = !active1;
        active2 = !active2;
        active3 = !active3;
        active4 = !active4;
    });
});

/*Interesting way for text to reveal itself*/
/*
 $(function() {
 $(".about").hide().show(3000)
 });
 */