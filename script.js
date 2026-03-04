// ========================================
// EmailJS Configuration
// ========================================
const EMAILJS_PUBLIC_KEY = 'c9qn8ML_AOPerhOU1';
const EMAILJS_SERVICE_ID = 'rizkihidayat15';
const EMAILJS_TEMPLATE_ID = 'template_7he0zic';

// ========================================
// Document Ready
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initEmailJS();
    initTheme();
    initNavbar();
    initSmoothScroll();
    initSkillBars();
    initProjectCards();
    initContactForm();
    initBackToTop();
    initScrollAnimations();
    renderAll();
});

// ========================================
// Render All Data
// ========================================
function renderAll() {
    renderProfile();
    renderStats();
    renderSkills();
    renderExperience();
    renderCertifications();
    renderProjects();
    renderContacts();
    renderFooter();
}

// ========================================
// Profile Renderer
// ========================================
function renderProfile() {
    const data = portfolioData.profile;
    document.title = `Portofolio - ${data.name}`;
    
    const heroGreeting = document.getElementById('heroGreeting');
    const heroName = document.getElementById('heroName');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');
    const heroIcon = document.getElementById('heroIcon');
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    
    if (heroGreeting) heroGreeting.textContent = data.greeting;
    if (heroName) heroName.textContent = data.name;
    if (heroTitle) heroTitle.textContent = data.title;
    if (heroDescription) heroDescription.textContent = data.description;
    
    if (profilePlaceholder) {
        if (data.photo && data.photo !== '') {
            const img = document.createElement('img');
            img.src = data.photo;
            img.alt = data.name;
            img.onerror = function() {
                this.style.display = 'none';
                if (heroIcon) heroIcon.style.display = 'flex';
            };
            profilePlaceholder.innerHTML = '';
            profilePlaceholder.appendChild(img);
            if (heroIcon) heroIcon.style.display = 'none';
        } else {
            if (heroIcon) {
                heroIcon.className = data.heroIcon ? `fas ${data.heroIcon}` : 'fas fa-user';
                heroIcon.style.display = 'flex';
            }
        }
    }
    
    const aboutTitle = document.getElementById('aboutTitle');
    const aboutDescription = document.getElementById('aboutDescription');
    const aboutIcon = document.getElementById('aboutIcon');
    const imageBox = document.querySelector('.image-box');
    
    if (aboutTitle) {
        aboutTitle.textContent = `${data.title} dengan Passion untuk Pengembangan Bisnis`;
    }
    
    if (aboutDescription) {
        const descParts = data.aboutDescription.split('\n\n');
        aboutDescription.innerHTML = descParts.map(part => `<p>${part}</p>`).join('');
    }
    
    if (imageBox && data.photo && data.photo !== '') {
        const img = document.createElement('img');
        img.src = data.photo;
        img.alt = data.name;
        img.onerror = function() {
            this.style.display = 'none';
            if (aboutIcon) aboutIcon.style.display = 'flex';
        };
        imageBox.innerHTML = '';
        imageBox.appendChild(img);
        if (aboutIcon) aboutIcon.style.display = 'none';
    } else if (aboutIcon) {
        aboutIcon.className = data.aboutIcon ? `fas ${data.aboutIcon}` : 'fas fa-user-tie';
        aboutIcon.style.display = 'flex';
    }
}

// ========================================
// Stats Renderer
// ========================================
function renderStats() {
    const data = portfolioData.stats;
    const container = document.getElementById('aboutStats');
    if (!container) return;
    
    const statsHTML = `
        <div class="stat-item">
            <span class="stat-number" data-target="${data.experience.value}">0</span>
            <span class="stat-label">${data.experience.label}</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-target="${data.projects.value}">0</span>
            <span class="stat-label">${data.projects.label}</span>
        </div>
        <div class="stat-item">
            <span class="stat-number" data-target="${data.clients.value}">0</span>
            <span class="stat-label">${data.clients.label}</span>
        </div>
    `;
    container.innerHTML = statsHTML;
    
    setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            animateCounter(num, target);
        });
    }, 100);
}

// ========================================
// Skills Renderer
// ========================================
function renderSkills() {
    const data = portfolioData.skills;
    const container = document.getElementById('skillsGrid');
    if (!container) return;
    
    let skillsHTML = '';
    if (data.frontend) skillsHTML += renderSkillCategory('Web Development', data.frontend.items);
    if (data.backend) skillsHTML += renderSkillCategory('Data Analytics', data.backend.items);
    if (data.tools) skillsHTML += renderSkillCategory('Graphic Design', data.tools.items);
    
    container.innerHTML = skillsHTML;
}

