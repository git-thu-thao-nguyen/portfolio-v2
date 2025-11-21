import spaceAstroXImg from 'assets/project/spaceAstroX.png';
import aventurixImg from 'assets/project/aventurix.png';
import portfolioImg from 'assets/project/portfolio.png';
import kyotoImg from 'assets/project/kyoto.png';
import velunaImg from 'assets/project/veluna.png';


export const APP_DATA = {
    GITHUB_URL: "https://github.com/git-thu-thao-nguyen",
    LINKEDIN_URL: "https://www.linkedin.com/in/thuthao-ng/",
    CV_URL: "https://drive.google.com/file/d/1aOfIu651Uik2K8Tnh8AXSqYR5UzsJQTB/view" //TODO
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
            "Conception et développement d'un tableau de bord moderne, interactif et personnalisable",
            "Développement d'interfaces permettant de configurer, filtrer et programmer des exports automatisés",
            "Collecte et exploitation de données via des robots de scraping sur plusieurs milliers de sites e-commerce",
            "Participation à la mise en place d'une solution d'analyse automatisée avec IA, réduisant la charge de travail liée à la validation des données et accélérant la livraison des projets clients",
            "Développement pour le groupe TTI (Milwaukee, Ryobi) – d'un système de monitoring de 300+ sites distributeurs, détection des revendeurs non autorisés et export hebdomadaire automatisé des données",
            "Automatisation de l'intégration des données dans 25+ pays, pour le groupe Schneider Electric – optimisation du suivi du réseau de distribution",
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
            fr: "2021 - 2025",
            en: "2021 - 2025",
        },
        description: {
            fr: [
            "Planification, chiffrage et suivi des projets clients, avec des livraisons respectant les délais",
            "Pilotage d'une équipe technique de 5 personnes à distance, chargée de mettre en place la solution pour les clients",
            "Clients : Schneider, Michelin, SFR, Carrefour, Head, Atida, Sisley..."
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
            fr: "Veluna Studio",
            en: "Veluna Studio"
        },
        duration: {
            fr: "2025 - Maintenant",
            en: "",
        },
        description: {
            fr: [
            "Projet entrepreneurial: création d'une marque de bijoux et accessoires pour le marché américain",
            "Gestion globale du projet : recherche fournisseurs, coordination logistique et stratégie produit",
            "Mise en place et gestion de la première boutique en ligne sous Shopify",
            "Développement d'une solution sur mesure en React/Node.js pour remplacer Shopify à terme"
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
        description: "Portfolio personnel conçu avec React, TypeScript, Bootstrap et Vite. Interface moderne, responsive et disponible en mode clair/sombre. Le site présente mon parcours, mes projets et mes compétences techniques, avec la possibilité de télécharger le CV. Projet déployé sur Vercel.",
        githubLink: "https://github.com/git-thu-thao-nguyen/portfolio-v2",
        demoLink: "https://thuthaonguyen.com/"
    },
    {
        id: 4,
        imgPath: kyotoImg,
        title: "Chemins de Kyoto",
        description: "Site vitrine présentant la ville de Kyoto à travers ses temples, ses paysages et des forfaits d'itinéraires exclusifs destinés aux voyageurs. Le projet propose un design simple et épuré, et repose sur une structure en HTML5, CSS3 et JavaScript.",
        githubLink: "https://github.com/git-thu-thao-nguyen/kyoto-site",
        demoLink: ""
    },
    {
        id: 5,
        imgPath: velunaImg,
        title: "Veluna Studio",
        description: "Site e-commerce développé sur Shopify dans le cadre d'un projet entrepreneurial, intégrant un référencement SEO optimisé, un paiement sécurisé, la gestion des stocks et le suivi des commandes. Le site offre une navigation fluide et des fonctionnalités e-commerce complètes.",
        githubLink: "",
        demoLink: "https://www.velunastudio.com/"
    }
]

//TODO
export const SKILLS_DATA = [
    'Javascript',
    'Typescript',
    // 'Angular',
    'React',
    // 'Next JS',
    'HTML5',
    'CSS3',
    'Tailwind',
    'Bootstrap',
    'Shadcn UI',
    'Node.js',
    'Express.js',
    'PHP',
    'Java',
    'MySQL',
    // 'PostgreSQL',
    'MongoDB',
    'Elasticsearch',
    'Git',
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