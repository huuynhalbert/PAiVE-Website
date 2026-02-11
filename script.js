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
  "what-we-do": {
    title: "What We Do",
    description: "PAiVE delivers Odoo as a strategic platform—not just software. We architect, implement, and enable Odoo to drive measurable business outcomes for small and medium business.",
    items: [
      "The powerful synergy between establishing a robust Odoo-powered digital core and activating Advanced Operational Intelligence transforms a business from structured to intelligent.",
      "Odoo's capabilities—from fit-gap analysis and customized implementation to training and managed support—establish the comprehensive, scalable Operational Backbone required for consistency and standardized workflows.",
      "This structured, disciplined foundation then becomes the high-integrity platform that fuels the next layer of innovation: ",
      "Physical Intelligence leverages Odoo's core data with real-time IoT and AI for situational awareness;",
      "Sustainability & Value Engineering acts as the unifying lens, continuously measuring the cost, efficiency, and ESG impact across the Odoo system and all operational layers to ensure maximum ROI and measurable business outcomes."
    ]
  },
  "why-odoo": {
    title: "Why Odoo",
    description: "Wondering if Odoo is the right platform for your business? Our team will help you understand the benefits and see how it can transform your operations.",
    items: [
      "PAiVE delivers Odoo as a strategic platform—not just software. We architect, implement, and enable Odoo to drive measurable business outcomes for small and medium business."
    ]
  },
  "ai-agentic": {
    title: "AI-Agentic Workforce Platform",
    description: "The Personal AI platform enables businesses to rapidly train and deploy their own AI teammates, delivering 10x productivity at 1/10th the talent cost. Each teammate embodies a specialized persona with agentic capabilities, trained on proprietary. knowledge. This evergreen AI workforce leverages evolving institutional memory to drive human-AI collaboration across business functions. Transform individual expertise into scalable, collaborative AI workers. Conceptual approach focused on outcomes, not technical features.",
    items: [],
    tag: "Powered by Personal.ai"
  },
  "physical-intelligence": {
    title: "Physical Intelligence",
    description: "IoT-enabled real-time visibility and AI-powered threat detection for safety, security, and situational awareness.",
    items: [],
    tag: "Clipxu AI Security"
  }
};

const odooLogoImage = document.getElementById("odoo-logo-image");
const paiveLogoImage = document.getElementById("paive-logo-image");
const odooIconDisplay = document.getElementById("odoo-icon-display");

const tabIcons = {
  "what-we-do": "paive",
  "why-odoo": "odoo",
  "ai-agentic": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 120px; height: 120px; color: var(--accent-cyan);">
    <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
    <path d="M3 21L6 18L9 21L6 18L3 21Z"/>
    <path d="M15 21L18 18L21 21L18 18L15 21Z"/>
  </svg>`,
  "physical-intelligence": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 120px; height: 120px; color: var(--accent-cyan);">
    <path d="M12 2L3 7L3 12C3 16.55 6.16 20.74 10.5 21.95C11.05 22.1 11.5 22.1 12 22.1C12.5 22.1 12.95 22.1 13.5 21.95C17.84 20.74 21 16.55 21 12V7L12 2Z"/>
    <path d="M12 8V12M12 16H12.01"/>
  </svg>`
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
  }
}

function updateOdooContent(tabKey) {
  const data = odooContentData[tabKey];
  if (!data || !odooContent) return;
  
  odooContent.style.opacity = "0";
  
  setTimeout(() => {
    const itemsHTML = data.items && data.items.length > 0 
      ? `<ul>${data.items.map(item => `<li>${item}</li>`).join("")}</ul>`
      : "";
    
    const tagHTML = data.tag 
      ? `<p class="partner-tag"><em>${data.tag}</em></p>`
      : "";
    
    // Remove animating class to reset
    odooContent.classList.add('animating');
    
    odooContent.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      ${itemsHTML}
      ${tagHTML}
    `;
    
    // Trigger animation
    setTimeout(() => {
      odooContent.classList.remove('animating');
    }, 50);
    
    odooContent.style.opacity = "1";
    
    // Update logo/icon
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

// Highlight "OUR APPROACH" nav link when viewing related sections
const ourApproachNavLink = document.querySelector('a[href="#our-approach"]');
const ourApproachSection = document.getElementById("our-approach");
const engagementLifecycleSection = document.getElementById("engagement-lifecycle");
const accountabilitySection = document.getElementById("accountability");

if (ourApproachNavLink && (ourApproachSection || engagementLifecycleSection || accountabilitySection)) {
  const sectionsToWatch = [ourApproachSection, engagementLifecycleSection, accountabilitySection].filter(Boolean);
  
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
  