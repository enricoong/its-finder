/**
 * Dipende da: database.js (deve essere caricato prima)
 */

(function () {
  'use strict';

  /* ── Helpers DOM ──────────────────────────────────────────── */
  const $  = id => document.getElementById(id);
  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') node.className = v;
      else if (k === 'html') node.innerHTML = v;
      else node.setAttribute(k, v);
    });
    children.forEach(c => c && node.appendChild(
      typeof c === 'string' ? document.createTextNode(c) : c
    ));
    return node;
  };

  /* ── Icons (nessuna libreria esterna) ─────────────────────── */
  const ICON = {
    pin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    cal: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    ext: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
  };

  /* ── Popola i dropdown dai dati ───────────────────────────── */
  function populateSelects() {
    const regioni   = [...new Set(ITS_DATABASE.map(d => d.regione))].sort();
    const indirizzi = [...new Set(ITS_DATABASE.map(d => d.indirizzo))].sort();

    const selR = $('sel-regione');
    const selI = $('sel-indirizzo');

    regioni.forEach(r => selR.appendChild(new Option(r, r)));
    indirizzi.forEach(i => selI.appendChild(new Option(i, i)));
  }

  /* ── Ricerca e filtro ─────────────────────────────────────── */
  function doSearch() {
    const regione   = $('sel-regione').value;
    const indirizzo = $('sel-indirizzo').value;
    const descQuery = $('sel-desc').value.trim().toLowerCase();

    const results = ITS_DATABASE.filter(d =>
      (!regione   || d.regione   === regione) &&
      (!indirizzo || d.indirizzo === indirizzo) &&
      (!descQuery || d.desc.toLowerCase().includes(descQuery) ||
                     d.nome.toLowerCase().includes(descQuery))
    );

    renderResults(results, regione, indirizzo, descQuery);
    showPage('page-results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Render pagina risultati ──────────────────────────────── */
  function renderResults(lista, regione, indirizzo, descQuery = '') {
    const n = lista.length;

    $('res-title').textContent =
      n === 0 ? 'Nessun risultato' :
      n === 1 ? '1 ITS Academy trovato' :
      `${n} ITS Academy trovati`;

    $('res-subtitle').textContent = (regione || indirizzo || descQuery)
      ? 'Basato sui filtri selezionati'
      : 'Tutti gli ITS disponibili in Italia';

    /* Chips filtri attivi */
    const chips = $('res-chips');
    chips.innerHTML = '';
    if (regione)   chips.appendChild(el('span', { class: 'chip' }, `📍 ${regione}`));
    if (indirizzo) chips.appendChild(el('span', { class: 'chip' }, `🎓 ${indirizzo}`));
    if (descQuery) chips.appendChild(el('span', { class: 'chip' }, `🔍 "${descQuery}"`));

    /* Cards */
    const grid = $('cards-grid');
    grid.innerHTML = '';

    if (n === 0) {
      grid.appendChild(
        el('div', { class: 'no-results' },
          el('div', { class: 'no-results-icon' }, '🔍'),
          el('h3', {}, 'Nessun ITS trovato'),
          el('p',  {}, 'Prova a cambiare regione o indirizzo.')
        )
      );
      return;
    }

    const frag = document.createDocumentFragment();
    lista.forEach((its, i) => {
      const card = el('article', {
        class: 'its-card',
        style: `animation-delay:${i * .07}s`,
        'data-id': its.id
      });

      /* Corpo */
      const body = el('div', { class: 'card-body' });
      body.appendChild(el('h2', { class: 'card-name' }, its.nome));
      body.appendChild(el('span', { class: 'card-indirizzo' }, its.indirizzo));
      body.appendChild(el('p', { class: 'card-desc' }, its.desc));

      const meta = el('div', { class: 'card-meta' });
      meta.innerHTML =
        `<span class="meta-item">${ICON.pin} ${its.citta}, ${its.regione}</span>` +
        `<span class="meta-item">${ICON.cal} Durata: 2 anni</span>`;
      body.appendChild(meta);

      /* Azioni */
      const actions = el('div', { class: 'card-actions' });
      const link = el('a', {
        class: 'btn-site',
        href: its.sito,
        target: '_blank',
        rel: 'noopener noreferrer',
        html: `Sito ufficiale ${ICON.ext}`
      });
      actions.appendChild(link);
      actions.appendChild(el('span', { class: 'card-region-tag' }, its.regione));

      card.appendChild(body);
      card.appendChild(actions);
      frag.appendChild(card);
    });

    grid.appendChild(frag);
  }

  /* ── Navigazione ──────────────────────────────────────────── */
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    $(id).classList.add('active');
  }

  function showHome() {
    showPage('page-home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Modal ────────────────────────────────────────────────── */
  function openModal(id) {
    closeAllModals();
    const modal = $(id);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }
 
  function closeAllModals() {
    document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }

  /* ── Init ─────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    populateSelects();

    $('btn-search').addEventListener('click', doSearch);
    $('btn-back').addEventListener('click', showHome);
    $('nav-brand').addEventListener('click', showHome);

    /* Enter dai select */
    ['sel-regione', 'sel-indirizzo'].forEach(id => {
      $(id).addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
    });

        /* Modal */
    $('btn-aiuto').addEventListener('click',  () => openModal('modal-aiuto'));
    $('btn-cosits').addEventListener('click', () => openModal('modal-cosits'));
 
    document.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', closeAllModals);
    });
 
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllModals();
    });
  });

})();