/* ==========================================================
   Divine Lotus Group Pvt. Ltd.
   Enterprise Script v4.0
   Premium Corporate Website
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       DOM ELEMENTS
    ========================================== */

    const body = document.body;

    const header = document.querySelector(".header");

    const mobileToggle = document.querySelector(".mobile-toggle");

    const navigation = document.querySelector("nav");

    const overlay = document.querySelector(".menu-overlay");

    const loader = document.getElementById("loader");

    const progressBar = document.getElementById("progressBar");

    const backToTop = document.getElementById("topBtn");



    /* ==========================================
       PAGE LOADER
    ========================================== */





    /* ==========================================
       STICKY HEADER
    ========================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();



    /* ==========================================
       MOBILE MENU
    ========================================== */

    if (mobileToggle && navigation) {

        mobileToggle.addEventListener("click", () => {

            mobileToggle.classList.toggle("active");

            navigation.classList.toggle("active");

            overlay?.classList.toggle("active");

            body.classList.toggle("menu-open");

        });

    }



    window.addEventListener("load", () => {

    if (!loader) return;

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.style.display = "none";
            document.body.style.overflow = "auto";

        }, 600);

    }, 2500);

});



    document.querySelectorAll("nav a").forEach(link => {

        link.addEventListener("click", () => {

            mobileToggle?.classList.remove("active");

            navigation?.classList.remove("active");

            overlay?.classList.remove("active");

            body.classList.remove("menu-open");

        });

    });    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const href = this.getAttribute("href");

            if (href === "#") return;

            const target = document.querySelector(href);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });



    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + current
            );

        });

    }

    window.addEventListener("scroll", updateActiveNav);



    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */

    function updateProgressBar() {

        if (!progressBar) return;

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        progressBar.style.width =
            (scrollTop / scrollHeight) * 100 + "%";

    }

    window.addEventListener("scroll", updateProgressBar);



    /* ==========================================
       HERO SWIPER
    ========================================== */

  if (typeof Swiper !== "undefined" && document.querySelector(".heroSwiper")) {

        new Swiper(".heroSwiper", {

            loop: true,

            speed: 1200,

            effect: "fade",

            fadeEffect: {
                crossFade: true
            },

            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }

        });

    }



    /* ==========================================
       TESTIMONIAL SWIPER
    ========================================== */

 if (typeof Swiper !== "undefined" && document.querySelector(".testimonialSwiper")) {

        new Swiper(".testimonialSwiper", {

            loop: true,

            spaceBetween: 30,

            autoplay: {
                delay: 4500,
                disableOnInteraction: false
            },

            pagination: {
                el: ".testimonial-pagination",
                clickable: true
            },

            breakpoints: {

                0: { slidesPerView: 1 },

                768: { slidesPerView: 2 },

                1200: { slidesPerView: 3 }

            }

        });

    }



    /* ==========================================
       COUNTER
    ========================================== */

    document.querySelectorAll(".counter").forEach(counter => {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const target = Number(counter.dataset.target);

                let value = 0;

                const step = Math.max(1, Math.ceil(target / 100));

                function animate() {

                    value += step;

                    if (value < target) {

                        counter.textContent = value;

                        requestAnimationFrame(animate);

                    } else {

                        counter.textContent = target + "+";

                    }

                }

                animate();

                observer.unobserve(counter);

            });

        }, { threshold: 0.5 });

        observer.observe(counter);

    });



    /* ==========================================
       BACK TO TOP
    ========================================== */

    if (backToTop) {

        backToTop.style.display = "none";

        window.addEventListener("scroll", () => {

            backToTop.style.display =
                window.scrollY > 350 ? "flex" : "none";

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }



    /* ==========================================
       INITIALIZE
    ========================================== */

    updateHeader();
    updateActiveNav();
    updateProgressBar();



    console.log("Divine Lotus Group Enterprise Script v4.0 Loaded");

});
