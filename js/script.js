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

/*Interesting way for text to reveal itself*/
/*
$(function() {
    $(".about").hide().show(3000)
});
*/

$(".btn").mouseup(function(){
    $(this).blur();
})


/**
 function changeImage() {
    var image = document.getElementById('changeArrow');
    if (image.src.match("arrowOff")) {
        image.src = "img/download.png";
    } else {
        image.src = "img/lion.png";
    }
} */