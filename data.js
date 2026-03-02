// ========================================
// Portfolio Data - Centralized Data Source
// ========================================

const portfolioData = {
// ========================================
    // Profile Section
    // ========================================
    profile: {
        name: "Muhammad Rizki Hidayat",
        fullName: "Muhammad Rizki Hidayat",
        title: "Data Analyst & Web Development Enthusiast",
        greeting: "Halo, saya",
        description: "Seorang Data Analyst dan Web Developer yang antusias dalam mengolah data menjadi insight bernilai serta membangun solusi digital yang fungsional dan efisien. Memiliki ketertarikan kuat pada analisis berbasis data dan pengembangan aplikasi web untuk menciptakan sistem yang berdampak nyata.",
        aboutDescription: "Mahasiswa Teknologi Informasi yang antusias pada bidang Data Analyst dan Web Development, dengan fokus pada pengembangan sistem berbasis data menggunakan Python, PHP, serta pengelolaan database MySQL. Memiliki kemampuan teknis dalam pengembangan web meliputi HTML, CSS, JavaScript, dasar framework, perancangan struktur sistem, serta integrasi database, disertai keahlian analisis, pengolahan, dan visualisasi data menggunakan Spreadsheet dan Power BI untuk menghasilkan solusi digital yang informatif dan fungsional.",
        photo: "assets/profile.png",
        // Fallback icons when no photo
        heroIcon: "fa-user",
        aboutIcon: "fa-user-tie",
        // CV File URL (PDF)
        cv: "assets/CV_M-RIZKI-HIDAYAT.pdf"
    },

    // ========================================
    // Statistics
    // ========================================
    stats: {
        experience: {
            value: 1,
            suffix: "+",
            label: "Tahun Pengalaman"
        },
        projects: {
            value: 10,
            suffix: "+",
            label: "Proyek Selesai"
        },
        clients: {
            value: 2,
            suffix: "+",
            label: "Klien Puas"
        }
    },

    // ========================================
    // Skills Section
    // ========================================
    skills: {
        frontend: {
            title: "Web Development",
            items: [
                { name: "HTML5", icon: "fab fa-html5", level: 95 },
                { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
                { name: "JavaScript", icon: "fab fa-js", level: 85 },
                { name: "React", icon: "fab fa-react", level: 80 }
            ]
        },
        backend: {
            title: "Data Analytics",
            items: [
                { name: "Microsoft Excel", icon: "fas fa-file-excel", level: 85 },
                { name: "Power BI", icon: "fas fa-chart-bar", level: 80 },
                { name: "Python", icon: "fab fa-python", level: 75 },
                { name: "SQL", icon: "fas fa-database", level: 80 }
            ]
        },
        tools: {
            title: "Graphic Design",
            items: [
                { name: "Figma", icon: "fab fa-figma", level: 85 },
                { name: "Canva", icon: "fas fa-palette", level: 80 },
                { name: "Adobe Illustrator", icon: "fas fa-bezier-curve", level: 75 },
                { name: "Adobe Photoshop", icon: "fas fa-image", level: 80 }
            ]
        }
    },

    // ========================================
    // Projects Section
    // ========================================
    projects: [
        {
            title: "Web App Arsip Surat PT. Pelindo",
            description: "Web application pengelolaan arsip surat berbasis spreadsheet yang dirancang untuk mendukung proses administrasi kearsipan secara digital. Sistem menyediakan fitur input data arsip terstruktur, penyimpanan otomatis ke Google Sheets melalui integrasi API, serta tampilan tabel dinamis yang hanya menampilkan data yang berhasil tersimpan.",
            image: "project/webapp-pelindo.png",
            icon: "fas fa-store",
            tags: ["HTML", "CSS", "JavaScript", "Google Sheet API"],
            links: {
                source: "https://github.com/rizkihidayat15/Arsip-Surat-PELINDO-WebApp",
                demo: "https://rizkihidayat15.github.io/Web-Arsip-Surat-PELINDO/"
            }
        },
        {
            title: "Task Management App",
            description: "Aplikasi manajemen tugas dengan fitur drag & drop, real-time collaboration, dan notifikasi.",
            image: "assets/projects/taskmanager.jpg",
            icon: "fas fa-tasks",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Analytics Dashboard",
            description: "Dashboard analitik dengan visualisasi data interaktif, laporan real-time, dan export PDF.",
            image: "assets/projects/analytics.jpg",
            icon: "fas fa-chart-line",
            tags: ["React", "D3.js", "Express"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Restaurant Website",
            description: "Website restoran dengan reservasi online, menu interaktif, dan sistem pemesanan.",
            image: "assets/projects/restaurant.jpg",
            icon: "fas fa-utensils",
            tags: ["HTML/CSS", "JavaScript", "PHP"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "E-Learning Platform",
            description: "Platform pembelajaran online dengan video streaming, quiz interaktif, dan tracking progress.",
            image: "assets/projects/elearning.jpg",
            icon: "fas fa-graduation-cap",
            tags: ["MERN Stack", "AWS", "Stripe"],
            links: {
                source: "#",
                demo: "#"
            }
        },
        {
            title: "Portfolio Website",
            description: "Website portofolio responsif dengan desain modern, animasi smooth, dan SEO optimized.",
            image: "assets/projects/portfolio.jpg",
            icon: "fas fa-mobile-alt",
            tags: ["HTML/CSS", "JavaScript", "GSAP"],
            links: {
                source: "#",
                demo: "#"
            }
        }
    ],

    // ========================================
    // Contact Section
    // ========================================
    contact: {
        email: "m.rizkihidayat15@gmail.com",
        phone: "+6282311033008",
        location: "Medan, Indonesia",
        social: {
            github: "https://github.com/rizkihidayat15",
            linkedin: "https://linkedin.com/in/mrizkihidayat",
            instagram: "https://instagram.com/kiihdyt_",
            twitter: "https://twitter.com"
        },
        socialNames: {
            github: "GitHub",
            linkedin: "LinkedIn",
            instagram: "Instagram",
            twitter: "Twitter"
        }
    },

    // ========================================
    // Footer
    // ========================================
    footer: {
        copyright: "© 2025 Muhammad Rizki. All rights reserved."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
