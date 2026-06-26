document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Preloader Setup ---
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        if(preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => preloader.style.display = "none", 300);
        }
    });
    // Fallback if load event already passed
    setTimeout(() => { if(preloader) preloader.style.display = "none"; }, 1500);

    // --- 2. Initialize AOS (Animate on Scroll) ---
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // --- 3. Typing Animation (Typed.js) ---
    new Typed('#typed-text', {
        strings: [
            'Computer Science Engineering Student',
            'Aspiring Full Stack Developer',
            'Backend Architecture Explorer',
            'AI Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // --- 4. Responsive Mobile Navigation ---
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    navLinks.forEach(link => link.addEventListener("click", () => {
        if(navMenu.classList.contains("active")) toggleMenu();
    }));

    // --- 5. Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });

        // Toggle Back to Top visibility
        const btt = document.getElementById("back-to-top");
        if (window.scrollY > 500) {
            btt.style.display = "flex";
        } else {
            btt.style.display = "none";
        }
    });

    // Back to Top functionality
    document.getElementById("back-to-top").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 6. Light / Dark Theme Feature Toggle ---
    const themeToggle = document.getElementById("theme-toggle");
    const bodyElement = document.body;
    const themeIcon = themeToggle.querySelector("i");

    themeToggle.addEventListener("click", () => {
        bodyElement.classList.toggle("light-mode");
        bodyElement.classList.toggle("dark-mode");
        
        if(bodyElement.classList.contains("light-mode")) {
            themeIcon.className = "fas fa-sun";
        } else {
            themeIcon.className = "fas fa-moon";
        }
    });

    // --- 7. Particles.js Interactive Micro-Environment Configuration ---
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#06b6d4" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#a855f7", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false } }
        },
        "retina_detect": true
    });

    // --- 8. Contact Form UX Feedback Mockup ---
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector("button[type='submit']");
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
        
        setTimeout(() => {
            submitBtn.textContent = "Message Sent Successfully!";
            submitBtn.style.background = "linear-gradient(135deg, #22c55e, #10b981)";
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.background = "";
            }, 3000);
        }, 1200);
    });
});