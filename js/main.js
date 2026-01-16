// ===============================
// GSAP SETUP
// ===============================
gsap.registerPlugin(ScrollTrigger);

// ===============================
// HERO INTRO ANIMATION
// ===============================
window.addEventListener("load", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.9
    }
  });

  // Navbar
  tl.from(".navbar", {
    y: -60,
    opacity: 0
  });

  // Hero Heading
  tl.from(".hero h1 span, .hero h1", {
    y: 60,
    opacity: 0,
    stagger: 0.15
  }, "-=0.4");

  // Subtitle
  tl.from(".hero-subtitle", {
    y: 30,
    opacity: 0
  }, "-=0.5");

  // Buttons
  tl.from(".hero-actions a", {
    y: 20,
    opacity: 0,
    stagger: 0.2
  }, "-=0.4");

  // Hero Image (✅ FIXED)
  tl.from(".hero-image img", {
    scale: 0.85,
    opacity: 0,
    duration: 0.8
  }, "-=0.6");
});