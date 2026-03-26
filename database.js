/**
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
  {
    id: 1,
    nome: "ITS Academy ICT Piemonte",
    sito: "https://www.itspiemonte.it",
    desc: "Percorsi biennali su cybersecurity, sviluppo software e cloud. Forte rapporto con le aziende del territorio piemontese.",
    sedi: [
      {
        citta: "Torino",
        regione: "Piemonte",
        indirizzi: [
          { nome: "Sviluppatore Software Full Stack",   tag: ["Sviluppo Software", "Cloud & DevOps"] },
          { nome: "Cybersecurity Specialist",           tag: ["Cybersecurity", "Reti & Infrastrutture"] },
          { nome: "AI & Data Developer",                tag: ["Intelligenza Artificiale", "Data Analytics"] }
        ]
      }
    ]
  },
  {
    id: 2,
    nome: "ITS Aerospace & Automotive Lombardia",
    sito: "https://www.itsaerospace.it",
    desc: "Formazione tecnica per aerospazio, automotive e meccatronica con stage garantito nelle aziende partner lombarde.",
    sedi: [
      {
        citta: "Milano",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Tecnico Aerospaziale",               tag: ["Aerospazio", "Manifattura Avanzata"] },
          { nome: "Automotive Product Development",     tag: ["Automotive", "Meccatronica & Automazione"] }
        ]
      },
      {
        citta: "Varese",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Tecnico Sistemi Meccatronici",       tag: ["Meccatronica & Automazione"] },
          { nome: "Quality Control Specialist",         tag: ["Qualità & Quality Control", "Manifattura Avanzata"] }
        ]
      }
    ]
  },
  {
    id: 3,
    nome: "ITS Academy Manifattura 4.0",
    sito: "https://www.itsmanifattura.it",
    desc: "Specializzazione in processi produttivi avanzati, stampa 3D, automazione industriale e Industry 4.0.",
    sedi: [
      {
        citta: "Bergamo",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Tecnico Manifattura Digitale",       tag: ["Manifattura Avanzata", "IoT & Sistemi Embedded"] },
          { nome: "Additive Manufacturing Specialist",  tag: ["Stampa 3D & Prototipazione"] }
        ]
      },
      {
        citta: "Brescia",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Tecnico Automazione Industriale",    tag: ["Meccatronica & Automazione"] },
          { nome: "Energy Manager Industriale",         tag: ["Efficienza Energetica", "Sostenibilità Ambientale"] }
        ]
      }
    ]
  },
  {
    id: 4,
    nome: "ITS MechMation Veneto",
    sito: "https://www.itsmechmation.it",
    desc: "Tecnici superiori per la progettazione meccanica, la meccatronica e i sistemi di automazione integrata.",
    sedi: [
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Tecnico Meccatronico",               tag: ["Meccatronica & Automazione"] },
          { nome: "Robotics & Automation Developer",    tag: ["Meccatronica & Automazione", "IoT & Sistemi Embedded"] }
        ]
      }
    ]
  },
  {
    id: 5,
    nome: "ITS Academy Turismo Veneto",
    sito: "https://www.itsturismo.it",
    desc: "Formazione per la gestione di strutture ricettive, turismo esperienziale, enogastronomia e valorizzazione del patrimonio.",
    sedi: [
      {
        citta: "Venezia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Hotel & Hospitality Manager",        tag: ["Hospitality & Hotel Management", "Turismo"] },
          { nome: "Food & Wine Tourism Marketing",      tag: ["Food & Wine", "Marketing Digitale", "Turismo"] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Event & Tourism Manager",            tag: ["Event Management", "Turismo Culturale"] },
          { nome: "Patrimonio Digitale e Turismo",      tag: ["Musei & Patrimonio Digitale", "Turismo Culturale"] }
        ]
      }
    ]
  },
  {
    id: 6,
    nome: "ITS Efficienza Energetica Emilia",
    sito: "https://www.itsenergia.it",
    desc: "Tecnici specializzati in energie rinnovabili, building automation e risparmio energetico in edilizia.",
    sedi: [
      {
        citta: "Bologna",
        regione: "Emilia-Romagna",
        indirizzi: [
          { nome: "Tecnico Energie Rinnovabili",        tag: ["Energie Rinnovabili", "Efficienza Energetica"] },
          { nome: "Building Automation Specialist",     tag: ["Efficienza Energetica", "Edilizia Sostenibile"] }
        ]
      }
    ]
  },
  {
    id: 7,
    nome: "ITS Digital & Design Toscana",
    sito: "https://www.itsdigital.toscana.it",
    desc: "UX/UI design, sviluppo web avanzato, digital marketing e data analytics per le imprese del Made in Italy.",
    sedi: [
      {
        citta: "Firenze",
        regione: "Toscana",
        indirizzi: [
          { nome: "UX/UI Designer",                    tag: ["Design & UX"] },
          { nome: "Digital Marketing Specialist",       tag: ["Marketing Digitale", "Social Media", "E-commerce"] },
          { nome: "Data Analyst",                       tag: ["Data Analytics", "Intelligenza Artificiale"] }
        ]
      }
    ]
  },
  {
    id: 8,
    nome: "ITS Moda e Made in Italy Toscana",
    sito: "https://www.itsmoda.toscana.it",
    desc: "Formazione per la filiera moda, lusso e manifattura italiana con forte orientamento al mercato internazionale.",
    sedi: [
      {
        citta: "Firenze",
        regione: "Toscana",
        indirizzi: [
          { nome: "Fashion Product Manager",            tag: ["Fashion Management", "Made in Italy"] },
          { nome: "Sportswear Product Manager",         tag: ["Sportswear", "Fashion Management"] },
          { nome: "Luxury Brand Manager",               tag: ["Lusso & Lifestyle", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Prato",
        regione: "Toscana",
        indirizzi: [
          { nome: "Tecnico Tessile Avanzato",           tag: ["Tessile & Materiali", "Made in Italy"] },
          { nome: "Fashion Communication Manager",      tag: ["Comunicazione", "Fashion Design"] }
        ]
      }
    ]
  },
  {
    id: 9,
    nome: "ITS Agroalimentare Toscana",
    sito: "https://www.itsagroalimentare.it",
    desc: "Gestione della filiera agroalimentare, enologia, tecnologie di trasformazione e marketing dei prodotti tipici.",
    sedi: [
      {
        citta: "Siena",
        regione: "Toscana",
        indirizzi: [
          { nome: "Tecnico Enologico",                  tag: ["Enologia", "Agroalimentare"] },
          { nome: "Agri-food Marketing Specialist",     tag: ["Agroalimentare", "Marketing Digitale"] }
        ]
      },
      {
        citta: "Grosseto",
        regione: "Toscana",
        indirizzi: [
          { nome: "Tecnico Agricoltura di Precisione",  tag: ["Agricoltura di Precisione"] },
          { nome: "Food Quality Specialist",            tag: ["Agroalimentare", "Qualità & Quality Control"] }
        ]
      }
    ]
  },
  {
    id: 10,
    nome: "ITS Lazio Biomedico",
    sito: "https://www.itsbiomedico.it",
    desc: "Tecnici superiori per il settore biomedicale, diagnostica avanzata, dispositivi medici e biotecnologie applicate.",
    sedi: [
      {
        citta: "Roma",
        regione: "Lazio",
        indirizzi: [
          { nome: "Tecnico Dispositivi Medici",         tag: ["Biomedicale"] },
          { nome: "Biotech Lab Specialist",             tag: ["Biotecnologie", "Farmaceutica"] }
        ]
      }
    ]
  },
  {
    id: 11,
    nome: "ITS Academy ICT Lazio",
    sito: "https://www.itsict.lazio.it",
    desc: "Sviluppo di applicazioni mobile, intelligenza artificiale, cloud e cybersecurity per le imprese della Capitale.",
    sedi: [
      {
        citta: "Roma",
        regione: "Lazio",
        indirizzi: [
          { nome: "Mobile App Developer",               tag: ["Sviluppo Software"] },
          { nome: "AI & Prompt Engineering Specialist", tag: ["Intelligenza Artificiale", "Prompt Engineering"] },
          { nome: "AR/VR Developer",                    tag: ["AR/VR & Metaverso"] }
        ]
      },
      {
        citta: "Latina",
        regione: "Lazio",
        indirizzi: [
          { nome: "Cloud Infrastructure Specialist",    tag: ["Cloud & DevOps", "Reti & Infrastrutture"] },
          { nome: "Tecnico Biomedicale Digitale",       tag: ["Biomedicale", "IoT & Sistemi Embedded"] }
        ]
      }
    ]
  },
  {
    id: 12,
    nome: "ITS Campania Digital",
    sito: "https://www.itsdigital.campania.it",
    desc: "Percorsi in digital innovation, e-commerce e sistemi ERP con forte integrazione con il tessuto industriale campano.",
    sedi: [
      {
        citta: "Napoli",
        regione: "Campania",
        indirizzi: [
          { nome: "E-commerce & Digital Sales Manager", tag: ["E-commerce", "Marketing Digitale"] },
          { nome: "Videomaker & Content Creator",       tag: ["Produzione Video & Videomaker", "Social Media"] },
          { nome: "Game Developer",                     tag: ["Sviluppo Videogiochi"] }
        ]
      }
    ]
  },
  {
    id: 13,
    nome: "ITS Puglia Moda & Design",
    sito: "https://www.itsmoda.puglia.it",
    desc: "Fashion design, artigianato avanzato e valorizzazione delle tradizioni manifatturiere del Sud.",
    sedi: [
      {
        citta: "Bari",
        regione: "Puglia",
        indirizzi: [
          { nome: "Fashion Designer",                   tag: ["Fashion Design", "Made in Italy"] },
          { nome: "Artigianato Digitale Avanzato",      tag: ["Made in Italy", "Manifattura Avanzata"] }
        ]
      }
    ]
  },
  {
    id: 14,
    nome: "ITS Sicilia Turismo Cultura",
    sito: "https://www.itsturismo.sicilia.it",
    desc: "Gestione di beni culturali, archeologia applicata, musei digitali e turismo sostenibile nel Mediterraneo.",
    sedi: [
      {
        citta: "Palermo",
        regione: "Sicilia",
        indirizzi: [
          { nome: "Tecnico Beni Culturali Digitali",    tag: ["Musei & Patrimonio Digitale", "Beni Culturali"] },
          { nome: "Tourism Communication Manager",      tag: ["Comunicazione", "Turismo Culturale"] }
        ]
      },
      {
        citta: "Catania",
        regione: "Sicilia",
        indirizzi: [
          { nome: "Tecnico Turismo Esperienziale",      tag: ["Turismo", "Event Management"] }
        ]
      }
    ]
  },
  {
    id: 15,
    nome: "ITS Nautica e Logistica Liguria",
    sito: "https://www.itsnautica.liguria.it",
    desc: "Formazione tecnica superiore per la nautica, la logistica portuale e il commercio internazionale marittimo.",
    sedi: [
      {
        citta: "Genova",
        regione: "Liguria",
        indirizzi: [
          { nome: "Ufficiale di Coperta",               tag: ["Mare & Nautica"] },
          { nome: "Port Logistics Manager",             tag: ["Logistica & Supply Chain", "Mare & Nautica"] },
          { nome: "International Trade Specialist",     tag: ["Internazionalizzazione", "Logistica & Supply Chain"] }
        ]
      }
    ]
  },
  {
    id: 16,
    nome: "ITS Trentino Energia Verde",
    sito: "https://www.itsenergiaverde.it",
    desc: "Impianti idroelettrici, efficienza negli edifici alpini, fonti rinnovabili e gestione delle reti energetiche locali.",
    sedi: [
      {
        citta: "Trento",
        regione: "Trentino-Alto Adige",
        indirizzi: [
          { nome: "Tecnico Impianti Rinnovabili",       tag: ["Energie Rinnovabili", "Efficienza Energetica"] },
          { nome: "Green Building Specialist",          tag: ["Edilizia Sostenibile", "Efficienza Energetica"] }
        ]
      },
      {
        citta: "Bolzano",
        regione: "Trentino-Alto Adige",
        indirizzi: [
          { nome: "Smart Grid & Energy Manager",        tag: ["Energie Rinnovabili", "IoT & Sistemi Embedded"] },
          { nome: "Tecnico Manifattura Sostenibile",    tag: ["Manifattura Avanzata", "Sostenibilità Ambientale"] }
        ]
      }
    ]
  }
];