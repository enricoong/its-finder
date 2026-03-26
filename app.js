/**
 * Dipende da: database.js (deve essere caricato prima)
 */

(function () {
  'use strict';

  /* ── Helpers DOM ──────────────────────────────────────────── */
  const $ = id => document.getElementById(id);
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

  /* ── Icons ────────────────────────────────────────────────── */
  const ICON = {
    pin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    ext: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
  };

  /* ── Popola i dropdown ────────────────────────────────────── */
  function populateSelects() {
    const regioni = [...new Set(
      ITS_DATABASE.flatMap(d => d.sedi.map(s => s.regione))
    )].sort();

    /* Tag: raccolti da tutti gli indirizzi di tutte le sedi */
    const tags = [...new Set(
      ITS_DATABASE.flatMap(d =>
        d.sedi.flatMap(s => s.indirizzi.flatMap(i => i.tag))
      )
    )].sort();

    regioni.forEach(r => $('sel-regione').appendChild(new Option(r, r)));
    tags.forEach(t => $('sel-indirizzo').appendChild(new Option(t, t)));
  }

  /* ── Ricerca e filtro ─────────────────────────────────────── */
  function doSearch() {
    const regione = $('sel-regione').value;
    const tag = $('sel-indirizzo').value;   /* valore = tag */
    const descQuery = $('sel-desc').value.trim().toLowerCase();

    const results = ITS_DATABASE
      .map(its => {
        /* Filtra le sedi: regione corrispondente E almeno un indirizzo col tag */
        const sediMatch = its.sedi.filter(s =>
          (!regione || s.regione === regione) &&
          (!tag || s.indirizzi.some(i => i.tag.includes(tag)))
        );
        if (!sediMatch.length) return null;

        /* Per ogni sede filtrata, evidenzia solo gli indirizzi col tag cercato */
        const sediConMatch = sediMatch.map(s => ({
          ...s,
          indirizzi: s.indirizzi.map(i => ({
            ...i,
            match: !tag || i.tag.includes(tag)
          }))
        }));

        return { ...its, sediMatch: sediConMatch };
      })
      .filter(its =>
        its !== null &&
        (!descQuery ||
          its.desc.toLowerCase().includes(descQuery) ||
          its.nome.toLowerCase().includes(descQuery))
      );

    renderResults(results, regione, tag, descQuery);
    showPage('page-results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Render risultati ─────────────────────────────────────── */
  function renderResults(lista, regione, tag, descQuery = '') {
    const n = lista.length;

    $('res-title').textContent =
      n === 0 ? 'Nessun risultato' :
        n === 1 ? '1 ITS Academy trovato' :
          `${n} ITS Academy trovati`;

    $('res-subtitle').textContent = (regione || tag || descQuery)
      ? 'Basato sui filtri selezionati'
      : 'Tutti gli ITS disponibili in Italia';

    /* Chips filtri attivi */
    const chips = $('res-chips');
    chips.innerHTML = '';
    if (regione) chips.appendChild(el('span', { class: 'chip' }, `📍 ${regione}`));
    if (tag) chips.appendChild(el('span', { class: 'chip' }, `🏷 ${tag}`));
    if (descQuery) chips.appendChild(el('span', { class: 'chip' }, `🔍 "${descQuery}"`));

    const grid = $('cards-grid');
    grid.innerHTML = '';

    if (n === 0) {
      grid.appendChild(
        el('div', { class: 'no-results' },
          el('div', { class: 'no-results-icon' }, '🔍'),
          el('h3', {}, 'Nessun ITS trovato'),
          el('p', {}, 'Prova a cambiare regione o tag.')
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

      const body = el('div', { class: 'card-body' });
      body.appendChild(el('h2', { class: 'card-name' }, its.nome));
      body.appendChild(el('p', { class: 'card-desc' }, its.desc));

      /* Sedi */
      const sediWrap = el('div', { class: 'card-sedi' });
      its.sediMatch.forEach(sede => {
        const sedeEl = el('div', { class: 'card-sede' });

        const loc = el('span', { class: 'meta-item' });
        loc.innerHTML = `${ICON.pin} <strong>${sede.citta}</strong>-&nbsp; ${sede.regione}`;
        sedeEl.appendChild(loc);

        const tagsWrap = el('div', { class: 'sede-indirizzi' });

        sede.indirizzi.forEach(ind => {
          // container per singolo corso
          const corsoWrap = el('div');

          // nome corso
          const nomeEl = el('div', {
            class: `card-corso${ind.match ? '' : ' card-corso--dim'}`
          }, ind.nome);

          // container SOLO per i tag
          const tagsRow = el('div', { class: 'card-tags' });

          ind.tag.forEach(t => {
            tagsRow.appendChild(el('span', {
              class: `card-tag${(tag && t === tag) ? ' card-tag--active' : ''}`
            }, t));
          });

          corsoWrap.appendChild(nomeEl);
          corsoWrap.appendChild(tagsRow);
          tagsWrap.appendChild(corsoWrap);
        });

        sedeEl.appendChild(tagsWrap);
        sediWrap.appendChild(sedeEl);
      });
      body.appendChild(sediWrap);

      /* Azioni */
      const actions = el('div', { class: 'card-actions' });
      actions.appendChild(el('a', {
        class: 'btn-site',
        target: '_blank',
        href: its.sito,
        rel: 'noopener noreferrer',
        html: `Sito ufficiale ${ICON.ext}`
      }));

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

    ['sel-regione', 'sel-indirizzo', 'sel-desc'].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
    });

    $('btn-aiuto').addEventListener('click', () => openModal('modal-aiuto'));
    $('btn-cosits').addEventListener('click', () => openModal('modal-cosits'));

    document.querySelectorAll('[data-close]').forEach(el => {
      el.addEventListener('click', closeAllModals);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllModals();
    });
  });

})();