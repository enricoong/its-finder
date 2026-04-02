/**
 * ITS Finder — Database
 * ────────────────────────────────────────────────────────────
 * Struttura di ogni record:
 *
 *   id     {number}   identificatore univoco dell'istituto
 *   nome   {string}   nome ufficiale dell'istituto
 *   sito   {string}   URL sito ufficiale
 *   desc   {string}   breve descrizione (~200 caratteri)
 *   sedi   {Sede[]}   una o più sedi fisiche
 *
 * Struttura di ogni Sede:
 *   citta      {string}        città della sede
 *   regione    {string}        regione italiana
 *   indirizzi  {Indirizzo[]}   corsi attivi in quella sede
 *
 * Struttura di ogni Indirizzo:
 *   nome  {string}    nome ufficiale del corso (libero, anche diverso
 *                     da ITS a ITS per corsi simili)
 *   tag   {string[]}  da scegliere in tags.js — garantiscono che il
 *                     filtro del dropdown funzioni correttamente.
 *                     Un corso può avere più tag.
 */

const ITS_DATABASE = [

  // ITS DIGITAL ACADEMY MARIO VOLPATO
  {
    id: 1,
    nome: "ITS Digital Academy Mario Volpato",
    sito: "https://itsdigitalacademy.com/",
    desc: "ITS post-diploma per le Tecnologie dell'Informazione e della Comunicazione, con corsi su AI, cybersecurity, sviluppo web, game dev, comunicazione digitale e AR/VR.",
    sedi: [
      {
        citta: "Noventa Padovana",
        regione: "Veneto",
        indirizzi: [
          { nome: "Digital Marketing & Innovation Specialist", tag: ["Marketing Digitale", "Social Media"] },
          { nome: "AR/VR e Game Developer", tag: ["AR/VR & Metaverso", "Sviluppo Videogiochi"] }
        ]
      },
      {
        citta: "Cittadella",
        regione: "Veneto",
        indirizzi: [
          { nome: "Cross Media Communication Specialist", tag: ["Comunicazione", "Produzione Video & Videomaker"] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: ["Intelligenza Artificiale", "Data Analytics"] },
          { nome: "Artificial Intelligence Developer and Data Analyst - English Ed.", tag: ["Intelligenza Artificiale", "Data Analytics"] },
          { nome: "Cyber Security Specialist", tag: ["Cybersecurity", "Reti & Infrastrutture"] }
        ]
      },
      {
        citta: "Venezia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Cross Media Communication Specialist", tag: ["Comunicazione", "Produzione Video & Videomaker"] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Web Developer Full Stack", tag: ["Sviluppo Software"] }
        ]
      },
      {
        citta: "Marghera",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: ["Intelligenza Artificiale", "Data Analytics"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: ["Intelligenza Artificiale", "Data Analytics"] },
          { nome: "Cyber Security Specialist", tag: ["Cybersecurity", "Reti & Infrastrutture"] }
        ]
      },
      {
        citta: "Valdagno",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: ["Intelligenza Artificiale", "Data Analytics"] }
        ]
      },
      {
        citta: "San Donà di Piave",
        regione: "Veneto",
        indirizzi: [
          { nome: "Web Developer Full Stack", tag: ["Sviluppo Software"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: ["Intelligenza Artificiale", "Data Analytics"] },
          { nome: "Motion Graphics & Media Designer", tag: ["Design & UX", "Produzione Video & Videomaker"] },
          { nome: "Cross Media Communication Specialist", tag: ["Comunicazione", "Produzione Video & Videomaker"] },
          { nome: "Cyber Security & System Administrator Specialist", tag: ["Cybersecurity", "Reti & Infrastrutture"] },
          { nome: "Digital AI Sales & Technology Specialist", tag: ["Marketing Digitale", "Intelligenza Artificiale", "E-commerce"] }
        ]
      }
    ]
  },

  // ITS FASHION ACADEMY COSMO
  {
    id: 2,
    nome: "ITS Fashion Academy Cosmo",
    sito: "https://www.itscosmo.it/",
    desc: "ITS dedicato alla moda, al lusso e al sistema calzatura-abbigliamento-oreficeria, con stage in Italia e in Europa tramite Erasmus+.",
    sedi: [
      {
        citta: "Longarone",
        regione: "Veneto",
        indirizzi: [
          { nome: "Eyewear Product Manager", tag: ["Fashion Management", "Made in Italy"] }
        ]
      },
      {
        citta: "Arzignano",
        regione: "Veneto",
        indirizzi: [
          { nome: "Green Leather Manager", tag: ["Tessile & Materiali", "Sostenibilità Ambientale"] }
        ]
      },
      {
        citta: "Bassano del Grappa",
        regione: "Veneto",
        indirizzi: [
          { nome: "Sportswear Innovation Manager (Wearable & Digital Tech)", tag: ["Sportswear", "Fashion Management"] }
        ]
      },
      {
        citta: "Mestre",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Store Coordinator", tag: ["Fashion Management", "E-commerce"] }
        ]
      },
      {
        citta: "Montebelluna",
        regione: "Veneto",
        indirizzi: [
          { nome: "Sport System Shoes Specialist", tag: ["Sportswear", "Tessile & Materiali"] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Designer (Generative AI)", tag: ["Fashion Design", "Intelligenza Artificiale"] },
          { nome: "Pattern Maker and Prototyper [3D and Applied AI]", tag: ["Fashion Design", "Manifattura Avanzata"] },
          { nome: "Knitwear Designer [3D and Applied AI]", tag: ["Fashion Design", "Tessile & Materiali"] },
          { nome: "Videomaker for Web, TV and Cinema", tag: ["Produzione Video & Videomaker"] },
          { nome: "Fashion Shoes Coordinator", tag: ["Fashion Management", "Made in Italy"] },
          { nome: "Fashion E-commerce and Marketplace Manager (Applied AI)", tag: ["E-commerce", "Marketing Digitale"] },
          { nome: "Digital Fashion Marketing and Communication Manager (Gen. AI)", tag: ["Marketing Digitale", "Comunicazione"] },
          { nome: "Fashion Coordinator [3D, Applied AI e Advanced Manufacturing]", tag: ["Fashion Management", "Fashion Design"] },
          { nome: "Digital Marketing e Social Communication", tag: ["Marketing Digitale", "Social Media"] },
          { nome: "Marketing & Retail Management for Fashion", tag: ["Fashion Management", "Marketing Digitale"] },
          { nome: "Fashion Store Coordinator", tag: ["Fashion Management"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Videomaker for Web, TV and Cinema", tag: ["Produzione Video & Videomaker"] }
        ]
      },
      {
        citta: "Valdagno",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Sustainability Manager", tag: ["Sostenibilità Ambientale", "Fashion Management"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Product Manager", tag: ["Fashion Management", "Made in Italy"] },
          { nome: "Fashion Coordinator (3D, Applied AI e Advanced Manufacturing)", tag: ["Fashion Design", "Fashion Management"] },
          { nome: "Fashion Retail Management and Innovation (Applied AI)", tag: ["Fashion Management", "E-commerce"] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Digital Jewellery Design", tag: ["Fashion Design", "Made in Italy"] },
          { nome: "Fashion Sustainability Manager", tag: ["Sostenibilità Ambientale", "Fashion Management"] },
          { nome: "Fashion Jewellery Coordinator", tag: ["Fashion Management", "Made in Italy"] }
        ]
      },
      {
        citta: "Busto Arsizio",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Women's Wear", tag: ["Fashion Design", "Tessile & Materiali"] },
          { nome: "Textile Innovation & New Materials", tag: ["Tessile & Materiali", "Manifattura Avanzata"] }
        ]
      },
      {
        citta: "Milano",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Fashion Product and Merchandising Management", tag: ["Fashion Management", "Made in Italy"] },
          { nome: "UX/UI Design and Digital Innovation", tag: ["Design & UX"] },
          { nome: "Expanded Photography and Visual Cultures", tag: ["Produzione Video & Videomaker", "Comunicazione"] },
          { nome: "Digital Video Making for New Media and Advertising", tag: ["Produzione Video & Videomaker", "Marketing Digitale"] },
          { nome: "Haute Couture Collection", tag: ["Fashion Design", "Lusso & Lifestyle"] },
          { nome: "Digital Communication & Fashion Styling", tag: ["Comunicazione", "Fashion Design"] },
          { nome: "Fashion Design Collection", tag: ["Fashion Design"] },
          { nome: "Designer del Costume per il Teatro e lo Spettacolo", tag: ["Fashion Design", "Spettacolo & Performing Arts"] },
          { nome: "Social Media Communication and Digital PR", tag: ["Social Media", "Comunicazione"] }
        ]
      }
    ]
  },

  // ITS ACADEMY MECCATRONICO VENETO
  {
    id: 3,
    nome: "ITS Academy Meccatronico Veneto",
    sito: "https://www.itsmeccatronico.it/",
    desc: "Punto di riferimento per la formazione tecnica in meccatronica, automazione industriale e informatica per l'industria 4.0 nel tessuto manifatturiero veneto.",
    sedi: [
      {
        citta: "Belluno",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] },
          { nome: "Tecnico superiore per l'innovazione di processi e prodotti mecc.", tag: ["Meccatronica & Automazione", "Manifattura Avanzata"] }
        ]
      },
      {
        citta: "Rovigo",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'innovazione di processi e prodotti mecc.", tag: ["Meccatronica & Automazione", "Manifattura Avanzata"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'innovazione di processi e prodotti mecc.", tag: ["Meccatronica & Automazione", "Manifattura Avanzata"] }
        ]
      },
      {
        citta: "Este",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Montebelluna",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Conegliano",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Mestre",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Portogruaro",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] },
          { nome: "Tecnico superiore per l'informatica nella digital factory", tag: ["Sviluppo Software", "Manifattura Avanzata", "IoT & Sistemi Embedded"] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] },
          { nome: "Tecnico superiore per l'informatica nella digital factory", tag: ["Sviluppo Software", "Manifattura Avanzata", "IoT & Sistemi Embedded"] },
          { nome: "Tecnico superiore per il design e le tecnologie dei materiali", tag: ["Manifattura Avanzata", "Stampa 3D & Prototipazione"] }
        ]
      },
      {
        citta: "Montecchio Maggiore",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Schio",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] },
          { nome: "Tecnico superiore per l'innovazione di processi e prodotti mecc.", tag: ["Meccatronica & Automazione", "Manifattura Avanzata"] }
        ]
      },
      {
        citta: "Thiene",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'informatica nella digital factory", tag: ["Sviluppo Software", "Manifattura Avanzata", "IoT & Sistemi Embedded"] }
        ]
      },
      {
        citta: "Bassano del Grappa",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico superiore per l'automazione ed i sistemi meccatronici", tag: ["Meccatronica & Automazione"] }
        ]
      }
    ]
  },

  // ITS ACADEMY TURISMO VENETO
  {
    id: 4,
    nome: "ITS Academy Turismo Veneto",
    sito: "https://www.itsturismo.it",
    desc: "Alta formazione nel turismo con 7 percorsi su ospitalità, food & wine, eventi, marketing territoriale e patrimonio culturale, in 9 sedi nel Veneto.",
    sedi: [
      {
        citta: "Belluno",
        regione: "Veneto",
        indirizzi: [
          { nome: "Dolomiti Tourism Marketing & Communication", tag: ["Turismo", "Marketing Digitale", "Turismo Culturale"] }
        ]
      },
      {
        citta: "Abano",
        regione: "Veneto",
        indirizzi: [
          { nome: "Spa & Wellness Hospitality Marketing", tag: ["Hospitality & Hotel Management", "Turismo"] }
        ]
      },
      {
        citta: "Villorba",
        regione: "Veneto",
        indirizzi: [
          { nome: "Food & Wine Tourism Marketing & Communication", tag: ["Food & Wine", "Turismo", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Jesolo",
        regione: "Veneto",
        indirizzi: [
          { nome: "Hospitality Marketing & Communication", tag: ["Hospitality & Hotel Management", "Marketing Digitale"] },
          { nome: "Tourism Innovation Digital 4.0", tag: ["Turismo", "Intelligenza Artificiale", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Chioggia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Hospitality Marketing & Communication", tag: ["Hospitality & Hotel Management", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Venezia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Art & Culture A.I. Marketing & Communication", tag: ["Turismo Culturale", "Intelligenza Artificiale", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Bardolino",
        regione: "Veneto",
        indirizzi: [
          { nome: "Hospitality Marketing & Communication", tag: ["Hospitality & Hotel Management", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Food & Wine Tourism Marketing & Communication", tag: ["Food & Wine", "Turismo", "Marketing Digitale"] },
          { nome: "Event & Digital Management", tag: ["Event Management", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Asiago",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tourism Destination Marketing & Communication", tag: ["Turismo", "Marketing Digitale"] }
        ]
      }
    ]
  },

  // ITS ACADEMY LAST
  {
    id: 5,
    nome: "ITS Academy LAST",
    sito: "https://www.itslogistica.it/",
    desc: "ITS leader in logistica, mobilità sostenibile e automotive, con sede storica all'Interporto Quadrante Europa di Verona. Tasso di occupazione del 95%.",
    sedi: [
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Superiore International Logistics Management", tag: ["Logistica & Supply Chain", "Internazionalizzazione"] },
          { nome: "Tecnico Superiore International Logistics Management - LIDL", tag: ["Logistica & Supply Chain"] },
          { nome: "Tecnico Superiore Automotive Service & Sales Management", tag: ["Automotive", "Management"] },
          { nome: "Tecnico Superiore Esperto dei Veicoli Endotermici, Ibridi ed El.", tag: ["Automotive", "Sostenibilità Ambientale"] },
          { nome: "Tecnico Superiore Esperto nei Processi di Internazionalizzazione", tag: ["Internazionalizzazione", "Management"] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Superiore International Logistics Management", tag: ["Logistica & Supply Chain", "Internazionalizzazione"] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Superiore International Logistics Management", tag: ["Logistica & Supply Chain", "Internazionalizzazione"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Superiore Esperto dei Veicoli Endotermici, Ibridi ed El.", tag: ["Automotive", "Sostenibilità Ambientale"] }
        ]
      },
      {
        citta: "Thiene",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Superiore Esperto nei Processi di Internazionalizzazione", tag: ["Internazionalizzazione", "Management"] }
        ]
      }
    ]
  },

  // ITS ACADEMY AGROALIMENTARE VENETO
  {
    id: 6,
    nome: "ITS Academy Agroalimentare Veneto",
    sito: "https://itsagroalimentareveneto.it/",
    desc: "Unico ITS agroalimentare del Veneto, con sede principale a Conegliano (TV). Forma tecnici per filiere agroalimentari, viticoltura, qualità e sostenibilità.",
    sedi: [
      {
        citta: "Conegliano",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico specializzato per il processo produttivo e il marketing delle filiere agrifood", tag: ["Agroalimentare", "Marketing Digitale"] },
          { nome: "Tecnico specializzato Agritech per la viticoltura sostenibile e di precisione", tag: ["Agricoltura di Precisione", "Enologia"] },
          { nome: "Tecnico specializzato nei Distillati & Mixology", tag: ["Enologia", "Food & Wine", "Agroalimentare"] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico specializzato nell'innovazione e la sostenibilità delle filiere agroalimentari", tag: ["Agroalimentare", "Sostenibilità Ambientale"] }
        ]
      },
      {
        citta: "Buttapietra",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico specializzato Agritech per le filiere agroalimentari innovative e biologiche", tag: ["Agricoltura di Precisione", "Agroalimentare", "Sostenibilità Ambientale"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Quality Control Specialist", tag: ["Qualità & Quality Control", "Agroalimentare"] }
        ]
      },
      {
        citta: "Bassano del Grappa",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico specializzato per lo sviluppo delle piccole produzioni locali", tag: ["Agroalimentare", "Made in Italy"] },
          { nome: "Green & Garden Design Specialist", tag: ["Sostenibilità Ambientale", "Agroalimentare"] }
        ]
      }
    ]
  },

  // ITS MARCO POLO ACADEMY
  {
    id: 7,
    nome: "ITS Marco Polo Academy",
    sito: "https://www.itsmarcopolo.it/",
    desc: "Nasce dal Porto di Venezia. Forma tecnici in logistica portuale, ferroviaria e nautica, con corsi per Ufficiale di Coperta e Ufficiale di Macchina.",
    sedi: [
      {
        citta: "Venezia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Logistics Manager in ambito portuale ed aeroportuale", tag: ["Logistica & Supply Chain", "Mare & Nautica"] },
          { nome: "Macchinista e preparatore treni", tag: ["Logistica & Supply Chain"] },
          { nome: "Produzione e manutenzione dei mezzi di trasporto", tag: ["Meccatronica & Automazione", "Logistica & Supply Chain"] },
          { nome: "Ufficiale di Macchina", tag: ["Mare & Nautica"] },
          { nome: "Ufficiale di Coperta", tag: ["Mare & Nautica"] },
          { nome: "Art Moving and Set Up Manager", tag: ["Beni Culturali", "Logistica & Supply Chain"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Logistic Manager", tag: ["Logistica & Supply Chain"] },
          { nome: "Cultural Heritage Logistics and Digital Transformation", tag: ["Beni Culturali", "Logistica & Supply Chain"] }
        ]
      },
      {
        citta: "Rovigo",
        regione: "Veneto",
        indirizzi: [
          { nome: "Logistic Manager", tag: ["Logistica & Supply Chain"] }
        ]
      },
      {
        citta: "Portogruaro",
        regione: "Veneto",
        indirizzi: [
          { nome: "Logistic Manager", tag: ["Logistica & Supply Chain"] }
        ]
      },
      {
        citta: "Mestre",
        regione: "Veneto",
        indirizzi: [
          { nome: "Logistics Manager in ambito portuale ed aeroportuale", tag: ["Logistica & Supply Chain", "Mare & Nautica"] }
        ]
      }
    ]
  },

  // ITS RED ACADEMY
  {
    id: 8,
    nome: "ITS RED Academy",
    sito: "https://itsred.it/",
    desc: "ITS specializzato in efficienza energetica, edilizia sostenibile, bioedilizia e design per l'arredo, con sedi in Veneto e Lombardia.",
    sedi: [
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Building Manager", tag: ["Edilizia Sostenibile", "Efficienza Energetica"] },
          { nome: "Green Manager", tag: ["Sostenibilità Ambientale", "Efficienza Energetica"] },
          { nome: "Energy Manager 4.0", tag: ["Efficienza Energetica", "Energie Rinnovabili"] },
          { nome: "Energy Specialist 4.0", tag: ["Efficienza Energetica", "Energie Rinnovabili"] },
          { nome: "Design Manager Sistema Arredo", tag: ["Design & UX", "Made in Italy", "Management"] },
          { nome: "Public Administrator Manager", tag: ["Management"] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Construction Manager", tag: ["Edilizia Sostenibile", "Efficienza Energetica"] },
          { nome: "Design Manager Sistema Arredo", tag: ["Design & UX", "Made in Italy", "Management"] },
          { nome: "Energy Manager 4.0", tag: ["Efficienza Energetica", "Energie Rinnovabili"] },
          { nome: "Marketing Manager Business Support Manager", tag: ["Marketing Digitale", "Management"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Building Manager", tag: ["Edilizia Sostenibile", "Efficienza Energetica"] },
          { nome: "Energy Manager 4.0", tag: ["Efficienza Energetica", "Energie Rinnovabili"] },
          { nome: "Design Manager Sistema Arredo", tag: ["Design & UX", "Made in Italy", "Management"] },
          { nome: "Energy Specialist 4.0", tag: ["Efficienza Energetica", "Energie Rinnovabili"] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Marketing Manager Sistema Arredo", tag: ["Marketing Digitale", "Made in Italy", "Management"] }
        ]
      }
    ]
  }

];