$('.sidebar-nav li a').click(function() {
    $(this).parent().toggleClass('active')
})


var lastImg = 1; //Set initial thumbnail and preview

document.getElementById(1).src = document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected";

function preview(img) {
    document.getElementById(lastImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    lastImg = img.id
}



$('.first-owl').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    dots: false,
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



$('.third-owl').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    dots: false,
    autoplayHoverPause: true,
    responsiveClass: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        300: {
            items: 2,
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


$('.testi-owl').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
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
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            margin: 0,
        },
        1000: {
            items: 1,
            loop: true
        },
        1025: {
            items: 1,
            loop: true
        }
    }
})




function openNav() {
    document.getElementById("mySidenav1").style.width = "200px";
    // document.getElementById("main").style.marginLeft = "200px";
}

function closeNav() {
    document.getElementById("mySidenav1").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}