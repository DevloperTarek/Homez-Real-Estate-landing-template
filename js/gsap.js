document.addEventListener('DOMContentLoaded', () => {
    let cursor = document.querySelector('.custom-cirsor');
        // gsap.to(cursor, {
        //     x: e.clientX,
        //     y: e.clientY,
        //     duration: 0.2,
        //     ease:"power2.out",
        // })
        let size;
        document.body.addEventListener("mousemove", (ev)=>{
        let path = ev.composedPath();
    
        if (path.some(x=>x.tagName == "A")) size = 100;
        else size = 40;
    
        cursor.style.left   = (ev.clientX - size/2) + "px";
        cursor.style.top    = (ev.clientY - size/2) + "px";
        cursor.style.width  = size + "px";
        cursor.style.height = size + "px";
        });
})


 // Part 1: Fade-in + scale up
    gsap.from("#part1", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      ease: "power2.out"
    });

    // Part 2: Slide in from left
    gsap.from("#part2", {
      x: -100,
      opacity: 0,
      delay: 0.5,
      duration: 1.2,
      ease: "expo.out"
    });

    // Part 3: Rotate in from top
    gsap.from("#part3", {
      y: -80,
      rotate: 45,
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ease: "back.out(1.7)"
    });