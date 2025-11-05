import spaceAstroXImg from 'assets/project/spaceAstroX.png';
import aventurixImg from 'assets/project/aventurix.png';
import portfolioImg from 'assets/project/portfolio.png';
import kyotoImg from 'assets/project/kyoto.png';
import velunaImg from 'assets/project/veluna.png';


export const APP_DATA = {
    GITHUB_URL: "https://github.com/git-thu-thao-nguyen",
    LINKEDIN_URL: "https://www.linkedin.com/in/thuthao-n/",
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
            "Conception et développement d'un tableau de bord moderne et interactif pour la plateforme Price Observatory.",
            "Développement d'interfaces permettant aux clients de gérer et planifier l'envoi automatique d'exports avec filtres.",
            "Participation à la mise en place d'une solution d'analyse automatisée basée sur l'IA, réduisant d'environ un tiers la charge de travail liée à la validation des données et accélérant la livraison des projets clients.",
            "Refactoring et optimisation du module de visualisation de données (graphiques de prix, marques, etc.), afin d'améliorer les performances et la maintenabilité du code."
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
            "Création et pilotage d'une équipe technique de cinq personnes basée à l'étranger, avec mise en place d'une organisation à distance et d'outils collaboratifs.",
            "Planification, chiffrage et suivi des projets clients, avec un taux de livraisons dans les délais supérieur à 95%.",
            "Développement, pour le groupe TTI - leader mondial de l'outillage électrique (Milwaukee, AEG, Ryobi), d'un système automatisé de monitoring sur plus de 300 sites revendeurs (dont Amazon), permettant la détection des revendeurs non autorisés.",
            "Conception et déploiement, pour le groupe Schneider Electric - spécialiste mondial de la gestion de l'énergie et de l'automatisation, d'un outil de monitoring international des sites e-commerce, facilitant le suivi et le contrôle des revendeurs dans plus de 30 pays.",
            "Autres clients : Michelin, SFR, Carrefour, Boticinal, Sisley..."
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
            "Projet entrepreneurial de vente de bijoux et accessoires destinée au marché américain",
            "Gestion globale du projet : recherche de fournisseurs, coordination logistique et stratégie produit.",
            "Mise en place et gestion de la boutique en ligne sous Shopify.",
            "Refonte du site avec React et Node.js pour remplacer Shopify par une solution sur mesure, plus flexible et maîtrisée."
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
        githubLink: "https://github.com/git-thu-thao-nguyen",
        demoLink: "https://aventurix.netlify.app/"
    },
    {
        id: 3,
        imgPath: portfolioImg,
        title: "Portfolio",
        description: "Portfolio personnel conçu avec React, TypeScript, Bootstrap et Vite, proposant une interface moderne et responsive. Le site regroupe mon parcours, mes projets et mes compétences techniques, avec la possibilité de télécharger mon CV. Le projet est déployé sur ...//TODO",
        githubLink: "https://github.com/git-thu-thao-nguyen/portfolio-v2",
        demoLink: "https://thuthaonguyen.fr/"
    },
    {
        id: 4,
        imgPath: kyotoImg,
        title: "Chemins de Kyoto",
        description: "Site vitrine présentant la ville de Kyoto à travers ses temples, ses paysages et des forfaits d'itinéraires exclusifs destinés aux voyageurs. Le projet propose un design simple et épuré, et repose sur une structure en HTML5, CSS3 et JavaScript Vanilla, avec GSAP pour la partie animation.",
        githubLink: "https://github.com/git-thu-thao-nguyen/kyoto-site",
        demoLink: ""
    },
    {
        id: 5,
        imgPath: velunaImg,
        title: "Veluna Studio",
        description: "Projet e-commerce conçu sur Shopify, intégrant un système SEO optimisé, le paiement sécurisé, la gestion des stocks et le suivi des commandes. Le site propose une navigation fluide et des fonctionnalités e-commerce complètes.",
        githubLink: "",
        demoLink: "https://www.velunastudio.com/"
    }
]

//TODO
export const SKILLS_DATA = [
    'HTML',
    'CSS',
    'Tailwind',
    'Bootstrap',
    'Shadcn UI',
    'Javascript',
    'Typescript',
    'Angular',
    'React',
    // 'Next JS',
    'Node.js',
    'Express.js',
    'PHP',
    'Java',
    'MongoDB',
    'MySQL',
    // 'PostgreSQL',
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