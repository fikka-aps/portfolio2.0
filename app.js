const app = Vue.createApp({
    data() {
        return {
            fullname: "Fikka Ayu Pamirtha Sary",
            name: "Fikka",
            birthday: new Date(2001, 1, 21),
            address: "Baturraden, Banyumas, Indonesia",
            phone: "(+62) 8823-2979-441",
            email: "fikkaayups@gmail.com",
            age: null,
            social: [
                {
                    link: "https://instagram.com/fikkaaps",
                    name:"instagram",
                    icon: "bx bxl-instagram"
                },
                {
                    link: "https://github.com/fikka-aps",
                    name: "github",
                    icon: "bx bxl-github"
                },
                {
                    link: "https://www.linkedin.com/in/fikka-ayu-pamirtha-sary-408405247/",
                    nama:"linkedin",
                    icon: "bx bxl-linkedin"
                }
            ],
            job : [
                "Freelancer",
                "Web Developer",
                "Programmer"
            ],
            education: [
                {
                    school: "Jenderal Soedirman University, Indonesia",
                    gpa: "GPA: 3.85/4.00",
                    year: "2019 - 2023",
                    degree: "Bachelor of Computer Science"
                }
                // {
                //     school: "SMA N 4 Purwokerto",
                //     gpa: "GPA: 32.85/40.00",
                //     year: "2016 - 2019",
                //     degree: "Science"
                // }
            ],
            experience:[
                {
                    position:"Web Developer Intern",
                    company:"Leaders.id (PT Bukhori Group Indonesia)",
                    year: "April 2024 - July 2024",
                    jobdesk: [
                        "developed and launched a Laravel-based ticketing system with MySQL that improved event management efficiency.",
                        "Created and maintained more than 5 landing pages with WordPress for various programs at Leaders.id.",
                        "Managed domain and hosting using cPanel, including setup, configuration, and maintenance."
                    ]
                },
                {
                    position:"Web Developer Intern",
                    company:"Ultranesia (PT Noto teknologi Indonesia)",
                    year: "Mar 2022 - Aug 2022",
                    jobdesk: [
                        "Produce an asset management information system with QR Code technology to make it easier for users to check assets.",
                        "Simplified the user interface for easy navigation and search of asset information.",
                        "Developed an asset reporting module so that users can generate more detailed reports on asset status and movement."
                    ]
                }
            ],
            skills: [
                {
                    skill_name: "HTML",
                    level: "Advanced",
                    skill_image: "assets/img/html-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "CSS",
                    level: "Intermediate",
                    skill_image: "assets/img/css-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "Bootstrap",
                    level: "Intermediate",
                    skill_image: "assets/img/bootstrap-4-icon.png",
                    filter: "framework"
                },
                {
                    skill_name: "PHP",
                    level: "Intermediate",
                    skill_image: "assets/img/php-programming-language-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "Codeigniter",
                    level: "Intermediate",
                    skill_image: "assets/img/codeigniter-icon.png",
                    filter: "framework"
                },
                {
                    skill_name: "Laravel",
                    level: "Intermediate",
                    skill_image: "assets/img/laravel-icon.png",
                    filter: "framework"
                },
                {
                    skill_name: "Python",
                    level: "Intermediate",
                    skill_image: "assets/img/python-programming-language-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "Django",
                    level: "Intermediate",
                    skill_image: "assets/img/django-icon.png",
                    filter: "framework"
                },
                {
                    skill_name: "Javascript",
                    level: "Intermediate",
                    skill_image: "assets/img/javascript-programming-language-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "Git",
                    level: "Intermediate",
                    skill_image: "assets/img/git-icon.png",
                    filter: "tools"
                },
                {
                    skill_name: "SQL",
                    level: "Intermediate",
                    skill_image: "assets/img/sql-code-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "MySQL",
                    level: "Intermediate",
                    skill_image: "assets/img/mysql-icon.png",
                    filter: "tools"
                },
                {
                    skill_name: "React Js",
                    level: "Beginner",
                    skill_image: "assets/img/react-js-icon.png",
                    filter: "lang"
                },
                {
                    skill_name: "WordPress",
                    level: "Intermediate",
                    skill_image: "assets/img/wordpress-icon.png",
                    filter: "tools"
                }
            ],
            portfolio: [
                {
                    port_name: "Sistem Bansos",
                    category: "Website",
                    year: "2023",
                    client: "DINSOSDALDUKKBP3A Purbalingga",
                    tech: "Python (Django), Bootstrap 4, Leaflet Js, MySQL",
                    web: "",
                    github: "",
                    description: "Project to fulfill the requirements of the final thesis. The aim is to map people with social welfare problems and those who receive assistance. It is hoped that this system can help in choosing the right recipient of assistance.",
                    port_image:[
                        "assets/img/portfolio/siban.png",
                        "assets/img/portfolio/siban2.png",
                        "assets/img/portfolio/siban3.png"
                    ]
                },
                {
                    port_name: "SIMASET",
                    category: "Website",
                    year: "2022",
                    client: "Ultranesia",
                    tech: "PHP (Codeigniter 3), Bootstrap 4, QR code, MySQL",
                    web: "",
                    github: "",
                    description: "",
                    port_image:[
                        "assets/img/portfolio/simaset.png",
                        "assets/img/portfolio/simaset2.png"
                    ]
                },
                {
                    port_name: "Toko Online",
                    category: "Website",
                    year: "2021",
                    client: "-",
                    tech: "PHP (Codeigniter 3), Bootstrap 4, MySQL",
                    web: "",
                    github: "",
                    description: "Final project for E-commerce and Web Programming course. Users can view products, place orders, and confirm payments.",
                    port_image:[
                        "assets/img/portfolio/toko1.png",
                        "assets/img/portfolio/toko2.png",
                        "assets/img/portfolio/toko3.png"
                    ]
                },
                {
                    port_name: "Portfolio Website",
                    category: "Website",
                    year: "2023",
                    client: "-",
                    tech: "HTML, CSS, Javascript",
                    web: "https://fikka-aps.github.io/portfolio.io",
                    github: "https://github.com/fikka-aps/portfolio.io",
                    description: "Project for completing Virtual Internship at Nusa Development Program (NDP)",
                    port_image:[
                        "assets/img/portfolio/porto1.png",
                        "assets/img/portfolio/porto2.png"
                    ]
                },
                {
                    port_name: "SIBIMBA",
                    category: "Website",
                    year: "2021",
                    client: "-",
                    tech: "PHP (Codeignoter 3), Bootstrap 4, MySQL",
                    web: "",
                    github: "",
                    description: "Project for Web Programming I Course",
                    port_image:[
                        "assets/img/portfolio/sibimba1.png",
                        "assets/img/portfolio/sibimba2.png",
                        "assets/img/portfolio/sibimba3.png",
                    ]
                },
                {
                    port_name: "Mobile E-commerce",
                    category: "App",
                    year: "2021",
                    client: "-",
                    tech: "Dart, Flutter",
                    web: "",
                    github: "",
                    description: "Project for Programming Mobile Course",
                    port_image:[
                        "assets/img/portfolio/flutter1.png",
                        "assets/img/portfolio/flutter2.png",
                        "assets/img/portfolio/flutter3.png",
                    ]
                },
                {
                    port_name: "Portfolio Website 2.0",
                    category: "Website",
                    year: "2024",
                    client: "-",
                    tech: "HTML, Bootstrap 4, Vue Js",
                    web: "",
                    github: "",
                    description: "A responsive and interactive portfolio website is designed to showcase my skills, track record, and resume in an engaging manner.",
                    port_image:[
                        "assets/img/portfolio/portfolio1.png",
                        "assets/img/portfolio/portfolio2.png",
                        "assets/img/portfolio/portfolio3.png",
                    ]
                },
                {
                    port_name: "Duta Wisata Indonesia Website",
                    category: "Website",
                    year: "2024",
                    client: "Leaders.id",
                    tech: "Wordpress, Elementor",
                    web: "https://dutawisataindonesia.id",
                    github: "",
                    description: "This website is a project I developed during my internship, designed with a responsive layout to ensure optimal accessibility across various devices, including desktop and mobile. It provides comprehensive and easily understandable information about the program it represents, covering key details such as objectives, benefits, registration requirements, and clear contact information for further inquiries. This project showcases the skills I've developed in web development and design during my internship, emphasizing a user-friendly experience and clarity of information.",
                    port_image:[
                        "assets/img/portfolio/dutawisata1.png",
                        "assets/img/portfolio/dutawisata2.png",
                        "assets/img/portfolio/dutawisata3.png",
                    ]
                },
                {
                    port_name: "Sistem Tiket",
                    category: "Website",
                    year: "2024",
                    client: "Leaders.id",
                    tech: "Laravel, MySQL, Bootstrap",
                    web: "",
                    github: "",
                    description: "This system allows for the creation of tickets with automatically generated QR codes, which can then be scanned for efficient validation and ticket usage. This solution is designed to enhance security and streamline event management.",
                    port_image:[
                        "assets/img/portfolio/tiket1.png",
                        "assets/img/portfolio/tiket2.png",
                        "assets/img/portfolio/tiket3.png",
                    ]
                },
                {
                    port_name: "Website Registrasi Program",
                    category: "Website",
                    year: "2024",
                    client: "Leaders.id",
                    tech: "Laravel (Back-end), React Js (Front-end), TailwindCSS, MySQL",
                    web: "",
                    github: "",
                    description: "One of my internship projects at Leaders.id involved developing an integrated registration system for all company programs, using Laravel for the backend and React.js for the frontend. Administrators can add new programs along with registration forms that can be filled out by users.",
                    port_image:[
                        "assets/img/portfolio/regist1.png",
                        "assets/img/portfolio/regist2.png",
                        "assets/img/portfolio/regist3.png",
                        "assets/img/portfolio/regist3.png",
                    ]
                }
            ],
            services:[
                {
                    service_name: "Website Developer",
                    service_desc: "Develop website using PHP native or using framework Codeigniter or Laravel also using Python with Django as framework",
                    icon: "bi bi-laptop",
                    path: "M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174",
                    fill: "#f5f5f5"
                }
            ],
            certificates:[
                {
                    certif_name: "Data Science Fundamentals",
                    giver: "DQLab",
                    image: "assets/img/certificates/certificate-Data Science Fundamental_pages-to-jpg-0001.jpg"
                },
                {
                    certif_name: "Project-Based Internship",
                    giver: "Nusa Development Program (NDP)",
                    image: "assets/img/certificates/Certificate-Project Based Internship at NDP_page-0001.jpg"
                },
                {
                    certif_name: "Mini Bootcamp Larareact",
                    giver: "PT Toko Dizital Teknologi",
                    image: "assets/img/certificates/22-1.png"
                },
                {
                    certif_name: "Microsoft Azure Data Fundamentals",
                    giver: "Talenta AI Indonesia",
                    image: "assets/img/certificates/Certificate_51797_57_bw7pz_page-0001.jpg"
                },
                {
                    certif_name: "DELF A1",
                    giver: "Institut Français d'Indonésie",
                    image: "assets/img/certificates/DELF A1_rotated_page-0001.jpg"
                },
                {
                    certif_name: "Web Developer Internship",
                    giver: "PT Bukhori Grup Indonesia (Leaders.id)",
                    image: "assets/img/certificates/Sertifikat Magang Fikka Ayu.jpeg"
                }
            ]
        }
    },
    computed: {
        formattedDate() {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            return this.birthday.toLocaleDateString('en-GB', options);
        },
        calculateAge() {
            const today = new Date();
            const dob = new Date(this.birthday);
            let age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                return age--;
            }
            return this.age = age;
        }
    },
    methods: {
        
    }
})

app.mount('#app')