function renderSkillCategory(title, items) {
    let itemsHTML = items.map(item => `
        <div class="skill-item">
            <div class="skill-icon"><i class="${item.icon}"></i></div>
            <span>${item.name}</span>
            <div class="skill-bar"><div class="skill-progress" data-progress="${item.level}"></div></div>
        </div>
    `).join('');
    
    return `<div class="skill-category"><h3>${title}</h3><div class="skill-items">${itemsHTML}</div></div>`;
}

// ========================================
// Experience Renderer
// ========================================
function renderExperience() {
    const data = portfolioData.internships;
    const container = document.getElementById('experienceTimeline');
    if (!container) return;
    
    const experienceHTML = data.map((exp, index) => {
        const tasksHTML = exp.tasks.map(task => `<li><i class="fas fa-check"></i>${task}</li>`).join('');
        
        // Render logo image or fallback icon
        let logoHTML = '';
        if (exp.logo) {
            logoHTML = `<img src="${exp.logo}" alt="${exp.company}" class="experience-logo" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><i class="fas fa-building" style="display:none;"></i>`;
        } else {
            logoHTML = `<i class="fas fa-building"></i>`;
        }
        
        return `
            <div class="experience-card" style="animation-delay: ${index * 0.1}s">
                <div class="experience-icon">
                    ${logoHTML}
                </div>
                <div class="experience-content">
                    <div class="experience-header">
                        <h3>${exp.position}</h3>
                        <span class="experience-period">${exp.period}</span>
                    </div>
                    <h4 class="experience-company">${exp.company}</h4>
                    <p class="experience-location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</p>
                    <p class="experience-description">${exp.description}</p>
                    <ul class="experience-tasks">${tasksHTML}</ul>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = experienceHTML;
}

// ========================================
// Certifications Renderer
// ========================================
function renderCertifications() {
    const data = portfolioData.certifications;
    const container = document.getElementById('certificationsGrid');
    if (!container) return;
    
    const certificationsHTML = data.map((cert, index) => {
        const verifyLink = cert.verifyUrl && cert.verifyUrl !== '#' 
            ? `<a href="${cert.verifyUrl}" target="_blank" class="cert-verify">
                <i class="fas fa-external-link-alt"></i> Verifikasi
               </a>`
            : '';
        
        return `
            <div class="certification-card" style="animation-delay: ${index * 0.1}s">
                <div class="cert-icon">
                    <i class="${cert.icon}"></i>
                </div>
                <div class="cert-content">
                    <h3>${cert.title}</h3>
                    <p class="cert-issuer">${cert.issuer}</p>
                    <p class="cert-date"><i class="fas fa-calendar"></i> ${cert.date}</p>
                    <p class="cert-description">${cert.description}</p>
                    ${verifyLink}
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = certificationsHTML;
}

// ========================================
// Projects Renderer
// ========================================
function renderProjects() {
    const data = portfolioData.projects;
    const container = document.getElementById('projectsGrid');
    if (!container) return;
    
    const projectsHTML = data.map((project, index) => {
        const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        let linksHTML = '';
        if (project.links) {
            if (project.links.source && project.links.source !== '#') {
                linksHTML += `<a href="${project.links.source}" target="_blank"><i class="fab fa-github"></i> Source</a>`;
            }
            if (project.links.demo && project.links.demo !== '#') {
                linksHTML += `<a href="${project.links.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>`;
            }
        }
        
        const imageHTML = project.image && project.image !== '' 
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
               <i class="${project.icon}" style="display:none;"></i>`
            : `<i class="${project.icon || 'fas fa-folder'}"></i>`;
        
        return `
            <div class="project-card" style="animation-delay: ${index * 0.1}s">
                <div class="project-image">${imageHTML}</div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">${tagsHTML}</div>
                    <div class="project-links">${linksHTML}</div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = projectsHTML;
}

// ========================================
// Contacts Renderer
// ========================================
function renderContacts() {
    const data = portfolioData.contact;
    
    const contactDetails = document.getElementById('contactDetails');
    if (contactDetails) {
        const phone = data.phone || '';
        const formattedPhone = phone.replace(/^\+/, '');
        
        const detailsHTML = `
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                <div class="contact-text"><span>Email</span><a href="mailto:${data.email}">${data.email}</a></div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-phone"></i></div>
                <div class="contact-text"><span>Phone</span><a href="tel:${formattedPhone}">${phone}</a></div>
            </div>
            <div class="contact-item">
                <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                <div class="contact-text"><span>Location</span><span>${data.location}</span></div>
            </div>
        `;
        contactDetails.innerHTML = detailsHTML;
    }
    
    const heroSocial = document.getElementById('heroSocial');
    if (heroSocial) heroSocial.innerHTML = renderSocialLinks(data.social);
    
    const contactSocial = document.getElementById('contactSocial');
    if (contactSocial) contactSocial.innerHTML = renderSocialLinks(data.social);
    
    const footerSocial = document.getElementById('footerSocial');
    if (footerSocial) footerSocial.innerHTML = renderSocialLinks(data.social);
}

function renderSocialLinks(social) {
    const socialConfig = {
        github: { icon: 'fab fa-github', name: 'GitHub' },
        linkedin: { icon: 'fab fa-linkedin-in', name: 'LinkedIn' },
        instagram: { icon: 'fab fa-instagram', name: 'Instagram' },
        twitter: { icon: 'fab fa-twitter', name: 'Twitter' }
    };
    
    let html = '';
    for (const [platform, url] of Object.entries(social)) {
        if (url && url !== '#') {
            const config = socialConfig[platform];
            html += `<a href="${url}" target="_blank" aria-label="${config.name}"><i class="${config.icon}"></i></a>`;
        }
    }
    return html;
}

// ========================================
// Footer Renderer
// ========================================
function renderFooter() {
    const footerLogo = document.getElementById('footerLogo');
    if (footerLogo) {
        footerLogo.innerHTML = `Portofolio<span>.</span>`;
    }
    
    const footerCopyright = document.getElementById('footerCopyright');
    if (footerCopyright) {
        const year = new Date().getFullYear();
        footerCopyright.textContent = `© ${year} Muhammad Rizki. All rights reserved.`;
    }
}

// ========================================
// EmailJS Initialization
// ========================================
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
}

// ========================================
// Theme Toggle
// ========================================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // CV Download Handler
    const downloadCV = document.getElementById('downloadCV');
    if (downloadCV) {
        downloadCV.addEventListener('click', (e) => {
            e.preventDefault();
            const cvPath = portfolioData.profile.cv;
            if (cvPath) {
                window.open(cvPath, '_blank');
            } else {
                showNotification('CV tidak tersedia', 'error');
            }
        });
    }
}

// ========================================
// Navbar
// ========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// Skill Bars Animation
// ========================================
function initSkillBars() {
    setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const value = progress.getAttribute('data-progress');
                    progress.style.transition = 'width 1s ease';
                    progress.style.width = value + '%';
                    observer.unobserve(progress);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }, 100);
}

