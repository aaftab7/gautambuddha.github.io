$('.sec-owl').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    margin: 10,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        300: {
            items: 1,
        },
        600: {
            items: 2,
            nav: false
        },
        768: {
            items: 3,
            margin: 5,
        },
        1000: {
            items: 4,
            loop: true
        },
        1025: {
            items: 4,
            loop: true
        }
    }
})




function openNav() {
    document.getElementById("mySidenav1").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav1").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}