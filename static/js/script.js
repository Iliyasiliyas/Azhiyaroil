document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        // Toggle mobile menu
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    }

    window.onscroll = () => {
        if (menu && navbar) {
            // Close mobile menu on scroll
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    };

    // Example of handling image click
    document.querySelectorAll('.image-slider img').forEach(images => {
        images.onclick = () => {
            var src = images.getAttribute('src');
            let mainHomeImage = document.querySelector('.main-home-image');
            if (mainHomeImage) {
                // Change main home image on click
                mainHomeImage.src = src;
            }
        };
    });

    // Initialize Swiper slider
    var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            }
        },
    });

    // Handle resize event
    window.addEventListener('resize', function () {
        var helpOuterBox = document.getElementById("helpOuterBox");
        if (helpOuterBox !== null) {
            // Your logic for handling resize event
            const detailsHidden = !helpOuterBox.offsetHeight; // Check if the element is visible
            console.log("Resize event occurred. Details hidden:", detailsHidden);
        }
    });

    // Setup mobile navigation
    function setupMobileNav() {
        var someElement = document.getElementById("someElement");
        if (someElement !== null) {
            // Your logic for setting up mobile navigation
            console.log("Mobile navigation setup");
        }
    }

    // Replace the following lines with your actual functionality
    setupMobileNav();
});
