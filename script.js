// Contact form handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // In a real implementation, this would send data to a server
      alert("Thank you for your interest! We'll be in touch soon.");
      contactForm.reset();
    });
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav");

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      mainNav.classList.toggle("active");
    });

    // Close menu when clicking on a nav link
    const navLinks = mainNav.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        mainNav.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove("active");
        mainNav.classList.remove("active");
      }
    });
  }
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

  // Typing animation for "Small and Medium businesses" - continuous loop
  const typingBusinesses = document.getElementById("typing-businesses");
  if (typingBusinesses) {
    const text = "Small and Medium Businesses";
    let charIndex = 0;
    let isTyping = true;
    let isDeleting = false;

    function typeBusinessesText() {
      if (isTyping && charIndex < text.length) {
        // Show text with blinking cursor while typing
        typingBusinesses.innerHTML = text.substring(0, charIndex) + '<span class="typing-cursor">|</span>';
        charIndex++;

        // Typing speed varies - slower for spaces, normal for letters
        const currentChar = text[charIndex - 1];
        const speed = currentChar === " " ? 150 : 80;
        setTimeout(typeBusinessesText, speed);
      } else if (isTyping && charIndex === text.length) {
        // Finished typing - show full text with cursor, then wait before deleting
        typingBusinesses.innerHTML = text + '<span class="typing-cursor">|</span>';
        isTyping = false;
        setTimeout(() => {
          isDeleting = true;
          typeBusinessesText();
        }, 2000); // Wait 2 seconds before deleting
      } else if (isDeleting && charIndex > 0) {
        // Delete text character by character (backwards)
        charIndex--;
        typingBusinesses.innerHTML = text.substring(0, charIndex) + '<span class="typing-cursor">|</span>';
        setTimeout(typeBusinessesText, 60); // Smooth deletion speed
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting - start typing again
        isDeleting = false;
        isTyping = true;
        typingBusinesses.innerHTML = '<span class="typing-cursor">|</span>';
        setTimeout(typeBusinessesText, 300); // Brief pause before retyping
      }
    }

    // Start typing animation after a short delay (after the main heading animation)
    setTimeout(() => {
      typeBusinessesText();
    }, 2000);
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

// Scroll Down Arrow - Show after 1 second on home page
document.addEventListener("DOMContentLoaded", () => {
  const scrollDownArrow = document.getElementById("scroll-down-arrow");
  const heroSection = document.getElementById("home");

  if (scrollDownArrow && heroSection) {
    let showArrowTimeout;
    let isArrowVisible = false;

    function checkIfOnHomePage() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

      // Check if we're still on the home page (within hero section)
      if (scrollY < heroBottom - 100) {
        // We're on the home page - show arrow after 1 second if not already visible
        if (!isArrowVisible && !showArrowTimeout) {
          showArrowTimeout = setTimeout(() => {
            scrollDownArrow.classList.add("visible");
            isArrowVisible = true;
            showArrowTimeout = null;
          }, 1000); // Show after 1 second
        }
      } else {
        // We've scrolled past the home page - hide arrow
        if (showArrowTimeout) {
          clearTimeout(showArrowTimeout);
          showArrowTimeout = null;
        }
        scrollDownArrow.classList.remove("visible");
        isArrowVisible = false;
      }
    }

    // Check on scroll
    window.addEventListener("scroll", checkIfOnHomePage);

    // Check on initial load - start timer if on home page
    checkIfOnHomePage();

    // Add click handler to scroll to next section
    scrollDownArrow.addEventListener("click", () => {
      const nextSection = document.querySelector("section:not(#home)");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});

// Hide logo and show back-to-top arrow when scrolling past home page
const logo = document.querySelector(".logo");
const backToTop = document.getElementById("back-to-top");
const heroSection = document.getElementById("home");

if (logo && backToTop && heroSection) {
  function handleLogoVisibility() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroRect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight;

    // Hide logo when scrolled past the hero section
    if (scrollY > heroHeight - 100) {
      // Scrolled past home page - hide logo, show back-to-top arrow
      logo.classList.add("hidden");
      backToTop.classList.add("visible");
    } else {
      // On home page - show logo, hide back-to-top arrow
      logo.classList.remove("hidden");
      backToTop.classList.remove("visible");
    }
  }

  // Check on scroll
  window.addEventListener("scroll", handleLogoVisibility);

  // Check on initial load
  handleLogoVisibility();

  // Add click handler to scroll to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Removed parallax effect to prevent buttons from covering content

// How We Work - Active step highlighting
const workSteps = document.querySelectorAll(".work-step");
const stepIndicators = document.querySelectorAll(".step-indicator");

if (workSteps.length > 0) {
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stepNumber = entry.target.getAttribute("data-step");

        // Update step content
        workSteps.forEach((step) => step.classList.remove("active"));
        entry.target.classList.add("active");

        // Update visual indicator
        stepIndicators.forEach((indicator) => indicator.classList.remove("active"));
        const activeIndicator = document.querySelector(`.step-indicator[data-step="${stepNumber}"]`);
        if (activeIndicator) {
          activeIndicator.classList.add("active");
        }
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: "-20% 0px -20% 0px"
  });

  workSteps.forEach((step) => {
    stepObserver.observe(step);
  });
}

// Lighthouse New Layout - Click-based Content Updates
const lighthouseContentText = document.getElementById("lighthouse-content-text");
const lighthouseListItems = document.querySelectorAll(".lighthouse-list-item");

const layerData = {
  sustainability: {
    title: "Sustainability Focus",
    description: "Continuous measurement and optimization of cost, efficiency, energy usage, and ESG-aligned improvements. Value Engineering connects all pillars to deliver measurable business outcomes.",
    details: [
      "Energy efficiency optimization",
      "ESG-aligned process improvements",
      "Value-driven decision making",
      "ROI measurement and optimization"
    ]
  },
  agentic: {
    title: "Agentic Workforce",
    description: "Deploy specialized AI Personas trained on your proprietary knowledge to support decision-making, coordination, and execution at scale.",
    details: [
      "Specialized AI Personas by role and function",
      "Proprietary Personal Language Models (PLMs)",
      "No-code training and deployment",
      "Enterprise-grade security (SOC 2, HIPAA)"
    ]
  },
  physical: {
    title: "Physical Intelligence",
    description: "Leverage IoT-enabled real-time visibility and AI-powered threat detection for safety, security, and situational awareness in physical environments",
    details: [
      "Real-time monitoring and threat detection",
      "IoT sensor integration and data collection",
      "Automated response protocols",
      "Safety and security optimization"
    ]
  },
  operational: {
    title: "Operational Backbone",
    description: "This foundational layer ensures consistency and control across all capabilities through structured workflows, governance, and operational discipline. Key elements include:",
    details: [
      "Optimized workflow design",
      "Robust governance frameworks and controls",
      "Standardized processes across teams",
      "Fostering operational consistency and discipline"
    ]
  }
};

function updateLighthouseContent(layerKey) {
  const data = layerData[layerKey];
  if (!data || !lighthouseContentText) return;

  lighthouseContentText.style.opacity = "0";

  setTimeout(() => {
    lighthouseContentText.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <ul>
        ${data.details.map(detail => `<li>– ${detail}</li>`).join("")}
      </ul>
    `;
    lighthouseContentText.style.opacity = "1";
  }, 200);
}

function setActiveListItem(activeItem) {
  lighthouseListItems.forEach((item) => {
    item.classList.remove("active");
  });
  activeItem.classList.add("active");
}

// Initialize with first item
if (lighthouseListItems.length > 0) {
  const firstItem = lighthouseListItems[0];
  const firstLayer = firstItem.getAttribute("data-layer");
  setActiveListItem(firstItem);
  updateLighthouseContent(firstLayer);
}

// Add click handlers to list items
lighthouseListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const layerKey = item.getAttribute("data-layer");
    setActiveListItem(item);
    updateLighthouseContent(layerKey);
  });
});

// Odoo Tabs Functionality
const odooTabs = document.querySelectorAll(".odoo-tab");
const odooContent = document.getElementById("odoo-content");

const odooContentData = {
  "operational-framework": {
    layout: "odoo-philosophy-cards",
    heading: "Odoo Solutions<br>by PAiVE",
    tagline: "PAiVE is a consulting-led, system-agnostic partner. We offer Odoo not just as software, but as a strategic modular platform to drive operational excellence and measurable business outcomes for your organization.",
    cards: [
      {
        icon: "architect",
        title: "Architect & Align",
        description: "We start with fit-gap analysis and solution architecture to ensure the Odoo ecosystem aligns perfectly with your strategic objectives."
      },
      {
        icon: "implement",
        title: "Implement & Customize",
        description: "End-to-end execution including configuration, data migration, and precise customization using Studio to match your unique workflows."
      },
      {
        icon: "hosting",
        title: "Hosting Advisory",
        description: "Expert guidance on selecting the right hosting environment—Odoo Online, Odoo.sh, or On-Premise—based on your compliance and scale needs."
      },
      {
        icon: "enable",
        title: "Enable & Sustain",
        description: "We deliver comprehensive training, change management, and managed support to ensure adoption, faster time-to-value, and lower TCO."
      }
    ]
  },
  "ai-agentic-workforce": {
    layout: "personal-ai",
    heading: "Personal.ai<br>Workforce<br>Platform",
    paragraph: "As the AI-Agentic Workforce Layer of PAiVE, Personal.ai allows enterprises to train and deploy specialized AI workers (Personas) at scale. It transforms individual expertise into scalable, collaborative knowledge assets.",
    firstLineHighlight: true,
    trustedBy: {
      label: "TRUSTED BY:",
      partners: [
        { name: "AT&T" },
        { name: "Amer Sports" }
      ]
    },
    cards: [
      {
        icon: "personas",
        title: "Specialized AI Personas",
        description: "Train and deploy AI workers with specific job functions and deep domain expertise. Scale your team's capability without linear headcount growth."
      },
      {
        icon: "plm",
        title: "Proprietary Personal Language Models",
        description: "Unlike generic LLMs, our Personal Language Models (PLM) are trained on your proprietary data, maintaining context, tone, and specific knowledge."
      },
      {
        icon: "nocode",
        title: "No-Code Platform",
        description: "Create and manage AI teams without engineering resources. The intuitive interface allows for rapid training and deployment of new AI capabilities."
      },
      {
        icon: "security",
        title: "Enterprise-Grade Security",
        description: "Built for the enterprise with SOC 2 and HIPAA compliance. Your data remains private, secure, and exclusively yours—never used to train public models."
      }
    ]
  },
  "strategic-operationality": {
    title: "Strategic Operationality",
    description: "Thanks to our dual expertise in consulting and business, we firmly believe that strategy must constantly be tested against the reality on the ground. Our approach is based on standardized and data-driven methodologies that accelerate our diagnosis and prioritize the actionability of our recommendations",
    items: [],
    tag: "STRATNXT"
  }
};

const odooLogoImage = document.getElementById("odoo-logo-image");
const paiveLogoImage = document.getElementById("paive-logo-image");
const odooIconDisplay = document.getElementById("odoo-icon-display");
const odooLogoContainer = document.getElementById("odoo-logo-container");
const odooOperationalIntro = document.getElementById("odoo-operational-intro");
const odooOperationalHeading = document.getElementById("odoo-operational-heading");
const odooOperationalTagline = document.getElementById("odoo-operational-tagline");
const odooPersonalAiIntro = document.getElementById("odoo-personal-ai-intro");
const personalAiHeading = document.getElementById("personal-ai-heading");
const personalAiParagraph = document.getElementById("personal-ai-paragraph");
const personalAiPartners = document.getElementById("personal-ai-partners");
const odooLogoSide = document.querySelector(".odoo-logo-side");

function getOdooOperationalCardIcon(iconKey) {
  const icons = {
    architect: '<svg class="odoo-operational-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
    implement: '<svg class="odoo-operational-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 1 9 9"/><circle cx="12" cy="12" r="3"/><path d="M12 21a9 9 0 0 1-9-9"/><path d="M3 12h2"/><path d="M19 12h2"/><path d="M12 3v2"/><path d="M12 19v2"/></svg>',
    hosting: '<svg class="odoo-operational-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 10h20"/><path d="M6 10v10"/><path d="M12 10v10"/><path d="M18 10v10"/></svg>',
    enable: '<svg class="odoo-operational-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17 9 12 4 7"/><path d="M9 17h6"/><path d="M15 7v10"/><path d="M12 2L14 8h4l-3 4 1 6-4-6-4 6 1-6-3-4h4l2-6z"/></svg>'
  };
  return icons[iconKey] || "";
}

function getPersonalAiCardIcon(iconKey) {
  const icons = {
    personas: '<svg class="personal-ai-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/></svg>',
    plm: '<svg class="personal-ai-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/><circle cx="12" cy="10" r="1.5" fill="currentColor" opacity="0.6"/></svg>',
    nocode: '<svg class="personal-ai-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><path d="M8 16l2-2"/><path d="M16 8l-2 2"/></svg>',
    security: '<svg class="personal-ai-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'
  };
  return icons[iconKey] || "";
}

const tabIcons = {
  "what-we-do": "paive",
  "why-odoo": "odoo",
  "operational-framework": "odoo",
  "ai-agentic": `<svg class="odoo-tab-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/><path d="M3 21L6 18L9 21L6 18L3 21Z"/><path d="M15 21L18 18L21 21L18 18L15 21Z"/></svg>`,
  "ai-agentic-workforce": `<img src="./images/personalai.png" alt="AI Agentic Workforce" class="odoo-tab-icon-img" />`,
  "strategic-operationality": `<img src="./images/stratnxt.webp" alt="STRATNXT" class="odoo-tab-icon-img" />`
};

function updateOdooLogo(tabKey) {
  if (!odooLogoImage || !odooIconDisplay) return;

  const iconType = tabIcons[tabKey];

  if (iconType === "odoo") {
    // Show Odoo logo
    odooLogoImage.style.display = "block";
    if (paiveLogoImage) paiveLogoImage.style.display = "none";
    odooIconDisplay.style.display = "none";
  } else if (iconType === "paive") {
    // Show PAiVE logo
    odooLogoImage.style.display = "none";
    if (paiveLogoImage) paiveLogoImage.style.display = "block";
    odooIconDisplay.style.display = "none";
  } else {
    // Show icon
    odooLogoImage.style.display = "none";
    if (paiveLogoImage) paiveLogoImage.style.display = "none";
    odooIconDisplay.style.display = "block";
    odooIconDisplay.innerHTML = iconType;
    if (tabKey === "strategic-operationality") {
      odooIconDisplay.classList.add("has-stratnxt");
      odooIconDisplay.classList.remove("has-personal-ai");
      if (odooLogoContainer) {
        odooLogoContainer.classList.add("has-stratnxt");
        odooLogoContainer.classList.remove("has-personal-ai");
      }
    } else if (tabKey === "ai-agentic-workforce") {
      odooIconDisplay.classList.remove("has-stratnxt");
      odooIconDisplay.classList.add("has-personal-ai");
      if (odooLogoContainer) {
        odooLogoContainer.classList.remove("has-stratnxt");
        odooLogoContainer.classList.add("has-personal-ai");
      }
    } else {
      odooIconDisplay.classList.remove("has-stratnxt", "has-personal-ai");
      if (odooLogoContainer) odooLogoContainer.classList.remove("has-stratnxt", "has-personal-ai");
    }
  }
}

function updateOdooContent(tabKey) {
  const data = odooContentData[tabKey];
  if (!data || !odooContent) return;

  const isPersonalAi = data.layout === "personal-ai";
  const isOdooPhilosophyCards = data.layout === "odoo-philosophy-cards";

  if (odooLogoSide) {
    odooLogoSide.classList.toggle("has-personal-ai-intro", isPersonalAi);
    odooLogoSide.classList.toggle("has-odoo-operational-intro", isOdooPhilosophyCards);
  }
  if (odooOperationalIntro) {
    if (isOdooPhilosophyCards) {
      odooOperationalIntro.hidden = false;
      odooOperationalIntro.setAttribute("aria-hidden", "false");
      if (odooOperationalHeading && data.heading) {
        odooOperationalHeading.innerHTML = data.heading;
      }
      if (odooOperationalTagline && data.tagline) {
        odooOperationalTagline.textContent = data.tagline;
      }
    } else {
      odooOperationalIntro.hidden = true;
      odooOperationalIntro.setAttribute("aria-hidden", "true");
    }
  }
  if (odooPersonalAiIntro) {
    if (isPersonalAi) {
      odooPersonalAiIntro.hidden = false;
      odooPersonalAiIntro.setAttribute("aria-hidden", "false");
      if (personalAiHeading && data.heading) {
        personalAiHeading.innerHTML = data.heading;
      }
      if (personalAiParagraph && data.paragraph) {
        if (data.firstLineHighlight && data.paragraph.indexOf(".") !== -1) {
          const firstSentence = data.paragraph.slice(0, data.paragraph.indexOf(".") + 1);
          const rest = data.paragraph.slice(firstSentence.length).trim();
          personalAiParagraph.innerHTML = `<span class="personal-ai-first-line">${firstSentence}</span>${rest ? " " + rest : ""}`;
        } else {
          personalAiParagraph.textContent = data.paragraph;
        }
      }
      if (personalAiPartners && data.trustedBy && data.trustedBy.partners && data.trustedBy.partners.length > 0) {
        personalAiPartners.innerHTML = data.trustedBy.partners
          .map(p => `<span class="personal-ai-partner">${p.name}</span>`)
          .join("");
      }
    } else {
      odooPersonalAiIntro.hidden = true;
      odooPersonalAiIntro.setAttribute("aria-hidden", "true");
    }
  }

  odooContent.style.opacity = "0";

  setTimeout(() => {
    if (isOdooPhilosophyCards && data.cards && data.cards.length > 0) {
      odooContent.classList.remove("animating");
      odooContent.innerHTML = `
        <div class="odoo-operational-cards">
          ${data.cards.map(card => `
            <div class="odoo-operational-card">
              <div class="odoo-operational-card-icon-wrap">${getOdooOperationalCardIcon(card.icon)}</div>
              <div class="odoo-operational-card-text">
                <h3 class="odoo-operational-card-title">${card.title}</h3>
                <p class="odoo-operational-card-desc">${card.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (isPersonalAi && data.cards && data.cards.length > 0) {
      odooContent.classList.remove("animating");
      odooContent.innerHTML = `
        <div class="personal-ai-cards">
          ${data.cards.map(card => `
            <div class="personal-ai-card">
              <div class="personal-ai-card-icon-wrap">${getPersonalAiCardIcon(card.icon)}</div>
              <div class="personal-ai-card-text">
                <h3 class="personal-ai-card-title">${card.title}</h3>
                <p class="personal-ai-card-desc">${card.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      const itemsHTML = data.items && data.items.length > 0
        ? `<ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>`
        : "";
      const tagHTML = data.tag
        ? `<p class="partner-tag"><em>${data.tag}</em></p>`
        : "";
      odooContent.classList.add("animating");
      odooContent.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        ${itemsHTML}
        ${tagHTML}
      `;
      setTimeout(() => {
        odooContent.classList.remove("animating");
      }, 50);
    }

    odooContent.style.opacity = "1";
    updateOdooLogo(tabKey);
  }, 200);
}

function setActiveOdooTab(activeTab) {
  odooTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  activeTab.classList.add("active");
}

// Initialize with active tab
if (odooTabs.length > 0) {
  const activeTab = document.querySelector('.odoo-tab.active') || odooTabs[0];
  const activeTabKey = activeTab.getAttribute("data-tab");
  setActiveOdooTab(activeTab);
  updateOdooContent(activeTabKey);
  updateOdooLogo(activeTabKey);
}

// Add click handlers to tabs
odooTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabKey = tab.getAttribute("data-tab");
    setActiveOdooTab(tab);
    updateOdooContent(tabKey);
  });
});

// --- ABOUT SECTION TABS ---
const aboutWhoWeAreContent = {
  heading: "Who We Are",
  paragraphs: [
    "PAiVE helps SMEs operate like large enterprises—without the overhead.",
    "We blend consulting expertise, AI-assisted execution, digital operations, and physical-world intelligence to drive measurable outcomes.",
    "We don't advise and disappear. We build and run with you."
  ]
};

const aboutPaiveRightItems = [
  {
    title: "Consulting-Led Approach",
    description: "We combine advisory-led problem solving with an AI-agentic workforce model to augment human teams and improve decision quality.",
    icon: "consulting"
  },
  {
    title: "AI as a Collaborator",
    description: "We use AI to scale consulting impact across clients and geographies without burning out teams or diluting service quality.",
    icon: "ai"
  },
  {
    title: "Hands-On. Business-First",
    description: "PAiVE is not a product company or a people-heavy system integrator. We are a consulting-led services organization that streamlines and automates SMB operations to drive measurable outcomes.",
    icon: "briefcase"
  },
  {
    title: "Measurable Outcomes",
    description: "Our mission is to enable the next generation of SMEs to operate with the intelligence and execution discipline of large enterprises.",
    icon: "chart"
  }
];

const aboutContentData = {
  "about-paive": {
    layout: "philosophy-and-cards",
    philosophy: {
      heading: "Who We Are",
      tagline: "PAiVE helps SMEs operate like large enterprises—without the overhead. We blend consulting expertise, AI-assisted execution, digital operations, and physical-world intelligence to drive measurable outcomes. We don't advise and disappear. We build and run with you."
    },
    rightItems: aboutPaiveRightItems
  },
  "how-we-do": {
    title: "How We Do",
    description: ""
  },
  "what-we-do": {
    layout: "philosophy-and-cards",
    philosophy: {
      heading: "Our<br>Philosophy",
      tagline: "We start with understanding. We design what works. And we stay to make it run."
    },
    rightItems: [
      {
        title: "Consulting First",
        description: "We move clients from \"As-Is\" (fragmented, manual, intuition-driven) to \"To-Be\" (structured, data-informed, decision-driven).",
        icon: "gears"
      },
      {
        title: "AI as Force Multiplier",
        description: "AI-agentic systems are collaborators, not replacements—assisting with analysis, coordination, and execution consistency.",
        icon: "brain"
      },
      {
        title: "Clarity Before Tech",
        description: "Technology is introduced only after operational clarity is achieved, ensuring solutions solve real business problems.",
        icon: "magnifier"
      },
      {
        title: "Human + AI Synergy",
        description: "Consultants focus on judgment and leadership while AI handles routine, multiplying capability without linear headcount growth.",
        icon: "team"
      }
    ]
  },
  "why-we-do": {
    title: "Why We Do",
    description: "We exist to bridge the gap between SMB operations and enterprise-grade execution. Too many businesses operate on intuition and fragmented tools. PAiVE brings structure, discipline, and measurable outcomes—without the overhead of traditional enterprise solutions."
  }
};

const aboutTabs = document.querySelectorAll(".about-tab");
const aboutContent = document.getElementById("about-content");
const aboutHowWeDo = document.getElementById("about-how-we-do");
const aboutWhoWeAre = document.getElementById("about-who-we-are");
const aboutWhoWeAreBody = document.getElementById("about-who-we-are-body");
const aboutPhilosophy = document.getElementById("about-philosophy");
const aboutPhilosophyHeading = document.getElementById("about-philosophy-heading");
const aboutPhilosophyTagline = document.getElementById("about-philosophy-tagline");

function getAboutPaiveIconSvg(iconKey) {
  const icons = {
    consulting: '<svg class="about-paive-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"/><path d="M16 11h4"/><path d="M18 9v4"/></svg>',
    ai: '<svg class="about-paive-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V6"/><path d="M15 8V6"/><path d="M9 12h6"/><path d="M12 12v4"/></svg>',
    briefcase: '<svg class="about-paive-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v4"/><path d="M8 16h8"/></svg>',
    chart: '<svg class="about-paive-item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 16v-5"/><path d="M12 16v-2"/><path d="M17 16V8"/></svg>'
  };
  return icons[iconKey] || "";
}

function getAboutThinkingIconSvg(iconKey) {
  const icons = {
    gears: '<svg class="about-thinking-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 0 1 9 9"/><circle cx="12" cy="12" r="3"/><path d="M12 21a9 9 0 0 1-9-9"/><path d="M3 12h2"/><path d="M19 12h2"/><path d="M12 3v2"/><path d="M12 19v2"/></svg>',
    brain: '<svg class="about-thinking-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>',
    magnifier: '<svg class="about-thinking-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
    team: '<svg class="about-thinking-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M12 11v6"/><path d="M9 14h6"/></svg>'
  };
  return icons[iconKey] || "";
}

function updateAboutContent(tabKey) {
  const data = aboutContentData[tabKey];
  if (!data || !aboutContent) return;

  const isHowWeDo = tabKey === "how-we-do";
  const isPhilosophyAndCards = data.layout === "philosophy-and-cards";

  if (aboutWhoWeAre) {
    aboutWhoWeAre.hidden = true;
    aboutWhoWeAre.setAttribute("aria-hidden", "true");
  }

  if (aboutPhilosophy) {
    if (isPhilosophyAndCards && data.philosophy) {
      aboutPhilosophy.hidden = false;
      aboutPhilosophy.setAttribute("aria-hidden", "false");
      if (aboutPhilosophyHeading) {
        aboutPhilosophyHeading.innerHTML = data.philosophy.heading || "";
      }
      if (aboutPhilosophyTagline) {
        aboutPhilosophyTagline.textContent = data.philosophy.tagline || "";
      }
    } else {
      aboutPhilosophy.hidden = true;
      aboutPhilosophy.setAttribute("aria-hidden", "true");
    }
  }

  if (isHowWeDo && aboutHowWeDo) {
    aboutContent.hidden = true;
    aboutHowWeDo.hidden = false;
  } else {
    aboutContent.hidden = false;
    if (aboutHowWeDo) aboutHowWeDo.hidden = true;
    aboutContent.style.opacity = "0";
    setTimeout(() => {
      if (isPhilosophyAndCards && data.rightItems && data.rightItems.length > 0) {
        const getIconSvg = tabKey === "about-paive" ? getAboutPaiveIconSvg : getAboutThinkingIconSvg;
        aboutContent.innerHTML = `
          <div class="about-thinking-cards">
            ${data.rightItems.map(item => `
              <div class="about-thinking-card">
                <div class="about-thinking-card-icon-wrap">${getIconSvg(item.icon)}</div>
                <div class="about-thinking-card-text">
                  <h3 class="about-thinking-card-title">${item.title}</h3>
                  <p class="about-thinking-card-desc">${item.description}</p>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      } else {
        const paragraphsHTML = data.paragraphs && data.paragraphs.length > 0
          ? data.paragraphs.map(p => `<p>${p}</p>`).join("")
          : "";
        const descriptionHTML = data.description ? `<p>${data.description}</p>` : "";
        aboutContent.innerHTML = `
          <h2>${data.title || ""}</h2>
          ${descriptionHTML}
          ${paragraphsHTML}
        `;
      }
      aboutContent.style.opacity = "1";
    }, 150);
  }
}

function setActiveAboutTab(activeTab) {
  aboutTabs.forEach((tab) => tab.classList.remove("active"));
  if (activeTab) activeTab.classList.add("active");
}

if (aboutTabs.length > 0 && aboutContent) {
  const activeAboutTab = document.querySelector(".about-tab.active") || aboutTabs[0];
  const activeAboutKey = activeAboutTab.getAttribute("data-about-tab");
  setActiveAboutTab(activeAboutTab);
  updateAboutContent(activeAboutKey);

  aboutTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabKey = tab.getAttribute("data-about-tab");
      setActiveAboutTab(tab);
      updateAboutContent(tabKey);
    });
  });
}

// How We Do wheel: show segment description on hover in the bottom text area
const howWeDoHoverText = document.getElementById("how-we-do-hover-text");
const howWeDoSegments = document.querySelectorAll(".how-we-do-segment");
const howWeDoDescriptions = [
  "Understand operations and identify value leakage.",
  "Define KRAs and improvement levers.",
  "Architect AI and operating model changes.",
  "Execute with human + AI collaboration.",
  "Track KPIs and ROI continuously.",
  "Expand across teams, sites, or regions."
];
const howWeDoDefaultText = "Hover over a segment to see its description.";

// Rotation (deg) so center arrow points at each segment; arrow points up (12 o'clock), positive = clockwise
const howWeDoArrowAngles = [30, 90, 150, 210, 270, 330];

if (howWeDoHoverText && howWeDoSegments.length === 6) {
  const howWeDoArrow = document.getElementById("how-we-do-arrow");
  howWeDoSegments.forEach((path, i) => {
    path.addEventListener("mouseenter", () => {
      howWeDoHoverText.textContent = `${i + 1}. ${howWeDoDescriptions[i]}`;
      howWeDoHoverText.classList.add("has-content");
      if (howWeDoArrow) {
        howWeDoArrow.style.transform = `rotate(${howWeDoArrowAngles[i]}deg)`;
        howWeDoArrow.style.opacity = "1";
      }
    });
  });
  const diagramBox = document.querySelector(".how-we-do-diagram-box");
  if (diagramBox) {
    diagramBox.addEventListener("mouseleave", () => {
      howWeDoHoverText.textContent = howWeDoDefaultText;
      howWeDoHoverText.classList.remove("has-content");
      if (howWeDoArrow) howWeDoArrow.style.opacity = "0";
    });
  }
}

// Intersection Observer for scroll-triggered content updates
if (scrollTriggerSections.length > 0 && lighthouseShowcase) {
  // Adjust settings for mobile vs desktop
  const isMobile = window.innerWidth <= 768;
  const observerOptions = isMobile ? {
    threshold: 0.2,
    rootMargin: "-20% 0px -20% 0px"
  } : {
    threshold: 0.3,
    rootMargin: "-30% 0px -30% 0px"
  };

  const triggerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const layerNumber = parseInt(entry.target.getAttribute("data-layer"));
        if (layerNumber !== currentActiveLayer) {
          currentActiveLayer = layerNumber;
          updateTextboxContent(layerNumber);
          if (lighthouseNavButtons.length > 0) {
            setActiveNavButton(layerNumber);
          }
        }
      }
    });
  }, observerOptions);

  scrollTriggerSections.forEach((trigger) => {
    triggerObserver.observe(trigger);
  });

  // Re-adjust on window resize
  window.addEventListener('resize', () => {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      // Recreate observer with new settings if needed
      scrollTriggerSections.forEach((trigger) => {
        triggerObserver.unobserve(trigger);
      });

      const newOptions = newIsMobile ? {
        threshold: 0.2,
        rootMargin: "-20% 0px -20% 0px"
      } : {
        threshold: 0.3,
        rootMargin: "-30% 0px -30% 0px"
      };

      const newObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const layerNumber = parseInt(entry.target.getAttribute("data-layer"));
            if (layerNumber !== currentActiveLayer) {
              currentActiveLayer = layerNumber;
              updateTextboxContent(layerNumber);
              setActiveNavButton(layerNumber);
            }
          }
        });
      }, newOptions);

      scrollTriggerSections.forEach((trigger) => {
        newObserver.observe(trigger);
      });
    }
  });
}


// Button hover animations
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px) scale(1.05)";
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    this.style.boxShadow = "0 5px 20px rgba(0, 229, 255, 0.4)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "none";
  });
});

// Highlight "OUR APPROACH" nav link when viewing related sections
const ourApproachNavLink = document.querySelector('a[href="#our-approach"]');
const ourApproachSection = document.getElementById("our-approach");

if (ourApproachNavLink && ourApproachSection) {
  const sectionsToWatch = [ourApproachSection];

  const navObserver = new IntersectionObserver((entries) => {
    let isAnySectionVisible = false;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isAnySectionVisible = true;
      }
    });

    if (isAnySectionVisible) {
      ourApproachNavLink.classList.add("active");
    } else {
      // Check if we're still in any of the sections
      const scrollY = window.scrollY || window.pageYOffset;
      let stillInSection = false;

      sectionsToWatch.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollY >= sectionTop - 200 && scrollY <= sectionBottom) {
            stillInSection = true;
          }
        }
      });

      if (!stillInSection) {
        ourApproachNavLink.classList.remove("active");
      }
    }
  }, {
    threshold: 0.1,
    rootMargin: "-100px 0px -100px 0px"
  });

  sectionsToWatch.forEach((section) => {
    if (section) {
      navObserver.observe(section);
    }
  });

  // Also check on scroll for more accurate detection
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    let inOurApproachSection = false;

    sectionsToWatch.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop - 200 && scrollY <= sectionBottom + 200) {
          inOurApproachSection = true;
        }
      }
    });

    if (inOurApproachSection) {
      ourApproachNavLink.classList.add("active");
    } else {
      ourApproachNavLink.classList.remove("active");
    }
  });
}


