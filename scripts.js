document.addEventListener("DOMContentLoaded", function () {
    // Hero text animation
    gsap.from(".designer", { opacity: 0, y: 20, duration: 1, delay: 0.5, ease: "power3.out" });
    gsap.from(".name", { opacity: 0, y: 20, duration: 1, delay: 0.7, ease: "power3.out" });
    gsap.from(".subtext", { opacity: 0, y: 20, duration: 1, delay: 0.9, ease: "power3.out" });

    // Description animation
    gsap.from(".description", { opacity: 0, y: 20, duration: 1, delay: 1.2, ease: "power3.out" });

    // CTA Button animation
    // gsap.from(".cta", { opacity: 0, scale: 0.8, duration: 1, delay: 1.5, ease: "elastic.out(1, 0.5)" });

    // Social Icons Animation (staggered effect)
    gsap.from(".social-icons a", {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 1.8,
        ease: "power3.out",
        stagger: 0.2 // Each icon appears one after another
        
    });
    
});
