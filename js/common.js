/**
 * Global Navbar Toggle Script
 */
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");
    const navbarWrapper = document.querySelector(".navbar-wrapper"); // Changed to wrapper

    // ===== 1. Mobile Menu Toggle =====
    if (menuToggle && navbarNav) {
        menuToggle.addEventListener("click", function () {
            const expanded = navbarNav.classList.toggle("navbar__nav--open");
            menuToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
        });

        // Close nav on outside click (mobile)
        document.addEventListener("click", function (e) {
            if (window.innerWidth < 768 && navbarNav.classList.contains("navbar__nav--open")) {
                if (!navbarNav.contains(e.target) && !menuToggle.contains(e.target)) {
                    navbarNav.classList.remove("navbar__nav--open");
                    menuToggle.setAttribute("aria-expanded", "false");
                }
            }
        });
    }

    // ===== 2. Hide-on-Scroll Logic =====
    if (navbarWrapper) {
        let lastScrollY = window.scrollY;
        let ticking = false;
        const SCROLL_THRESHOLD = 50;
        const SCROLL_TOLERANCE = 5;

        function updateNavbar() {
            const currentScrollY = window.scrollY;
            
            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY + SCROLL_TOLERANCE && currentScrollY > SCROLL_THRESHOLD) {
                // Scrolling Down - hide navbar
                if (!navbarWrapper.classList.contains('navbar-wrapper--hidden')) {
                    navbarWrapper.classList.add('navbar-wrapper--hidden');
                }
            } else if (currentScrollY < lastScrollY - SCROLL_TOLERANCE) {
                // Scrolling Up - show navbar
                if (navbarWrapper.classList.contains('navbar-wrapper--hidden')) {
                    navbarWrapper.classList.remove('navbar-wrapper--hidden');
                }
            }
            
            // Always show navbar at the top of the page
            if (currentScrollY < SCROLL_THRESHOLD) {
                navbarWrapper.classList.remove('navbar-wrapper--hidden');
            }
            
            lastScrollY = currentScrollY;
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });

        // Cleanup function
        window.__cleanupNavbarScroll = function() {
            window.removeEventListener("scroll", onScroll);
        };
    }
});