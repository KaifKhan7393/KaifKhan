$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    

    // typing text animation script
    var typed = new Typed(".animated-text", {
        strings: [" Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});


// Adding javascript  to about button to show more content
function toggleHide() {
    let btn = document.getElementById('btn-about');
    let para = document.getElementById('para');
    if (para.style.display != 'none') {
        para.style.display = 'none';
    }
    else {
        para.style.display = 'block';
    }
}