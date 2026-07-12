/* ==========================================================
   Divine Lotus Group Pvt. Ltd.
   Enterprise Animation v4.0
========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".reveal,.section-title,.hero-content,.service-card,.product-card,.project-card,.testimonial-card,.feature-card,.about-content,.about-image,.contact-box,.footer-column"
    );

    if (revealElements.length) {

        const revealObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                    revealObserver.unobserve(entry.target);

                }

            });

        }, {

            threshold:0.15

        });

        revealElements.forEach(item=>{

            revealObserver.observe(item);

        });

    }



    /* ==========================================
       HERO ENTRANCE
    ========================================== */

    const heroContent=document.querySelector(".hero-content");

    if(heroContent){

        heroContent.classList.add("hero-loaded");

    }



    /* ==========================================
       PREMIUM CARD HOVER
    ========================================== */

    document.querySelectorAll(
        ".service-card,.product-card,.project-card,.testimonial-card"
    ).forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*10;

            const rotateX=((rect.height/2-y)/rect.height)*10;

            card.style.transform=
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform=
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

        });

    });
    /* ==========================================
       RIPPLE EFFECT
    ========================================== */

    document.querySelectorAll(
        ".btn,.btn-primary,.btn-secondary"
    ).forEach(button => {

        button.addEventListener("click", function(e){

            const ripple=document.createElement("span");

            ripple.className="ripple";

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";
            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });



    /* ==========================================
       MEGA MENU
    ========================================== */

    document.querySelectorAll(".has-mega").forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.classList.add("active");

        });

        item.addEventListener("mouseleave",()=>{

            item.classList.remove("active");

        });

    });



    /* ==========================================
       FLOATING ELEMENTS
    ========================================== */

    document.querySelectorAll(".float").forEach(item=>{

        item.style.animation=
        "floating 4s ease-in-out infinite";

    });



    /* ==========================================
       IMAGE PARALLAX
    ========================================== */

    const parallaxItems=document.querySelectorAll(".parallax");

    function updateParallax(){

        const scroll=window.pageYOffset;

        parallaxItems.forEach(item=>{

            item.style.transform=
            `translateY(${scroll*0.25}px)`;

        });

    }

    if(parallaxItems.length){

        window.addEventListener("scroll",updateParallax);

        updateParallax();

    }



    /* ==========================================
       PERFORMANCE
    ========================================== */

    let ticking=false;

    window.addEventListener("scroll",()=>{

        if(!ticking){

            requestAnimationFrame(()=>{

                updateParallax();

                ticking=false;

            });

            ticking=true;

        }

    });



    /* ==========================================
       ACCESSIBILITY
    ========================================== */

    document.querySelectorAll("button,a").forEach(item=>{

        item.addEventListener("keyup",(e)=>{

            if(e.key==="Enter"){

                item.click();

            }

        });

    });



    /* ==========================================
       CONSOLE
    ========================================== */

    console.log(
        "%cDivine Lotus Group Pvt. Ltd.",
        "color:#f4b400;font-size:16px;font-weight:bold;"
    );

    console.log("Enterprise Animation v4.0 Loaded");

});