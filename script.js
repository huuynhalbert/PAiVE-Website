// Button click handlers - only for buttons without href (not anchor links)
document.querySelectorAll("button.btn").forEach((button) => {
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

  // Typing animation for heading
  const typingText = document.getElementById("typing-text");
  if (typingText) {
    const lines = ["Helping Businesses", "Run Like Enterprises"];
    let lineIndex = 0;
    let charIndex = 0;
    let isTyping = true;
    
    function typeText() {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        
        if (isTyping && charIndex <= currentLine.length) {
          // Build the display text
          let displayText = "";
          for (let i = 0; i <= lineIndex; i++) {
            if (i === lineIndex) {
              // Current line being typed
              displayText += currentLine.substring(0, charIndex);
            } else {
              // Already completed lines
              displayText += lines[i];
            }
            if (i < lineIndex) {
              displayText += "<br />";
            }
          }
          
          typingText.innerHTML = displayText;
          charIndex++;
          
          // Typing speed varies - slower for spaces, normal for letters
          const speed = currentLine[charIndex - 1] === " " ? 150 : 80;
          setTimeout(typeText, speed);
        } else if (charIndex > currentLine.length) {
          // Finished typing this line
          lineIndex++;
          charIndex = 0;
          
          if (lineIndex < lines.length) {
            // Add line break and continue to next line
            setTimeout(typeText, 300);
          } else {
            // All done - hide cursor after a moment
            setTimeout(() => {
              const cursor = document.querySelector(".typing-cursor");
              if (cursor) {
                cursor.style.display = "none";
              }
            }, 1000);
          }
        }
      }
    }
    
    // Start typing animation after a short delay
    setTimeout(() => {
      typeText();
    }, 1000);
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

// Smooth scroll behavior with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Only prevent default for same-page anchors
    if (href.startsWith("#") && href !== "#" && !href.includes(".")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  });
});

// Highlight active navigation link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    
    if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
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
  