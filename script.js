// Cursor Animaiton ----------------------------------
let page = document.querySelector("#page1-content");
let page2 = document.querySelector("#page2");

const MainPageCursor = () => {
    page.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor", {
            x: dets.x,
            y: dets.y,
            ease: Power3
        })
    })
    
    page.addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            opacity: 1,
            scale: 1
        })
    })
    
    page2.addEventListener("mouseenter", function(){
        gsap.to("#cursor", {
            opacity: 0,
            scale: 0
        })
    })
}
MainPageCursor();
// ---------------------------------------------------



// Main Page Animation -------------------------------
const MainPageAnimation = () => {
    gsap.to("span", {
        top: 0,
        stagger: 0.04,
        ease: Power4
    })
    
    gsap.from(".overlay h3", {
        left: "15vw",
        opacity: 0,
        duration: 0.8,
        ease: Power2
        // stagger: 1
    })
}
MainPageAnimation();
// ---------------------------------------------------



// Locootive -------------------------------
const smoothScroll = () => {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
smoothScroll();
// -----------------------------------------



// Page 2 Level Up Animation -------------------------- 
const page2Animation = () => {
    gsap.to(".over h3", {
        top: 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".over h3",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
    
    gsap.to(".line", {
        width: "94vw",
        duration: 0.6,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".line",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
    
    gsap.from(".elem h1", {
        top: "4vw",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".elem h1",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
}
page2Animation();
// ----------------------------------------------------



// Page 3 Level Up Animation --------------------------
const page3Animation = () => {
    gsap.from("#maintext .overlay h1", {
        top: "4vw",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".overlay h1",
            start: "top 85%",
            end: "top 85%",
            scrub: 2
        }
    })
}
page3Animation();
// ----------------------------------------------------



// Page 4 Level Up Animation -------------------------- 
const page4Animation = () => {
    gsap.to(".page4-over h3", {
        top: 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page4-over h3",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
    
    gsap.to(".page4-line", {
        width: "94vw",
        duration: 0.6,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page4-line",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
    
    gsap.from(".page4-elem h1", {
        top: "4vw",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page4-elem h1",
            start: "top 80%",
            end: "top 80%",
            scrub: 2
        }
    })
    
}
page4Animation();
// ----------------------------------------------------


// SVG Mouse ------------------------------------------
let conatiner = document.querySelector("#page5");

const svgCursor = () => {
    conatiner.addEventListener("mousemove", function(dets) {
        gsap.to("#svg-cursor", {
            x: dets.x,
            y: dets.y,
            ease: Power3
        })
    })
    
    conatiner.addEventListener("mouseenter", function(){
        gsap.to("#svg-cursor", {
            opacity: 1,
            scale: 1
        })
    })
    
    conatiner.addEventListener("mouseleave", function(){
        gsap.to("#svg-cursor", {
            opacity: 0,
            scale: 0
        })
    })
}
svgCursor();
// ----------------------------------------------------



// Page 6 Animation -----------------------------------
const page6Animation = () => {
    gsap.to(".page6-over h3", {
        top: 0,
        stagger: 0.2,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page6-over h3",
            start: "top 85%",
            end: "top 85%",
            scrub: 2
        }
    })
    
    gsap.to(".page6-line", {
        width: "94vw",
        duration: 0.6,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page6-line",
            start: "top 85%",
            end: "top 85%",
            scrub: 2
        }
    })
    
    gsap.from(".page6-elem h1", {
        top: "4vw",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: ".page6-elem h1",
            start: "top 85%",
            end: "top 85%",
            scrub: 2
        }
    })
    
}
page6Animation();
// ----------------------------------------------------



// Swiper Animation -----------------------------------
const SwiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
          },
    });
}
SwiperAnimation();
// ----------------------------------------------------



// Page 8 Animation ----------------------------------
const page8Animation = () => {
    gsap.from("#page8 #div-container .overlay h1", {
        top: "4vw",
        stagger: 0.1,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page8 #div-container .overlay h1",
            start: "top 85%",
            end: "top 85%",
            scrub: 2
        }
    })
}
page8Animation();
// --------------------------------------------------
