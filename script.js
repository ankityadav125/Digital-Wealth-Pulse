  function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotive();

// function crsr(){

//     var main = document.querySelector(".main")

//     document.addEventListener("mousemove", function(dets){
//         gsap.to(".cursor",{
//             top:dets.y,
//             left:dets.x,
//         })
//     })

//     main.addEventListener("mouseover", function(){
//         gsap.to(".cursor",{
//             scale: 2.5,
//             duration:.2
//         })
//     })

// }

// crsr()

var tl = gsap.timeline();
tl.from("nav img", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  // delay:.5,
});

tl.from(".menu a", {
  y: -90,
  opacity: 0,
  duration: 0.4,
  //   delay:.1,
  stagger: 0.2,
});

tl.from(".page1 h1", {
  x: -30,
  opacity: 0,
  duration: 0.4,
  //   delay:.1,
  stagger: 0.2,
});

tl.from(".page1 p", {
  x: -30,
  opacity: 0,
  duration: 0.4,
  //   delay:.1,
});

tl.from(".btn button", {
  y: 90,
  opacity: 0,
  duration: 0.2,
  //   delay:.1,
  stagger: 0.4,
});

gsap.from(".post", {
  y: 50,
  opacity: 0,
  duration: 3,
  delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page2",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: true,
    // pin:true
  },
});

gsap.from(".page3-content", {
  x: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".p3-right img", {
  x: 50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".page3",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page4-text", {
  y: 50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".page4",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page5-left", {
  y: 50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page5-right", {
  y: 50,
  duration: 0.5,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".page5",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page6-text", {
  y: 50,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page6",
    scroller: ".main",
    // markers:true,
    start: "top 60%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".page6-top", {
  x: -1500,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page6-content",
    scroller: ".main",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: true,
  },
});

gsap.from(".page6-bottom", {
  x: 1500,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page6-content",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page7-content", {
  y: 60,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page7-content",
    scroller: ".main",
    // markers: true,
    start: "top 70%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page8-text", {
  y: 40,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    // markers: true,
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page8-top .post .item", {
  x: -70,
  opacity: 0,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page8",
    scroller: ".main",
    // markers: true,
    start: "top 60%",
    end: "top -50%",
    scrub: true,
  },
});

gsap.from(".post .item", {
  x: -70,
  opacity: 0,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page8-bottom",
    scroller: ".main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub: true,
  },
});

gsap.from(".page9-left img", {
  x: -70,
  opacity: 0,
  duration: 1.5,
  // delay: 0.3,
  // stagger:1,
  scrollTrigger: {
    trigger: ".page9",
    scroller: ".main",
    // markers: true,
    start: "top 40%",
    end: "top 10%",
    scrub: true,
  },
});

gsap.from(".page9-right", {
  x: 70,
  // opacity:0,
  duration: 1.5,
  // delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page9",
    scroller: ".main",
    // markers: true,
    start: "top 40%",
    end: "top 0%",
    scrub: true,
  },
});

gsap.from(".footer-post-item", {
  x: -50,
  opacity: 0,
  duration: 1.5,
  delay: 0.3,
  stagger: 1,
  scrollTrigger: {
    trigger: "footer",
    scroller: ".main",
    // markers: true,
    start: "top 90%",
    end: "top 50%",
    scrub: true,
  },
});
