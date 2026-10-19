/* =====================================================================
   CONTENU DU PORTFOLIO — Ahmed JABRI
   Modifiez ce fichier pour mettre à jour le site (FR et EN).
   ===================================================================== */

window.PORTFOLIO = {
  config: {
    /* Clé d'accès Web3Forms (gratuite) : https://web3forms.com
       Saisissez votre adresse email sur le site, copiez la clé reçue et collez-la ici.
       Sans clé, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli. */
    web3formsKey: "f93b1a27-3f01-484b-8040-537c185ae254",

    /* Coordonnées encodées : jamais affichées sur la page ni en clair dans le code.
       Pour changer une valeur, dans la console du navigateur :
       btoa("valeur".split("").reverse().join(""))
       Téléphone : chiffres uniquement, avec l'indicatif pays, sans "+" (ex. 212600000000). */
    contact: {
      e: "bW9jLmxpYW1nQDIwMDJkZW1oYXlyYmFq",
      p: "NDkzNzU0OTQ2MjEy"
    },

    linkedin: "https://www.linkedin.com/in/jabri-ahmed-629905287/",
    cv: "assets/CV-Ahmed-Jabri.pdf",     // déposez votre CV à cet emplacement
    photo: ""                            // chemin d'une photo carrée (ex. "assets/photo.jpg") ; vide = initiales « AJ »
  },

  content: {
    /* ============================== FRANÇAIS ============================== */
    fr: {
      meta: {
        title: "Ahmed JABRI — Ingénieur IA & Cybersécurité",
        description: "Site personnel d'Ahmed JABRI, Ingénieur d'État en Génie Informatique et Intelligence Artificielle (HESTIM), double diplômé d'un Master en Cyberdéfense (INSA Hauts-de-France). IA, vision par ordinateur, cybersécurité et data science."
      },

      ui: {
        skip: "Aller au contenu",
        "nav.about": "À propos",
        "nav.journey": "Parcours",
        "nav.projects": "Projets",
        "nav.skills": "Compétences",
        "nav.research": "Intérêts",
        "nav.contact": "Contact",
        "nav.cta": "Me contacter",
        "a11y.theme": "Changer de thème",
        "a11y.menu": "Ouvrir le menu",
        "a11y.lang": "Switch to English",
        "a11y.top": "Revenir en haut",
        "a11y.close": "Fermer",

        "hero.badge": "IA · Vision par ordinateur · Cybersécurité",
        "hero.hello": "Bonjour, je suis",
        "hero.intro": "Ingénieur d'État en Génie Informatique & Intelligence Artificielle, double diplômé d'un Master en Cyberdéfense. Je conçois des systèmes intelligents en deep learning et vision par ordinateur — de l'idée au déploiement.",
        "hero.ctaContact": "Me contacter",
        "hero.ctaProjects": "Voir mes projets",
        "hero.ctaCv": "Télécharger le CV",
        "hero.scroll": "Défiler",

        "about.kicker": "01 — À propos",
        "about.title": "Entre recherche en IA et ingénierie de systèmes intelligents",
        "about.soft": "Compétences humaines",

        "journey.kicker": "02 — Parcours",
        "journey.title": "Expérience & formation",
        "journey.exp": "Expérience professionnelle",
        "journey.edu": "Formation académique",

        "projects.kicker": "03 — Projets",
        "projects.title": "Projets sélectionnés",
        "projects.sub": "De la vision par ordinateur à la cybersécurité : des systèmes conçus pour répondre à des problèmes réels.",
        "projects.details": "Voir les détails",
        "projects.empty": "Aucun projet dans cette catégorie.",

        "modal.context": "Contexte",
        "modal.highlights": "Points clés",
        "modal.stack": "Technologies & thèmes",
        "modal.cta": "Échanger sur ce projet",

        "skills.kicker": "04 — Compétences",
        "skills.title": "Boîte à outils technique",
        "skills.sub": "Les outils et méthodes que j'utilise pour passer d'une idée de recherche à un système opérationnel.",
        "skills.certs": "Certifications",

        "research.kicker": "05 — Centres d'intérêt",
        "research.title": "Ce qui m'intéresse",
        "research.goalLabel": "Ce qui m'anime",
        "research.goalTitle": "Transformer une idée en système qui fonctionne",
        "research.goalText": "Passionné par l'intelligence artificielle, la cybersécurité, la data science et le développement de solutions innovantes, j'aime mener un projet de bout en bout : comprendre le problème, concevoir le modèle, puis le déployer de façon fiable et sécurisée. Mon double parcours — IA à HESTIM, cyberdéfense à l'INSA Hauts-de-France — me permet d'aborder chaque projet sous ces deux angles.",
        "research.cta": "Échanger avec moi",
        "research.domains": "Domaines d'application explorés",

        "contact.kicker": "06 — Contact",
        "contact.title": "Travaillons ensemble",
        "contact.sub": "Une question, un projet ou simplement envie d'échanger ? Écrivez-moi, je vous réponds rapidement.",
        "contact.quick": "Contact direct",
        "contact.email": "Email",
        "contact.whatsapp": "WhatsApp",
        "contact.call": "Appeler",
        "contact.callback": "Être rappelé",
        "contact.location": "Basé à Casablanca, Maroc",

        "form.title": "Envoyer un message",
        "form.name": "Nom complet",
        "form.namePh": "Ex. Marie Dupont",
        "form.email": "Votre email",
        "form.emailPh": "nom@exemple.com",
        "form.phone": "Votre numéro de téléphone",
        "form.whatsapp": "Votre numéro WhatsApp",
        "form.phoneHint": "Indiquez l'indicatif du pays (ex. +212, +33).",
        "form.phonePh": "+33 6 12 34 56 78",
        "form.prefer": "Comment souhaitez-vous être recontacté ?",
        "form.prefEmail": "Email",
        "form.prefPhone": "Téléphone",
        "form.prefWhatsapp": "WhatsApp",
        "form.subject": "Sujet",
        "form.message": "Message",
        "form.messagePh": "Présentez-vous brièvement et dites-moi de quoi vous souhaitez parler…",
        "form.send": "Envoyer le message",
        "form.sending": "Envoi en cours…",
        "form.note": "Vos informations servent uniquement à vous répondre.",

        "err.name": "Veuillez indiquer votre nom.",
        "err.email": "Veuillez saisir une adresse email valide.",
        "err.phone": "Veuillez indiquer votre numéro.",
        "err.phoneInvalid": "Numéro de téléphone invalide.",
        "err.message": "Votre message doit contenir au moins 10 caractères.",

        "toast.success": "Merci ! Votre message a bien été envoyé. Je vous réponds au plus vite.",
        "toast.error": "L'envoi a échoué. Réessayez ou utilisez le bouton Email.",
        "toast.mailto": "Votre messagerie s'ouvre avec le message pré-rempli.",
        "toast.cooldown": "Message déjà envoyé — merci de patienter une minute.",
        "toast.callback": "Laissez votre numéro : je vous rappelle rapidement.",
        "toast.invalid": "Merci de corriger les champs indiqués.",

        "msg.whatsapp": "Bonjour Ahmed, je vous contacte depuis votre portfolio.",
        "msg.emailSubject": "Contact depuis votre portfolio",
        "msg.project": "Bonjour Ahmed, j'aimerais échanger avec vous au sujet de votre projet « {project} ».",
        "msg.hello": "Bonjour Ahmed, j'ai découvert votre site et j'aimerais échanger avec vous.",

        "footer.rights": "Tous droits réservés.",
        "footer.made": "Conçu et développé à Casablanca."
      },

      roles: [
        "Ingénieur en Intelligence Artificielle",
        "Passionné de Deep Learning",
        "Ingénieur Vision par ordinateur",
        "Profil Cyberdéfense & Sécurité",
        "Passionné de Data Science"
      ],

      stats: [
        { value: 5, label: "Projets IA & sécurité" },
        { value: 3, label: "Stages en entreprise" },
        { value: 5, label: "Certifications" },
        { value: 2, label: "Diplômes · Maroc & France" }
      ],

      about: {
        paragraphs: [
          "Je suis <strong>Ingénieur d'État en Génie Informatique et Intelligence Artificielle</strong>, diplômé de HESTIM (Casablanca), et titulaire simultanément d'un <strong>Master en Réseaux et Télécommunications – Cyberdéfense et Sécurité de l'Information</strong> de l'INSA Hauts-de-France, dans le cadre d'un programme de double diplomation.",
          "Mon travail se situe à l'intersection du <strong>deep learning</strong>, de la <strong>vision par ordinateur</strong> et des <strong>systèmes intelligents</strong> : segmentation d'images médicales, reconnaissance de la langue des signes, contrôle qualité industriel ou surveillance intelligente des examens. Ma formation en cybersécurité m'apporte une vision rigoureuse de la fiabilité et du déploiement des systèmes.",
          "Passionné par l'<strong>intelligence artificielle</strong>, la <strong>cybersécurité</strong>, la <strong>data science</strong> et le développement de solutions innovantes, je partage ici mon parcours et les projets sur lesquels je travaille."
        ],
        facts: [
          { icon: "mapPin", label: "Localisation", value: "Casablanca, Maroc" },
          { icon: "graduation", label: "Double diplôme", value: "HESTIM × INSA Hauts-de-France" },
          { icon: "cpu", label: "Domaines", value: "IA · Cybersécurité · Data" },
          { icon: "languages", label: "Langues", value: "Français · Anglais" }
        ],
        soft: [
          { icon: "heart", label: "Intelligence émotionnelle" },
          { icon: "listChecks", label: "Organisation" },
          { icon: "users", label: "Travail en équipe" },
          { icon: "messageText", label: "Communication efficace" }
        ]
      },

      experience: [
        {
          period: "Févr. – Juil. 2026",
          duration: "5 mois",
          org: "HOLOKIA",
          role: "Stage — Ingénierie IA & plateforme SaaS",
          desc: "Conception, développement et déploiement d'une plateforme SaaS pour accompagner l'adoption de l'Intelligence Artificielle.",
          tags: ["SaaS", "Intelligence Artificielle", "Déploiement"]
        },
        {
          period: "Juin – Juil. 2024",
          duration: "2 mois",
          org: "ENEL Green Power",
          role: "Stage — Architecture des systèmes d'information",
          desc: "Conception de l'architecture du système d'information reliant les sites de production aux sièges principaux.",
          tags: ["Architecture SI", "Réseaux", "Énergie"]
        },
        {
          period: "Juil. – Août 2023",
          duration: "1 mois",
          org: "PURE SOLUTIONS",
          role: "Stage — Automatisation",
          desc: "Développement de scripts automatisant des tâches informatiques via une interface visuelle simple.",
          tags: ["Scripting", "Automatisation", "Interface graphique"]
        }
      ],

      education: [
        {
          period: "2021 – 2026",
          org: "HESTIM — Casablanca, Maroc",
          role: "Diplôme d'Ingénieur d'État en Génie Informatique et Intelligence Artificielle",
          desc: "Formation de 5 ans, équivalent M.Eng. / M.Sc."
        },
        {
          period: "2024 – 2026",
          org: "INSA Hauts-de-France — France",
          role: "Master Réseaux et Télécommunications — Cyberdéfense et Sécurité de l'Information",
          desc: "Programme de double diplomation avec HESTIM."
        },
        {
          period: "2020",
          org: "Lycée Royal Militaire — Kénitra, Maroc",
          role: "Baccalauréat Scientifique — Sciences Physiques",
          desc: "Filière francophone."
        }
      ],

      projectFilters: [
        { id: "all", label: "Tous" },
        { id: "vision", label: "Vision par ordinateur" },
        { id: "health", label: "Santé" },
        { id: "industry", label: "Industrie" },
        { id: "security", label: "Sécurité" },
        { id: "research", label: "Recherche" }
      ],

      projects: [
        {
          id: "sign-to-text",
          icon: "hand",
          hue: 190,
          date: "Mars 2026",
          cats: ["vision"],
          label: "Accessibilité",
          title: "Reconnaissance de la langue des signes (Sign-to-Text)",
          summary: "Traduction en temps réel des gestes de la langue des signes en texte, en ASL et en langue des signes arabe.",
          context: "Projet IA — Accessibilité",
          highlights: [
            "Reconnaissance des gestes en temps réel à partir d'un flux vidéo",
            "Prise en charge de deux langues : langue des signes américaine (ASL) et langue des signes arabe",
            "Chaîne de traitement : capture vidéo → détection de la main → classification du geste → texte",
            "Objectif : faciliter la communication des personnes sourdes et malentendantes"
          ],
          tags: ["Vision par ordinateur", "Deep Learning", "Temps réel", "Accessibilité"]
        },
        {
          id: "quality-control",
          icon: "scan",
          hue: 38,
          date: "Févr. 2026",
          cats: ["vision", "industry"],
          label: "Industrie",
          title: "Contrôle qualité visuel automatisé",
          summary: "Détection automatique des défauts de fabrication à partir d'images capturées sur une ligne de production.",
          context: "Projet Vision industrielle",
          highlights: [
            "Détection de cinq familles de défauts : rayures, fissures, trous, taches et défauts de texture",
            "Analyse d'images capturées directement sur la ligne de production",
            "Automatisation de l'inspection pour réduire le contrôle manuel",
            "Approche transposable à différents produits et chaînes de fabrication"
          ],
          tags: ["Vision par ordinateur", "Détection de défauts", "OpenCV", "Industrie 4.0"]
        },
        {
          id: "brain-tumor",
          icon: "brain",
          hue: 330,
          date: "Janv. 2026",
          cats: ["vision", "health"],
          label: "Santé",
          title: "Segmentation des tumeurs cérébrales",
          summary: "Modèle de Deep Learning qui détecte et délimite automatiquement les tumeurs cérébrales sur des images IRM.",
          context: "Projet Deep Learning — Imagerie médicale",
          highlights: [
            "Segmentation automatique des régions tumorales sur des images IRM",
            "Prétraitement et normalisation des images médicales",
            "Entraînement et évaluation d'un modèle de segmentation profond",
            "Objectif : outil d'aide à la décision pour l'analyse radiologique"
          ],
          tags: ["Deep Learning", "Segmentation", "Imagerie médicale", "IRM"]
        },
        {
          id: "aws-soc",
          icon: "shield",
          hue: 152,
          date: "Sept. 2025",
          cats: ["security"],
          label: "Cybersécurité",
          title: "Security Operations Center (SOC) sur AWS",
          summary: "SOC pédagogique déployé sur AWS avec Wazuh, Suricata et la stack ELK pour détecter et visualiser des attaques simulées.",
          context: "Projet Cybersécurité — Cloud AWS",
          highlights: [
            "Conception et déploiement de l'infrastructure sur AWS",
            "Wazuh pour la collecte, la corrélation et l'alerte sur les événements de sécurité",
            "Suricata comme système de détection d'intrusions réseau (IDS)",
            "Stack ELK (Elasticsearch, Logstash, Kibana) pour centraliser et visualiser les journaux",
            "Simulation d'attaques pour valider la chaîne de détection"
          ],
          tags: ["AWS", "Wazuh", "Suricata", "ELK Stack", "SOC"]
        },
        {
          id: "exam-cheating",
          icon: "eye",
          hue: 265,
          date: "Juil. 2025",
          cats: ["vision", "research"],
          label: "Recherche",
          title: "Détection intelligente de la triche aux examens",
          summary: "Système de détection de la triche en salle d'examen, basé sur YOLO (détection de smartphones) et l'analyse d'images de caméras de surveillance.",
          context: "Projet de recherche — HESTIM",
          highlights: [
            "Analyse automatique d'images issues de caméras de surveillance de salles d'examen",
            "Détection des smartphones avec YOLO et identification des comportements suspects",
            "Démarche de recherche : état de l'art, constitution des données, expérimentation et évaluation",
            "Objectif : assister les surveillants et renforcer l'équité des examens"
          ],
          tags: ["Vision par ordinateur", "YOLO", "Deep Learning", "Recherche"]
        }
      ],

      skills: [
        { icon: "brain", title: "Deep Learning & IA", items: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Réseaux de neurones"] },
        { icon: "eye", title: "Vision par ordinateur", items: ["OpenCV", "torchvision", "Ultralytics YOLO", "Détection d'objets", "Segmentation"] },
        { icon: "chart", title: "Analyse de données", items: ["Pandas", "NumPy", "Scikit-learn"] },
        { icon: "cloud", title: "Outils & Cloud", items: ["Git", "Docker", "Jupyter", "AWS"] },
        { icon: "shield", title: "Réseaux & Cybersécurité", items: ["SOC", "Wazuh", "Suricata", "ELK Stack", "Architecture SI"] },
        { icon: "database", title: "Bases de données", items: ["SQL", "MongoDB"] }
      ],

      certifications: [
        { title: "Neural Networks & Deep Learning", issuer: "Coursera", icon: "brain" },
        { title: "Data Analysis for ML", issuer: "", icon: "chart" },
        { title: "HCIA Cloud Computing V5.5", issuer: "Huawei", icon: "cloud" },
        { title: "HCIA Security V4.0", issuer: "Huawei", icon: "shield" },
        { title: "Project Management (PMI)", issuer: "Coursera", icon: "listChecks" }
      ],

      interests: [
        { icon: "eye", title: "Vision par ordinateur", desc: "Détection, segmentation et reconnaissance visuelle appliquées à la santé, l'industrie et l'accessibilité." },
        { icon: "messageText", title: "Traitement du langage naturel", desc: "Compréhension, analyse et génération automatique du langage." },
        { icon: "network", title: "Deep learning & réseaux de neurones", desc: "Architectures profondes, apprentissage de représentations et généralisation des modèles." },
        { icon: "sparkles", title: "IA générative & LLM", desc: "Grands modèles de langage, modèles génératifs et leurs usages fiables et responsables." },
        { icon: "cpu", title: "Systèmes intelligents & IA appliquée", desc: "Des systèmes IA de bout en bout, du prototype au déploiement en conditions réelles." }
      ],

      domains: [
        "Santé · imagerie médicale",
        "Industrie · contrôle qualité",
        "Accessibilité · langue des signes",
        "Éducation · surveillance d'examens",
        "Cybersécurité · SOC cloud"
      ],

      subjects: [
        { id: "hello", label: "Prise de contact" },
        { id: "collab", label: "Projet ou collaboration" },
        { id: "job", label: "Opportunité professionnelle" },
        { id: "other", label: "Autre" }
      ]
    },

    /* ============================== ENGLISH ============================== */
    en: {
      meta: {
        title: "Ahmed JABRI — AI & Cybersecurity Engineer",
        description: "Personal website of Ahmed JABRI, State Engineer in Computer Engineering and Artificial Intelligence (HESTIM) with a dual Master's degree in Cyber Defense (INSA Hauts-de-France). AI, computer vision, cybersecurity and data science."
      },

      ui: {
        skip: "Skip to content",
        "nav.about": "About",
        "nav.journey": "Journey",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.research": "Interests",
        "nav.contact": "Contact",
        "nav.cta": "Get in touch",
        "a11y.theme": "Toggle theme",
        "a11y.menu": "Open menu",
        "a11y.lang": "Passer en français",
        "a11y.top": "Back to top",
        "a11y.close": "Close",

        "hero.badge": "AI · Computer Vision · Cybersecurity",
        "hero.hello": "Hi, I'm",
        "hero.intro": "State Engineer in Computer Engineering & Artificial Intelligence, with a dual Master's degree in Cyber Defense. I build intelligent systems with deep learning and computer vision — from idea to deployment.",
        "hero.ctaContact": "Get in touch",
        "hero.ctaProjects": "View my projects",
        "hero.ctaCv": "Download CV",
        "hero.scroll": "Scroll",

        "about.kicker": "01 — About",
        "about.title": "Bridging AI research and intelligent systems engineering",
        "about.soft": "Soft skills",

        "journey.kicker": "02 — Journey",
        "journey.title": "Experience & education",
        "journey.exp": "Professional experience",
        "journey.edu": "Education",

        "projects.kicker": "03 — Projects",
        "projects.title": "Selected projects",
        "projects.sub": "From computer vision to cybersecurity: systems built to solve real-world problems.",
        "projects.details": "View details",
        "projects.empty": "No project in this category.",

        "modal.context": "Context",
        "modal.highlights": "Key points",
        "modal.stack": "Technologies & topics",
        "modal.cta": "Discuss this project",

        "skills.kicker": "04 — Skills",
        "skills.title": "Technical toolbox",
        "skills.sub": "The tools and methods I use to turn a research idea into a working system.",
        "skills.certs": "Certifications",

        "research.kicker": "05 — Interests",
        "research.title": "What I'm into",
        "research.goalLabel": "What drives me",
        "research.goalTitle": "Turning an idea into a working system",
        "research.goalText": "Passionate about artificial intelligence, cybersecurity, data science and building innovative solutions, I enjoy taking a project end to end: understanding the problem, designing the model, then deploying it reliably and securely. My dual background — AI at HESTIM, cyber defense at INSA Hauts-de-France — lets me approach every project from both angles.",
        "research.cta": "Get in touch",
        "research.domains": "Application domains explored",

        "contact.kicker": "06 — Contact",
        "contact.title": "Let's work together",
        "contact.sub": "A question, a project or just want to chat? Write to me — I'll get back to you quickly.",
        "contact.quick": "Direct contact",
        "contact.email": "Email",
        "contact.whatsapp": "WhatsApp",
        "contact.call": "Call",
        "contact.callback": "Request a call",
        "contact.location": "Based in Casablanca, Morocco",

        "form.title": "Send a message",
        "form.name": "Full name",
        "form.namePh": "e.g. Jane Smith",
        "form.email": "Your email",
        "form.emailPh": "name@example.com",
        "form.phone": "Your phone number",
        "form.whatsapp": "Your WhatsApp number",
        "form.phoneHint": "Include your country code (e.g. +212, +33).",
        "form.phonePh": "+44 7700 900123",
        "form.prefer": "How would you like me to get back to you?",
        "form.prefEmail": "Email",
        "form.prefPhone": "Phone",
        "form.prefWhatsapp": "WhatsApp",
        "form.subject": "Subject",
        "form.message": "Message",
        "form.messagePh": "Briefly introduce yourself and tell me what you'd like to discuss…",
        "form.send": "Send message",
        "form.sending": "Sending…",
        "form.note": "Your details are only used to reply to you.",

        "err.name": "Please enter your name.",
        "err.email": "Please enter a valid email address.",
        "err.phone": "Please enter your number.",
        "err.phoneInvalid": "Invalid phone number.",
        "err.message": "Your message must be at least 10 characters long.",

        "toast.success": "Thank you! Your message has been sent. I'll reply as soon as possible.",
        "toast.error": "Sending failed. Please try again or use the Email button.",
        "toast.mailto": "Your mail app is opening with the message pre-filled.",
        "toast.cooldown": "Message already sent — please wait a minute.",
        "toast.callback": "Leave your number and I'll call you back shortly.",
        "toast.invalid": "Please fix the highlighted fields.",

        "msg.whatsapp": "Hello Ahmed, I'm reaching out from your portfolio.",
        "msg.emailSubject": "Contact from your portfolio",
        "msg.project": "Hello Ahmed, I'd like to talk with you about your project \"{project}\".",
        "msg.hello": "Hello Ahmed, I came across your website and would like to get in touch.",

        "footer.rights": "All rights reserved.",
        "footer.made": "Designed and built in Casablanca."
      },

      roles: [
        "Artificial Intelligence Engineer",
        "Deep Learning enthusiast",
        "Computer Vision Engineer",
        "Cyber Defense & Security background",
        "Data Science enthusiast"
      ],

      stats: [
        { value: 5, label: "AI & security projects" },
        { value: 3, label: "Industry internships" },
        { value: 5, label: "Certifications" },
        { value: 2, label: "Degrees · Morocco & France" }
      ],

      about: {
        paragraphs: [
          "I am a <strong>State Engineer in Computer Engineering and Artificial Intelligence</strong> from HESTIM (Casablanca), and I simultaneously hold a <strong>Master's degree in Networks and Telecommunications – Cyber Defense and Information Security</strong> from INSA Hauts-de-France, through a dual-degree program.",
          "My work sits at the intersection of <strong>deep learning</strong>, <strong>computer vision</strong> and <strong>intelligent systems</strong>: medical image segmentation, sign language recognition, industrial quality control and intelligent exam proctoring. My cybersecurity background brings a rigorous perspective on system reliability and deployment.",
          "Passionate about <strong>artificial intelligence</strong>, <strong>cybersecurity</strong>, <strong>data science</strong> and building innovative solutions, I share here my journey and the projects I work on."
        ],
        facts: [
          { icon: "mapPin", label: "Location", value: "Casablanca, Morocco" },
          { icon: "graduation", label: "Dual degree", value: "HESTIM × INSA Hauts-de-France" },
          { icon: "cpu", label: "Fields", value: "AI · Cybersecurity · Data" },
          { icon: "languages", label: "Languages", value: "French · English" }
        ],
        soft: [
          { icon: "heart", label: "Emotional intelligence" },
          { icon: "listChecks", label: "Organization" },
          { icon: "users", label: "Teamwork" },
          { icon: "messageText", label: "Effective communication" }
        ]
      },

      experience: [
        {
          period: "Feb – Jul 2026",
          duration: "5 months",
          org: "HOLOKIA",
          role: "Internship — AI Engineering & SaaS platform",
          desc: "Designed, developed and deployed a SaaS platform supporting the adoption of Artificial Intelligence.",
          tags: ["SaaS", "Artificial Intelligence", "Deployment"]
        },
        {
          period: "Jun – Jul 2024",
          duration: "2 months",
          org: "ENEL Green Power",
          role: "Internship — Information systems architecture",
          desc: "Designed the information system architecture connecting production sites to the main headquarters.",
          tags: ["IS architecture", "Networks", "Energy"]
        },
        {
          period: "Jul – Aug 2023",
          duration: "1 month",
          org: "PURE SOLUTIONS",
          role: "Internship — Automation",
          desc: "Developed scripts automating IT tasks through a simple visual interface.",
          tags: ["Scripting", "Automation", "GUI"]
        }
      ],

      education: [
        {
          period: "2021 – 2026",
          org: "HESTIM — Casablanca, Morocco",
          role: "State Engineering Degree in Computer Engineering and Artificial Intelligence",
          desc: "5-year program, equivalent to an M.Eng. / M.Sc."
        },
        {
          period: "2024 – 2026",
          org: "INSA Hauts-de-France — France",
          role: "Master's in Networks and Telecommunications — Cyber Defense and Information Security",
          desc: "Dual-degree program with HESTIM."
        },
        {
          period: "2020",
          org: "Royal Military High School — Kénitra, Morocco",
          role: "Scientific Baccalaureate — Physical Sciences",
          desc: "French-language track."
        }
      ],

      projectFilters: [
        { id: "all", label: "All" },
        { id: "vision", label: "Computer vision" },
        { id: "health", label: "Healthcare" },
        { id: "industry", label: "Industry" },
        { id: "security", label: "Security" },
        { id: "research", label: "Research" }
      ],

      projects: [
        {
          id: "sign-to-text",
          icon: "hand",
          hue: 190,
          date: "Mar 2026",
          cats: ["vision"],
          label: "Accessibility",
          title: "Sign language recognition (Sign-to-Text)",
          summary: "Real-time translation of sign language gestures into text, for ASL and Arabic Sign Language.",
          context: "AI project — Accessibility",
          highlights: [
            "Real-time gesture recognition from a video stream",
            "Supports two languages: American Sign Language (ASL) and Arabic Sign Language",
            "Pipeline: video capture → hand detection → gesture classification → text",
            "Goal: make communication easier for deaf and hard-of-hearing people"
          ],
          tags: ["Computer vision", "Deep Learning", "Real-time", "Accessibility"]
        },
        {
          id: "quality-control",
          icon: "scan",
          hue: 38,
          date: "Feb 2026",
          cats: ["vision", "industry"],
          label: "Industry",
          title: "Automated visual quality control",
          summary: "Automatic detection of manufacturing defects from images captured on a production line.",
          context: "Industrial vision project",
          highlights: [
            "Detection of five defect families: scratches, cracks, holes, stains and texture defects",
            "Analysis of images captured directly on the production line",
            "Automated inspection to reduce manual checks",
            "Approach transferable to other products and production lines"
          ],
          tags: ["Computer vision", "Defect detection", "OpenCV", "Industry 4.0"]
        },
        {
          id: "brain-tumor",
          icon: "brain",
          hue: 330,
          date: "Jan 2026",
          cats: ["vision", "health"],
          label: "Healthcare",
          title: "Brain tumor segmentation",
          summary: "A deep learning model that automatically detects and delineates brain tumors on MRI scans.",
          context: "Deep Learning project — Medical imaging",
          highlights: [
            "Automatic segmentation of tumor regions on MRI images",
            "Medical image preprocessing and normalization",
            "Training and evaluation of a deep segmentation model",
            "Goal: a decision-support tool for radiological analysis"
          ],
          tags: ["Deep Learning", "Segmentation", "Medical imaging", "MRI"]
        },
        {
          id: "aws-soc",
          icon: "shield",
          hue: 152,
          date: "Sep 2025",
          cats: ["security"],
          label: "Cybersecurity",
          title: "Security Operations Center (SOC) on AWS",
          summary: "An educational SOC deployed on AWS with Wazuh, Suricata and the ELK stack to detect and visualize simulated attacks.",
          context: "Cybersecurity project — AWS Cloud",
          highlights: [
            "Designed and deployed the infrastructure on AWS",
            "Wazuh for security event collection, correlation and alerting",
            "Suricata as a network intrusion detection system (IDS)",
            "ELK stack (Elasticsearch, Logstash, Kibana) to centralize and visualize logs",
            "Simulated attacks to validate the detection pipeline"
          ],
          tags: ["AWS", "Wazuh", "Suricata", "ELK Stack", "SOC"]
        },
        {
          id: "exam-cheating",
          icon: "eye",
          hue: 265,
          date: "Jul 2025",
          cats: ["vision", "research"],
          label: "Research",
          title: "Intelligent exam cheating detection",
          summary: "An exam-room cheating detection system based on YOLO (smartphone detection) and surveillance camera image analysis.",
          context: "Research project — HESTIM",
          highlights: [
            "Automatic analysis of images from exam-room surveillance cameras",
            "Smartphone detection with YOLO and identification of suspicious behaviour",
            "Research process: literature review, data collection, experimentation and evaluation",
            "Goal: assist invigilators and strengthen exam fairness"
          ],
          tags: ["Computer vision", "YOLO", "Deep Learning", "Research"]
        }
      ],

      skills: [
        { icon: "brain", title: "Deep Learning & AI", items: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "Neural networks"] },
        { icon: "eye", title: "Computer vision", items: ["OpenCV", "torchvision", "Ultralytics YOLO", "Object detection", "Segmentation"] },
        { icon: "chart", title: "Data analysis", items: ["Pandas", "NumPy", "Scikit-learn"] },
        { icon: "cloud", title: "Tools & Cloud", items: ["Git", "Docker", "Jupyter", "AWS"] },
        { icon: "shield", title: "Networks & Cybersecurity", items: ["SOC", "Wazuh", "Suricata", "ELK Stack", "IS architecture"] },
        { icon: "database", title: "Databases", items: ["SQL", "MongoDB"] }
      ],

      certifications: [
        { title: "Neural Networks & Deep Learning", issuer: "Coursera", icon: "brain" },
        { title: "Data Analysis for ML", issuer: "", icon: "chart" },
        { title: "HCIA Cloud Computing V5.5", issuer: "Huawei", icon: "cloud" },
        { title: "HCIA Security V4.0", issuer: "Huawei", icon: "shield" },
        { title: "Project Management (PMI)", issuer: "Coursera", icon: "listChecks" }
      ],

      interests: [
        { icon: "eye", title: "Computer vision", desc: "Visual detection, segmentation and recognition applied to healthcare, industry and accessibility." },
        { icon: "messageText", title: "Natural language processing", desc: "Automatic understanding, analysis and generation of language." },
        { icon: "network", title: "Deep learning & neural networks", desc: "Deep architectures, representation learning and model generalization." },
        { icon: "sparkles", title: "Generative AI & LLMs", desc: "Large language models, generative models and their reliable, responsible use." },
        { icon: "cpu", title: "Intelligent systems & applied AI", desc: "End-to-end AI systems, from prototype to real-world deployment." }
      ],

      domains: [
        "Healthcare · medical imaging",
        "Industry · quality control",
        "Accessibility · sign language",
        "Education · exam proctoring",
        "Cybersecurity · cloud SOC"
      ],

      subjects: [
        { id: "hello", label: "General enquiry" },
        { id: "collab", label: "Project or collaboration" },
        { id: "job", label: "Job opportunity" },
        { id: "other", label: "Other" }
      ]
    }
  }
};
