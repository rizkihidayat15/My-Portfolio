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
            title: "Data Analytics Project",
            description: "Membangun dashboard analisis kecelakaan jalan untuk periode 2021–2022 yang menyajikan wawasan terhadap pola kejadian, menyoroti indikator kinerja utama (KPI), serta menunjukkan keterkaitannya dengan berbagai faktor seperti waktu, lokasi, dan kondisi kejadian.",
            image: "project/Road_Accident_Dashboard_img.png",
            icon: "fas fa-tasks",
            tags: ["Ms. Excel", "Python", "Analysis"],
            links: {
                source: "https://github.com/rizkihidayat15/Data-Analytics-Project",
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
    // Internship/Experience Section
    // ========================================
    internships: [
        {
            company: "PT. Pelindo Regional 1 Belawan",
            position: "Staff IT Support & Data Analyst",
            period: "Juli 2024 - September 2024",
            location: "Medan, Indonesia",
            description: "Terlibat dalam pengelolaan dan pengembangan sistem arsip surat berbasis web menggunakan Google Sheets API. Bertanggung jawab untuk input data arsip, pemeliharaan sistem, dan analisis data untuk mendukung pengambilan keputusan operasional.",
            tasks: [
                "Mengembangkan aplikasi web arsip surat berbasis Google Sheets API",
                "Melakukan input dan pengelolaan data arsip surat",
                "Membuat laporan dan analisis data kearsipan",
                "Memastikan kelancaran sistem dan troubleshooting"
            ],
            logo: "assets/logo_PELINDO.png"
        },
        {
            company: "PTPN III (Pabrik Kelapa Sawit)",
            position: "IT Support Intern",
            period: "Januari 2024 - Maret 2024",
            location: "Medan, Indonesia",
            description: "Mendukung departemen IT dalam pemeliharaan hardware dan software, serta membantu dalam pengelolaan data inventaris IT perusahaan.",
            tasks: [
                "Memantau dan memelihara perangkat keras komputer",
                "Membantu pengelolaan database inventaris IT",
                "Mendukung teknis dalam acara perusahaan",
                "Membuat laporan dokumentasi teknis"
            ],
            logo: null
        }
    ],

    // ========================================
    // Certifications & Training Section
    // ========================================
    certifications: [
        {
            title: "Associate Data Scientist + Python - Nasional",
            issuer: "Digital Talent Scholarship",
            date: "2026",
            credentialId: "21211993840-1754",
            description: "Program ini dirancang untuk membekali peserta dengan kemampuan dasar dalam seluruh siklus data science, mulai dari pengelolaan data, perencanaan dan pembangunan model, hingga evaluasi dan implementasi model secara sederhana, serta memperhatikan aspek pelindungan data pribadi.",
            icon: "fas fa-code",
            verifyUrl: "https://digitalent.kominfo.go.id/cek-sertifikat"
        },
        {
            title: "Data Visualization: Dasbor dan Cerita Data yang Efektif",
            issuer: "Dicoding Indonesia",
            date: "2024",
            credentialId: "JVKPNNVP2Z",
            description: "Pelatihan tentang cara membuat visualisasi data yang efektif dan mudah dipahami.",
            icon: "fas fa-chart-pie",
            verifyUrl: "https://www.dicoding.com/certificates/JVKPNNVP2Z"
        },
        {
            title: "Belajar Analisis Data dengan Python",
            issuer: "Dicoding Indonesia",
            date: "2024",
            credentialId: "MEMZNN0V7P",
            description: "Pelatihan analisis data menggunakan Python dengan library Pandas dan NumPy.",
            icon: "fas fa-python",
            verifyUrl: "https://www.dicoding.com/certificates/MEMZNN0V7P"
        },
        {
            title: "Memulai Pemrograman dengan Python",
            issuer: "Dicoding Indonesia",
            date: "2024",
            credentialId: "4ZQOONZ9N57D",
            description: "Pengenalan pemrograman Python dari dasar hingga konsep object-oriented programming.",
            icon: "fas fa-robot",
            verifyUrl: "https://www.dicoding.com/certificates/4ZQOONZ9N57D"
        },
        {
            title: "Praktikum Agile Testing",
            issuer: "Digital Talent Scholarship - Kominfo",
            date: "2023",
            credentialId: "-",
            description: "Pelatihan metodologi Agile dan praktik pengujian perangkat lunak.",
            icon: "fas fa-vial",
            verifyUrl: "#"
        },
        {
            title: "Cyber Security Fundamentals",
            issuer: "Sekolahku ID",
            date: "2023",
            credentialId: "-",
            description: "Pelatihan dasar-dasar keamanan siber dan cara melindungi sistem dari ancaman.",
            icon: "fas fa-shield-alt",
            verifyUrl: "#"
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
