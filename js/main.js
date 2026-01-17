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

document.getElementById("email-link")?.addEventListener("click", function (e) {
  e.preventDefault();

  const email = "namanitish03@gmail.com";
  const subject = "Opportunity or Collaboration";
  const body =
    "Hi Nitish,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ARegards,";

  // Try mailto first
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Fallback to Gmail web after 500ms
  setTimeout(() => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`,
      "_blank"
    );
  }, 500);
});