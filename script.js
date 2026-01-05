// Button click handlers
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Thanks for your interest! Contact form coming next.");
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Animate elements on scroll
document.addEventListener("DOMContentLoaded", () => {
  // Animate hero content
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";
    heroContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 100);
  }

  // Animate logo
  const logo = document.querySelector(".logo img");
  if (logo) {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.8)";
    logo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    setTimeout(() => {
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 50);
  }

  // Animate tagline
  const tagline = document.querySelector(".tagline");
  if (tagline) {
    tagline.style.opacity = "0";
    tagline.style.transform = "translateX(-30px)";
    tagline.style.transition = "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s";
    setTimeout(() => {
      tagline.style.opacity = "1";
      tagline.style.transform = "translateX(0)";
    }, 200);
  }

  // Animate heading
  const heading = document.querySelector("h1");
  if (heading) {
    heading.style.opacity = "0";
    heading.style.transform = "translateY(20px)";
    heading.style.transition = "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s";
    setTimeout(() => {
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, 400);
  }

  // Animate paragraph
  const paragraph = document.querySelector(".hero-content p");
  if (paragraph) {
    paragraph.style.opacity = "0";
    paragraph.style.transform = "translateY(20px)";
    paragraph.style.transition = "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s";
    setTimeout(() => {
      paragraph.style.opacity = "1";
      paragraph.style.transform = "translateY(0)";
    }, 600);
  }

  // Animate buttons
  const buttons = document.querySelectorAll(".actions .btn");
  buttons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(20px)";
    btn.style.transition = `opacity 0.6s ease ${0.8 + index * 0.1}s, transform 0.6s ease ${0.8 + index * 0.1}s`;
    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    }, 800 + index * 100);
  });

  // Animate section headings
  const sectionHeadings = document.querySelectorAll("h2");
  sectionHeadings.forEach((heading) => {
    heading.style.opacity = "0";
    heading.style.transform = "translateY(30px)";
    heading.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(heading);
  });

  // Animate cards with stagger effect
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px) scale(0.95)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease";
    observer.observe(card);
    
    // Add hover effect
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px) scale(1.02)";
      card.style.boxShadow = "0 10px 30px rgba(0, 229, 255, 0.3)";
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
      card.style.boxShadow = "none";
    });
  });

  // Animate paragraphs in sections
  const sectionParagraphs = document.querySelectorAll(".section-dark p, .cta p");
  sectionParagraphs.forEach((p) => {
    p.style.opacity = "0";
    p.style.transform = "translateY(20px)";
    p.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(p);
  });

  // Update observer callback to handle staggered card animations
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0) scale(1)";
        }, index * 100);
        cardObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    cardObserver.observe(card);
  });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Removed parallax effect to prevent buttons from covering content

// Button hover animations
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", function() {
    this.style.transform = "translateY(-2px) scale(1.05)";
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    this.style.boxShadow = "0 5px 20px rgba(0, 229, 255, 0.4)";
  });
  
  button.addEventListener("mouseleave", function() {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "none";
  });
});
  