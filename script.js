// ===============================
// Web-and-Co - script.js
// ===============================

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    menuBtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Close mobile menu after clicking a link
  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-label", "Open menu");
    });
  });
}


// ===============================
// Header Background on Scroll
// ===============================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ===============================
// Current Year
// ===============================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// ===============================
// FAQ Accordion
// ===============================

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("show");
  });
}


// ===============================
// Smooth Anchor Links
// ===============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// ===============================
// Active Navigation Link
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#nav a");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    rootMargin: "-30% 0px -60% 0px"
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});


// ===============================
// Prevent Empty Links
// ===============================

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
