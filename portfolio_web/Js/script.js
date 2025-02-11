// ========================= nav bar script===============//
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
document.documentElement.setAttribute('data-theme',
    localStorage.getItem('theme') ||
    (prefersDark.matches ? 'dark' : 'light')
);

themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => themeToggle.style.transform = '', 150);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Enhanced mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    const icon = mobileMenuBtn.querySelector('i');

    // Toggle menu state
    navLinks.classList.toggle('active');

    // Update icon and button state
    if (!isOpen) {
        icon.className = 'ri-close-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') &&
        !e.target.closest('.mobile-menu') &&
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        e.target.closest('.nav-link').classList.add('active');

        // Close mobile menu after link click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Add animation to nav links
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach((link, index) => {
    link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

// Add hover effect to logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;

    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});


// ==================hero script=================//


const profText = document.querySelector(".prof");
const textArray = ["Web-Devloper", " Web-Designer", "Developer", "Coder"];
let currentIndex = 0;

function changeText() {
    profText.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);
changeText();


// ===================>Service section JS====================================//
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
});


// ==========================================>ABOUT ME JS<========================================================================//

$(window).scroll(function () {
    var wind = $(window).scrollTop();
    var img = $('#aroundimg').offset();
    var section = $('#content>.section:nth-child(2)').offset();
    var sectionheight = section.top - 100;
    var imgheight = img.top - 70;
    if (wind >= imgheight) {
        $("#scndImg").removeClass("animate");
        $("#scndImg").addClass("turnDown");
    }
});
$('.button').hover(function () {
    $(this).find('fa-info').hide();
    $(this).find('.avg_num').show();
}, function () {
    $(this).find('.avg_num').hide();
    $(this).find('.avg_words').show();
});

// ===================================================>footer js<=========================================//
document.getElementById('year').textContent = new Date().getFullYear();