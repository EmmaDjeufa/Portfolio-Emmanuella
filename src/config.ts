export const config = {
    developer: {
        name: "Ngougue Djeufa",
        fullName: "Emmanuella",
        title: "Software Engineer",
        description: "Software Engineer creating digital experiences that respect humans and scale with clarity. Accessibility is my north star."
    },
    social: {
        github: "EmmaDjeufa",
        email: "emmandjeufa@gmail.com",
        location: "France"
    },
   about: {
    title: "Qui suis-je?",
    description: "Ingénieure informatique spécialisée en Cloud Computing, avec une expertise en sécurité des systèmes et développement SharePoint (SPFx). J’ai mené des projets DevOps et cloud basés sur Docker, Kubernetes, AWS, GCP, Node.js, Angular et Linux. Curieuse, rigoureuse et orientée résultats, je souhaite rejoindre une entreprise où je pourrai apporter une réelle valeur ajoutée grâce à une collaboration fiable, efficace et durable."
   },


    experiences: [
        {
            position: "Consultante Modern Workplace",
            company: "Avanade",
            period: "2024 - 2024",
            location: "Bordeaux",
            description: "Développement pendant mon stage de l'application web Allô Réseau. Optimisation à 40% de la première version avec SPFx. Optimisation des performances de l'application et garantie de son utilisation par le client sur le long terme, conformément à sa licence Microsoft.",
            responsibilities: [
                "Création d'interfaces utilisateur interactives avec SPFx et Node.js",
                "Garantir un bon affichage des données utilisateurs sur l'interface developpé",
                "Optimisation des performances de l'application et garantie de son utilisation par le client sur le long terme, conformément à sa licence Microsoft.",
                "Collaborer avec le responsable de la conception et du développement backend pour fournir des fonctionnalités de haute qualité."
            ],
            technologies: ["SharePoint", "Node.js", "PowerApps", "JavaScript", "SPFx", "TypeScript"]
        },
        {
            position: "Ingénieure Cyber sécurité",
            company: "C.H. de l'Aigle",
            period: "2023 - 2023",
            location: "France",
            description: "Développement pendant mon stage d'une solution d'accès sécurisé aux connexions RDP/SSH et contrôle d'accès aux serveurs pour les prestataires externes.",
            responsibilities: [
                "Sécurisation des connexions RDP/SSH et contrôle d'accès aux serveurs",
                "Formation certifiante sur les concepts essentiels de la sécurité avec la MOOC de l'ANSSI",
                "Configuration d'appareil informatique à destination du personnel médical"
            ],
            technologies: ["Machine virtuelle", "Apache Guacamol", "Active Directory", "Bash (Linux)", "Protocoles RDP et SSH", "Réseau informatique"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Chatbot et générateur d'images",
            category: "DevOps",
            technologies: "Python, Javascript, Docker, FastAPI",
            url: "https://chatbot-dalle.onrender.com",
            github:"https://github.com/EmmaDjeufa/PPT_infra/tree/travail-en-cours",
            image: "/images/Chatbot.png"
        },
        {
            id: 2,
            title: "Site web de gestion des évènements d'étudiants",
            category: "Full Stack",
            technologies: "Angular, Node.js, Typescript, Firebase",
            github : "https://github.com/EmmaDjeufa/Projet_Angular",
            url: "https://student-events-app-2.onrender.com/",
            image: "/images/Angular.png"
        },
        {
            id: 3,
            title: "Déployement avec Terraform et Ansible",
            category: "DevOps",
            technologies: "Terraform, Ansible, Gitlab, MySQL, Python, Machines virtuelles",
            github: "https://github.com/EmmaDjeufa/Projet_Ansible_Terraform",
            image: "/images/Terraform.png"
        },
        {
            id: 4,
            title: "Cloud Infrastructure",
            category: "DevOps",
            technologies: " Kubernetes, Terraform",
            github: "https://github.com/EmmaDjeufa/Kubernetes_chatbot",
            image: "/images/Kubernetes.png"
        },
        {
            id: 5,
            title: "Recommandations de films",
            category: "Full Stack",
            technologies: "Python, React, Node.js, FastAPI, MySQL, TypeScript",
            github: "https://github.com/EmmaDjeufa/Moovies_Recommandation",
            image: "/images/Movies.png"
        }
    ],
    contact: {
        email: "emmandjeufa@gmail.com",
        github: "https://github.com/EmmaDjeufa",
        linkedin: "https://www.linkedin.com/in/emmanuella-n-36323b259",
        twitter: "https://x.com",
        instagram: "https://www.instagram.com/3884deux"
    },
    skills: {
        develop: {
            title: "CI/DI",
            description: "Intégration et déploiement continu des solutions.",
            details: "Gestion d'infrastructure cloud, de l'intégration et du déploiement continu et sécurisé des solutions développés.",
            tools: ["AWS", "kubernetes", "Terraform", "Ansible", "Gitlab", "GCP", "Github", "Docker"]
             },
        design: {

            title: "DEVELOP",
            description: "Développement full-stack, web modernes.",
            details: "Développement d'applications web évolutives avec des frameworks de pointe. Création d'interfaces utilisateur réactives, performantes et accessibles.",
            tools: ["JavaScript", "TypeScript", "React", "Python","Java", "Angular", "firebase", "MongoDB", "MySQL", "Flask", "Node.js"]
       
        }
    }
};


