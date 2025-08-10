document.addEventListener("DOMContentLoaded", () => {
    
    // --- Fitur yang Hanya Berjalan di Halaman Tertentu ---

    // 1. Inisialisasi Latar Belakang Partikel
    const particleContainer = document.getElementById('particles-js');
    if (particleContainer) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#007ea7" }, // Warna lebih gelap
                "shape": { "type": "circle" },
                "opacity": { "value": 0.4, "random": true },
                "size": { "value": 2.5, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#007ea7", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // 2. Fungsi Animasi Mengetik
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = "Halo, saya Taufik Nur Ramadhan";
        let i = 0;
        typingElement.innerHTML = '';
        
        const type = () => {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        };
        type();
    }

    // --- Fitur Global yang Berjalan di Semua Halaman ---

    // 3. Fungsi Animasi Scroll
    const setupScrollAnimation = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        if (elements.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        elements.forEach(element => observer.observe(element));
    };
    setupScrollAnimation();
    
    // 4. Fungsi Navigasi Mobile
    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav-links');
        if (hamburger && nav) {
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                hamburger.classList.toggle('toggle');
            });
        }
    };
    navSlide();
});