// ========================================
// Project Cards Animation
// ========================================
function initProjectCards() {
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'all 0.3s ease';
            });
        });
    }, 100);
}

// ========================================
// Contact Form with EmailJS
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Mohon isi semua field!', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Email tidak valid!', 'error');
            return;
        }
        
        const submitBtn = document.getElementById('submitBtn');
        const originalContent = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        try {
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                subject: data.subject,
                message: data.message,
                to_email: portfolioData.contact.email
            };
            
            if (typeof emailjs !== 'undefined') {
                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
                showNotification('Pesan berhasil dikirim!', 'success');
                form.reset();
            } else {
                console.log('EmailJS not loaded, using mock submission');
                await mockEmailSubmission(data);
                showNotification('Pesan berhasil dikirim! (Mode Demo)', 'success');
                form.reset();
            }
        } catch (error) {
            console.error('Error sending email:', error);
            showNotification('Gagal mengirim pesan. Silakan coba lagi.', 'error');
        } finally {
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    });
}

// ========================================
// Mock Email Submission
// ========================================
function mockEmailSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Mock email sent:', data);
            resolve({ status: 'success' });
        }, 1500);
    });
}

// ========================================
// Notification System
// ========================================
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white; padding: 16px 24px; border-radius: 12px;
        display: flex; align-items: center; gap: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15); z-index: 9999;
        animation: slideIn 0.3s ease; font-family: 'Poppins', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ========================================
// Back to Top Button
// ========================================
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// Scroll Animations
// ========================================
function initScrollAnimations() {
    setTimeout(() => {
        const animatedElements = document.querySelectorAll('.section-header, .about-content, .contact-content');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 100);
}

// ========================================
// Add Animation Keyframes
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100px); } }
`;
document.head.appendChild(style);

// ========================================
// Number Counter Animation
// ========================================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// ========================================
// Performance: Debounce Function
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => { clearTimeout(timeout); func(...args); };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// Resize Handler
// ========================================
window.addEventListener('resize', debounce(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}, 250));

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
