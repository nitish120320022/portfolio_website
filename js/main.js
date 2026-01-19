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

// ===============================
// EMAIL LINK HANDLER (FIXED)
// ===============================

document.getElementById("email-link")?.addEventListener("click", function (e) {
  e.preventDefault();

  const email = "namanitish03@gmail.com";
  const subject = "Opportunity or Collaboration";
  const body =
    "Hi Nitish,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ARegards,";

  const mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Detect mobile devices
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // ✅ MOBILE: open mail app chooser ONLY
    window.location.href = mailtoURL;
  } else {
    // ✅ DESKTOP: try mailto first
    window.location.href = mailtoURL;

    // Fallback to Gmail after delay (desktop only)
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`,
        "_blank"
      );
    }, 600);
  }
});

// ===============================
// CONTACT DROPDOWN — FINAL LOGIC
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".contact-menu");
  const button = document.querySelector(".contact-btn");
  const dropdown = document.querySelector(".contact-dropdown");

  if (!menu || !button || !dropdown) return;

  // Toggle on button click
  button.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = menu.getAttribute("data-open") === "true";

    menu.setAttribute("data-open", String(!isOpen));
    button.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close on outside click
  document.addEventListener("click", () => {
    menu.setAttribute("data-open", "false");
    button.setAttribute("aria-expanded", "false");
  });

  // Prevent inside clicks from closing
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});