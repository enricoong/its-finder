/**
 * ITS Finder — Database
 * ─────────────────────
 * Struttura di ogni record:
 *   id        {number}  identificatore univoco
 *   nome      {string}  nome dell'istituto
 *   regione   {string}  regione italiana
 *   indirizzo {string}  indirizzo
 *   citta     {string}  città sede principale
 *   sito      {string}  URL sito
 *   desc      {string}  breve descrizione (max ~200 caratteri)
 */

const ITS_DATABASE = [
  {
    id: 1,
    nome: "ITS Academy ICT Piemonte",
    regione: "Piemonte",
    indirizzo: "Tecnologie dell'informazione e della comunicazione",
    citta: "Torino",
    sito: "https://www.itspiemonte.it",
    desc: "Percorsi biennali su cybersecurity, sviluppo software e cloud computing. Forte rapporto con le aziende del territorio torinese."
  },
  {
    id: 2,
    nome: "ITS Aerospace & Automotive Lombardia",
    regione: "Lombardia",
    indirizzo: "Mobilità sostenibile",
    citta: "Milano",
    sito: "https://www.itsaerospace.it",
    desc: "Formazione tecnica superiore per i settori aerospaziale, automotive e meccatronica con stage garantito nelle aziende partner."
  },
  {
    id: 3,
    nome: "ITS Academy Manifattura 4.0",
    regione: "Lombardia",
    indirizzo: "Nuove tecnologie per il made in Italy",
    citta: "Bergamo",
    sito: "https://www.itsmanifattura.it",
    desc: "Specializzazione in processi produttivi avanzati, stampa 3D, automazione industriale e Industry 4.0."
  },
  {
    id: 4,
    nome: "ITS MechMation Veneto",
    regione: "Veneto",
    indirizzo: "Mobilità sostenibile",
    citta: "Vicenza",
    sito: "https://www.itsmechmation.it",
    desc: "Tecnici superiori per la progettazione meccanica, la meccatronica e i sistemi di automazione integrata."
  },
  {
    id: 5,
    nome: "ITS Academy Turismo Veneto",
    regione: "Veneto",
    indirizzo: "Turismo, agribusiness e patrimonio culturale",
    citta: "Venezia",
    sito: "https://www.itsturismo.it",
    desc: "Formazione per la gestione di strutture ricettive, turismo esperienziale, enogastronomia e valorizzazione del patrimonio."
  },
  {
    id: 6,
    nome: "ITS Efficienza Energetica Emilia",
    regione: "Emilia-Romagna",
    indirizzo: "Efficienza energetica",
    citta: "Bologna",
    sito: "https://www.itsenergia.it",
    desc: "Tecnici specializzati in energie rinnovabili, building automation, impianti fotovoltaici e risparmio energetico in edilizia."
  },
  {
    id: 7,
    nome: "ITS Digital & Design Toscana",
    regione: "Toscana",
    indirizzo: "Tecnologie dell'informazione e della comunicazione",
    citta: "Firenze",
    sito: "https://www.itsdigital.toscana.it",
    desc: "UX/UI design, sviluppo web avanzato, digital marketing e data analytics per le imprese del Made in Italy."
  },
  {
    id: 8,
    nome: "ITS Agroalimentare Toscana",
    regione: "Toscana",
    indirizzo: "Turismo, agribusiness e patrimonio culturale",
    citta: "Siena",
    sito: "https://www.itsagroalimentare.it",
    desc: "Gestione della filiera agroalimentare, enologia, tecnologie di trasformazione e marketing dei prodotti tipici."
  },
  {
    id: 9,
    nome: "ITS Lazio Biomedico",
    regione: "Lazio",
    indirizzo: "Salute e vita",
    citta: "Roma",
    sito: "https://www.itsbiomedico.it",
    desc: "Tecnici superiori per il settore biomedicale, diagnostica avanzata, dispositivi medici e biotecnologie applicate."
  },
  {
    id: 10,
    nome: "ITS Academy ICT Lazio",
    regione: "Lazio",
    indirizzo: "Tecnologie dell'informazione e della comunicazione",
    citta: "Roma",
    sito: "https://www.itsict.lazio.it",
    desc: "Sviluppo di applicazioni mobile, intelligenza artificiale, cloud e cybersecurity per le imprese della Capitale."
  },
  {
    id: 11,
    nome: "ITS Campania Digital",
    regione: "Campania",
    indirizzo: "Tecnologie dell'informazione e della comunicazione",
    citta: "Napoli",
    sito: "https://www.itsdigital.campania.it",
    desc: "Percorsi in digital innovation, e-commerce e sistemi ERP con forte integrazione con il tessuto industriale campano."
  },
  {
    id: 12,
    nome: "ITS Puglia Moda & Design",
    regione: "Puglia",
    indirizzo: "Nuove tecnologie per il made in Italy",
    citta: "Bari",
    sito: "https://www.itsmoda.puglia.it",
    desc: "Fashion design, artigianato avanzato, produzioni tessili e valorizzazione delle tradizioni manifatturiere del Sud."
  },
  {
    id: 13,
    nome: "ITS Sicilia Turismo Cultura",
    regione: "Sicilia",
    indirizzo: "Turismo, agribusiness e patrimonio culturale",
    citta: "Palermo",
    sito: "https://www.itsturismo.sicilia.it",
    desc: "Gestione di beni culturali, archeologia applicata, musei digitali e turismo sostenibile nel Mediterraneo."
  },
  {
    id: 14,
    nome: "ITS Friuli Logistica",
    regione: "Friuli-Venezia Giulia",
    indirizzo: "Mobilità sostenibile",
    citta: "Trieste",
    sito: "https://www.itslogistica.fvg.it",
    desc: "Logistica portuale, supply chain management, trasporti intermodali e commercio internazionale nell'area adriatica."
  },
  {
    id: 15,
    nome: "ITS Trentino Energia Verde",
    regione: "Trentino-Alto Adige",
    indirizzo: "Efficienza energetica",
    citta: "Trento",
    sito: "https://www.itsenergiaverde.it",
    desc: "Impianti idroelettrici, efficienza negli edifici alpini, fonti rinnovabili e gestione delle reti energetiche locali."
  }
];