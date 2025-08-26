// Menunggu sampai DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // ===== SMOOTH SCROLLING =====
    
    // Mengambil semua link navigasi
    const navLinks = document.querySelectorAll('nav a');
    
    // Fungsi untuk smooth scroll
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
    
    // Tambahkan event listener ke setiap link
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    // ===== INTERACTIVE BUTTONS =====
    
    // Tombol Download CV
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            alert('Fitur download CV akan diimplementasikan!');
            
            // Efek visual sederhana
            downloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                downloadBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Tombol Hubungi
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            // Scroll ke section kontak
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Efek visual sederhana
            contactBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                contactBtn.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // ===== FORM HANDLING =====
    
    // Form kontak
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Ambil nilai form
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Validasi sederhana
            if (!name || !email || !message) {
                alert('Mohon lengkapi semua field!');
                return;
            }
            
            // Simulasi pengiriman
            alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ===== PORTFOLIO HOVER EFFECTS =====
    
    // Portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===== SCROLL EFFECTS =====
    
    // Efek fade in saat scroll
    function checkScroll() {
        const elements = document.querySelectorAll('.portfolio-item, .about, .contact');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial opacity
    document.querySelectorAll('.portfolio-item, .about, .contact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    // Check scroll on load and scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // ===== SIMPLE ANIMATIONS =====
    
    // Animate skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.style.animation = 'fadeInUp 0.6s ease forwards';
    });
    
    // CSS animation keyframes (akan ditambahkan via CSS)
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ===== INITIALIZATION =====
    
    console.log('Portfolio template loaded successfully!');
});
