// ==========================================
// AOS Animation
// ==========================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ==========================================
// Sticky Navbar
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(2,6,23,0.95)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(15,23,42,.75)";
        navbar.style.boxShadow = "none";

    }

});

// ==========================================
// Scroll To Top
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// Active Navigation
// ==========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// Fade Cards on Load
// ==========================================

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".glass-card,.skill-card,.project-card,.certificate-card,.timeline-content"

    ).forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("fade-up");

        }, index * 120);

    });

});

// ==========================================
// Button Hover Animation
// ==========================================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.02)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// ==========================================
// Typing Effect
// ==========================================

const subtitle = document.querySelector(".hero-subtitle");

if (subtitle) {

    const text = "Full Stack Developer";

    subtitle.innerHTML = "";

    let i = 0;

    function typing() {

        if (i < text.length) {

            subtitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 90);

        }

    }

    typing();

}

// ==========================================
// Current Year
// ==========================================

const year = document.querySelector("#year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}
