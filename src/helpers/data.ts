import spaceAstroXImg from 'assets/project/spaceAstroX.png';
import aventurixImg from 'assets/project/aventurix.png';
import portfolioImg from 'assets/project/portfolio.png';
import kyotoImg from 'assets/project/kyoto.png';
import nordenwell from 'assets/project/nordenwell.png';


export const APP_DATA = {
    GITHUB_URL: "https://github.com/git-thu-thao-nguyen",
    LINKEDIN_URL: "https://www.linkedin.com/in/thuthao-ng/",
    CV_URL: "https://drive.google.com/drive/u/0/folders/1NESMx4tEU6bCdxxrV-DPkl9FNKqgj9R6"
}

export const EXPERIENCES = [
    {
        id: 1,
        title: {
            fr: "Développeuse Full-stack",
            en: "Fullstack Developer"
        },
        company: {
            fr: "Price Observatory",
            en: "Price Observatory"
        },
        duration: {
            fr: "2020 - 2025",
            en: "2020 - 2025",
        },
        description: {
            fr: [
            "Conçu et développé la V2 d'un tableau de bord moderne, avec une architecture modulaire et personnalisable.",
            "Développé les interfaces permettant de configurer, administrer et programmer des exports, ainsi que le batch chargé d'exécuter les exports planifiés via un cron job dynamique.",
            "Collecté et exploité des données via des robots de scraping sur plusieurs milliers de sites e-commerce.",
            "Intégré une solution d'analyse automatisée basée sur IA (LLaMA), réduisant de 60 % les opérations de validation manuelle des données.",
            "Optimisé les outils internes pour accélérer l'onboarding des nouveaux projets clients.",
            "Implémenté un pipeline d'intégration de données de 25 pays pour Schneider Electric, améliorant significativement le suivi du réseau de distribution.",
            "Participé à la conception et à la maintenance d'un système de monitoring pour le groupe TTI (Milwaukee, Ryobi), couvrant plus de 300 sites distributeurs, avec alerting automatisé.",
            "Contribué à l'amélioration continue : refactoring, code review, optimisation UX, documentation.",
            "Stack : JavaScript, PHP, API REST, jQuery, SQL, Elasticsearch, MongoDB, Doctrine, Redis, Cloud, Git, etc."
            ],
            en: ""
        }
    },
    {
        id: 2,
        title: {
            fr: "Responsable de projet",
            en: ""
        },
        company: {
            fr: "Price Observatory",
            en: "Price Observatory"
        },
        duration: {
            fr: "2020 - 2025",
            en: "2020 - 2025",
        },
        description: {
            fr: [
            "Coordonné une équipe de 5 personnes chargée du déploiement de la solution pour les clients.",
            "Assuré la conduite de projets : cadrage, mise en place et gestion des plannings (étapes, priorités, deadlines).",
            "Plus de 100 déploiements clients réalisés avec succès (Schneider, Michelin, Sisley, SFR, etc.)."
            ],
            en: ""
        }
    },
    {
        id: 3,
        title: {
            fr: "Entrepreneuse",
            en: ""
        },
        company: {
            fr: "Nordenwell",
            en: "Nordenwell"
        },
        duration: {
            fr: "2025 - Maintenant",
            en: "",
        },
        description: {
            fr: [
            "Projet entrepreneurial : cofondation d'une marque e-commerce destinée au marché US.",
            "Participé à la conception et au développement global du projet.",
            // "Géré les aspects marketing digital : SEO, campagnes publicitaires, réseaux sociaux.",
            "Mis en place une première version opérationnelle du site.",
            "Conçu et développé la V2 de l'application : API, comptes utilisateurs, commandes, paiement sécurisé, etc.",
            "Stack : TypeScript, React, Tailwind, Node.js, Express.js, MongoDB."
            ],
            en: ""
        }
    },
]

export const PROJECTS = [
    {
        id: 1,
        imgPath: spaceAstroXImg,
        title: "SpaceAstroX",
        description: "Application web dédiée à l'astronomie, permettant d'explorer en temps réel les actualités et images spatiales issues de sources comme la NASA, SpaceX, Hubble ou le télescope JWST. Le projet intègre plusieurs APIs publiques et inclut le développement d'un moteur de recherche multi-sources pour centraliser les contenus. L'application est déployée sur la plateforme cloud Netlify.",
        githubLink: "https://github.com/git-thu-thao-nguyen/space-astro-x",
        demoLink: "https://spaceastrox.netlify.app/"
    },
    {
        id: 2,
        imgPath: aventurixImg,
        title: "Aventurix",
        description: "Application web dédiée aux voyages, permettant la réservation en ligne de séjours. Le projet comprend un système d'authentification des utilisateurs, la gestion des offres de voyage, un module de paiement sécurisé via Stripe, ainsi qu'un historique des réservations. L'application est déployée avec un front-end hébergé sur Netlify, un back-end sur Vercel, et une base de données MongoDB Atlas.",
        githubLink: "https://github.com/git-thu-thao-nguyen/aventurix-back-secured",
        demoLink: "https://aventurix.netlify.app/"
    },
    {
        id: 3,
        imgPath: portfolioImg,
        title: "Portfolio",
        description: "Site personnel présentant mon parcours, une sélection de mes projets personnels ainsi que mes compétences. L'interface est moderne, adaptée à tous les écrans et propose un mode clair/sombre. Le site permet également de télécharger mon CV. Projet déployé sur Vercel (CI/CD, déploiement automatique).",
        githubLink: "https://github.com/git-thu-thao-nguyen/portfolio-v2",
        demoLink: "https://thuthaonguyen.com/"
    },
    {
        id: 4,
        imgPath: kyotoImg,
        title: "Chemins de Kyoto",
        description: "Site vitrine qui présente Kyoto à travers ses temples, ses paysages et une sélection de forfaits d'itinéraires prêts à réserver. Le contenu est organisé de façon claire pour aider les voyageurs à découvrir les parcours et choisir facilement l'option qui leur convient.",
        githubLink: "https://github.com/git-thu-thao-nguyen/kyoto-site",
        demoLink: ""
    },
    {
        id: 5,
        imgPath: nordenwell,
        title: "Nordenwell",
        description: "Site e-commerce développé dans le cadre d'un projet entrepreneurial destiné au marché US, intégrant un SEO optimisé, un système de paiement sécurisé, la gestion des stocks, le suivi des commandes et un tableau de bord intuitif via Shopify.",
        githubLink: "",
        demoLink: "https://nordenwell.com/"
    }
]

//TODO
export const SKILLS_DATA = [
    'Javascript',
    'Typescript',
    // 'Angular',
    'React',
    // 'Next JS',
    'Tailwind',
    'Bootstrap',
    // 'Shadcn UI',
    'Node.js',
    'Express.js',
    'PHP',
    // 'Java',
    'MySQL',
    // 'PostgreSQL',
    'MongoDB',
    'Elasticsearch',
    'Git',
    'Docker',
    'HTML5',
    'CSS3',
    // 'Shopify',
    // 'AWS',
    // 'Docker',
    // 'Figma',
    // 'Firebase',
    // 'MaterialUI',
    // 'Nginx',
  ]
  
  // Choose your skills from below. Make sure it's in the same format and spelled correctly.
  // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
  
  
  // AVAILABLE SKILLS
  
  /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */