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
    nome: "ITS Digital Academy Mario Volpato",
    sito: "https://itsdigitalacademy.com/",
    desc: "ITS Digital Academy Mario Volpato è un Istituto Tecnico Superiore post diploma per le Tecnologie dell'Informazione e della Comunicazione.",
    sedi: [
      {
        citta: "Noventa Padovana",
        regione: "Veneto",
        indirizzi: [
          { nome: "Digital Marketing & Innovation Specialist", tag: [] },
          { nome: "AR/VR e Game Developer", tag: [] },
          { nome: "Artificial Intelligence Developer and Data Analyst - English Edition", tag: [] }
        ]
      },
      {
        citta: "Cittadella",
        regione: "Veneto",
        indirizzi: [
          { nome: "Cross Media Communication Specialist", tag: [] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: [] },
          { nome: "Motion Graphic & Media Designer", tag: [] },
          { nome: "Cross Media Communication Specialist", tag: [] },
          { nome: "Cyber Security & System Administrator Specialist", tag: [] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: [] },
          { nome: "Cyber Security Specialist", tag: [] }
        ]
      },
      {
        citta: "Venezia",
        regione: "Veneto",
        indirizzi: [
          { nome: "Cross Media Communication Specialist", tag: [] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Web Developer Full Stack", tag: [] }
        ]
      },
      {
        citta: "Marghera",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: [] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Cyber Security Specialist", tag: [] }
        ]
      },
      {
        citta: "Valdagno",
        regione: "Veneto",
        indirizzi: [
          { nome: "Artificial Intelligence Developer and Data Analyst", tag: [] }
        ]
      },
      {
        citta: "San Donà di Piave",
        regione: "Veneto",
        indirizzi: [
          { nome: "Web Developer Full Stack", tag: [] }
        ]
      }
    ]
  },
  {
    id: 2,
    nome: "ITS Fashion Academy Cosmo",
    sito: "https://www.itscosmo.it/",
    desc: "ITS Fashion Academy Cosmo ti offre la possibilità di partecipare a stage in Italia e in Europa, grazie al programma ERASMUS!",
    sedi: [
      {
        citta: "Arzignano",
        regione: "Veneto",
        indirizzi: [
          { nome: "Green Leather Manager ", tag: [] }
        ]
      },
      {
        citta: "Bassano del Grappa",
        regione: "Veneto",
        indirizzi: [
          { nome: "Sportswear iinovation manager (Wearable & Digital Tech)", tag: [] }
        ]
      },
      {
        citta: "Mestre",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Store Coordinator", tag: [] }
        ]
      },
      {
        citta: "Montebelluna",
        regione: "Veneto",
        indirizzi: [
          { nome: "Sport System Shoes Specialist", tag: [] }
        ]
      },
      {
        citta: "Padova",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion Designer (Generative AI)", tag: [] },
          { nome: "Pattern maker and prototyper [3D and Applied AI]", tag: [] },
          { nome: "Knitwear designer [3D and Applied AI]", tag: [] },
          { nome: "Videomaker for web, TV and cinema", tag: [] },
          { nome: "Fashion shoes coordinator", tag: [] },
          { nome: "Fashion e-commerce and marketplace manager (Vibe coding and applied AI)", tag: [] },
          { nome: "Digital fashion marketing and communication manager (Generative AI)", tag: [] },
          { nome: "Fasion coordinator [3D, Applied AI e Advanced Manufacturing Solutions]", tag: [] }
        ]
      },
      {
        citta: "Treviso",
        regione: "Veneto",
        indirizzi: [
          { nome: "Videomaker for web, TV and cinema", tag: [] }
        ]
      },
      {
        citta: "Verona",
        regione: "Veneto",
        indirizzi: [
          { nome: "Fashion retail management and innovation (Applied AI)", tag: [] },
          { nome: "Fashion coordinator (3D, Applied AI e Advanced Manufacturing Solutions)", tag: [] }
        ]
      },
      {
        citta: "Vicenza",
        regione: "Veneto",
        indirizzi: [
          { nome: "Digital jewellery design", tag: [] },
          { nome: "Fashion sustainability manager", tag: [] },
          { nome: "Fashion jewellery coordinator", tag: [] }
        ]
      },
      {
        citta: "Busto Arsizio",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Women's wear", tag: [] },
          { nome: "Textile innovation & new materials", tag: [] }
        ]
      },
      {
        citta: "Milano",
        regione: "Lombardia",
        indirizzi: [
          { nome: "Fashion product and merchandising management", tag: [] },
          { nome: "UX/UI design and digital innovation", tag: [] },
          { nome: "Expanded photography and visual cultures", tag: [] },
          { nome: "Digital video making for new media and advertising", tag: [] },
          { nome: "Haute couture collection", tag: [] },
          { nome: "Digital communication & fashion styling", tag: [] },
          { nome: "Fashion design collection", tag: [] },
          { nome: "Designer del costume per il teatro e lo spettacolo", tag: [] },
          { nome: "Social media communication and digital PR", tag: [] }
        ]
      }
    ]
  }
];