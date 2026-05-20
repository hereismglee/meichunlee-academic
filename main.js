// ============================================================
//  main.js — renders content from data.js into the page
//  You do NOT need to edit this file.
//  All your content lives in data.js.
// ============================================================

// ── LANGUAGE (English default, toggle removed) ───────────────
document.body.classList.add('lang-en');

// ── HERO ─────────────────────────────────────────────────────
function renderHero() {
  // Photo
  const photoWrap = document.getElementById('heroPhoto');
  if (INFO.photo) {
    photoWrap.innerHTML = `<img src="${INFO.photo}" alt="${INFO.name_en}" onerror="this.parentElement.innerHTML='<span class=\\'photo-placeholder\\'>photo</span>'" />`;
  }

  // Bio
  document.getElementById('heroBioEn').innerHTML = INFO.bio_en;
  document.getElementById('heroBioZh').innerHTML = INFO.bio_zh;

  // Tags — hidden, chips removed
  document.getElementById('heroTags').style.display = 'none';
}

// ── BOOK FEATURE ─────────────────────────────────────────────
function renderBook() {
  if (!BOOKS || BOOKS.length === 0) return;
  const book = BOOKS[0];
  const el = document.getElementById('bookFeature');

  const coverHTML = book.image
    ? `<img src="${book.image}" alt="${book.title_zh}" onerror="this.parentElement.style.background='#F2637A';this.style.display='none'" />`
    : `<div class="book-cover-placeholder">book<br>cover</div>`;

  const bookLinkHTML = book.url
    ? `<a href="${book.url}" target="_blank" class="book-link">↗ Publisher</a>`
    : `<a href="#" class="book-link" onclick="return false;" style="opacity:0.45;cursor:default">↗ Link</a>`;

  el.innerHTML = `
    <div class="book-cover-wrap">${coverHTML}</div>
    <div class="book-meta">
      <div class="book-label">Monograph · ${book.year}</div>
      ${book.title_zh ? `<div class="book-title-zh">${book.title_zh}</div>` : ''}
      ${book.title_en ? `<div class="book-title-en">${book.title_en}</div>` : ''}
      ${book.desc_zh ? `<div class="book-desc">${book.desc_zh}</div>` : ''}
      <div class="book-publisher">${book.publisher}</div>
      ${bookLinkHTML}
    </div>
  `;
}

// ── PUBLICATIONS ─────────────────────────────────────────────
const pubData = {
  journal:  JOURNAL_ARTICLES,
  chapters: BOOK_CHAPTERS,
  public:   PUBLIC_WRITING,
  other:    OTHER_WRITINGS,
};

function renderPubList(tabKey) {
  const list = document.getElementById('pubList');
  const items = pubData[tabKey] || [];
  list.innerHTML = '';

  if (items.length === 0) {
    list.innerHTML = '<p style="color:#B09878;font-size:13px;padding:1rem 0;">No entries yet.</p>';
    return;
  }

  const SHOW = 5;

  items.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'pub-item' + (idx >= SHOW ? ' hidden' : '');

    const titleEn = item.title_en
      ? `<div class="pub-title-en lang-en">${item.title_en}</div>` : '';
    const titleZh = item.title_zh
      ? `<div class="pub-title-zh lang-zh">${item.title_zh}</div>` : '';
    const titleFallback = (!item.title_en && item.title_zh)
      ? `<div class="pub-title-zh lang-en">${item.title_zh}</div>` : '';
    const titleFallbackZh = (!item.title_zh && item.title_en)
      ? `<div class="pub-title-en lang-zh">${item.title_en}</div>` : '';

    const venue = item.venue || item.venue_en || '';
    const badge = item.badge
      ? `<a href="${item.url || '#'}" ${item.url ? 'target="_blank"' : ''} class="pub-badge">${item.badge}</a>`
      : '';
    const note = item.note_en
      ? `<div class="pub-note lang-en">${item.note_en}</div>` : '';

    div.innerHTML = `
      <div class="pub-year">${item.year}</div>
      <div class="pub-body">
        ${titleEn}${titleFallback}
        ${titleZh}${titleFallbackZh}
        ${venue ? `<div class="pub-venue">${venue}</div>` : ''}
        ${note}
      </div>
      ${badge}
    `;
    list.appendChild(div);
  });

  // Expand button — only if more than SHOW items
  if (items.length > SHOW) {
    const btn = document.createElement('button');
    btn.className = 'pub-expand-btn';
    btn.textContent = `Show all ${items.length} →`;
    let expanded = false;
    btn.addEventListener('click', () => {
      expanded = !expanded;
      // re-query after DOM is settled
      const hiddenItems = list.querySelectorAll('.pub-item');
      hiddenItems.forEach((el, idx) => {
        if (idx >= SHOW) el.style.display = expanded ? 'flex' : 'none';
      });
      btn.textContent = expanded ? '← Show less' : `Show all ${items.length} →`;
    });
    // initially hide items beyond SHOW using inline style (more reliable)
    list.querySelectorAll('.pub-item').forEach((el, idx) => {
      if (idx >= SHOW) { el.classList.remove('hidden'); el.style.display = 'none'; }
    });
    list.after(btn);
  }
}

// Tab switching
document.querySelectorAll('.pub-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pub-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // remove old expand button if present
    const old = document.querySelector('.pub-expand-btn');
    if (old) old.remove();
    renderPubList(btn.dataset.tab);
  });
});

// ── PROJECTS ─────────────────────────────────────────────────
// SVG icons for fallback blocks
const PROJECT_ICONS = {
  drone: `<svg class="proj-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="5" stroke="white" stroke-width="1.5"/>
    <line x1="24" y1="19" x2="24" y2="8" stroke="white" stroke-width="1.5"/>
    <line x1="24" y1="29" x2="24" y2="40" stroke="white" stroke-width="1.5"/>
    <line x1="19" y1="24" x2="8" y2="24" stroke="white" stroke-width="1.5"/>
    <line x1="29" y1="24" x2="40" y2="24" stroke="white" stroke-width="1.5"/>
    <circle cx="24" cy="8" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="24" cy="40" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="8" cy="24" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="40" cy="24" r="3" stroke="white" stroke-width="1.5"/>
  </svg>`,
  network: `<svg class="proj-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="4" stroke="white" stroke-width="1.5"/>
    <circle cx="8"  cy="12" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="40" cy="12" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="8"  cy="36" r="3" stroke="white" stroke-width="1.5"/>
    <circle cx="40" cy="36" r="3" stroke="white" stroke-width="1.5"/>
    <line x1="20" y1="21" x2="11" y2="14" stroke="white" stroke-width="1"/>
    <line x1="28" y1="21" x2="37" y2="14" stroke="white" stroke-width="1"/>
    <line x1="20" y1="27" x2="11" y2="34" stroke="white" stroke-width="1"/>
    <line x1="28" y1="27" x2="37" y2="34" stroke="white" stroke-width="1"/>
  </svg>`,
  hacker: `<svg class="proj-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="white" stroke-width="1.5"/>
    <line x1="6" y1="18" x2="42" y2="18" stroke="white" stroke-width="1"/>
    <text x="12" y="30" font-family="monospace" font-size="9" fill="white" opacity="0.8">&gt;_</text>
  </svg>`,
  book: `<svg class="proj-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="6" width="26" height="36" rx="2" stroke="white" stroke-width="1.5"/>
    <line x1="34" y1="6" x2="40" y2="10" stroke="white" stroke-width="1.5"/>
    <line x1="34" y1="42" x2="40" y2="38" stroke="white" stroke-width="1.5"/>
    <line x1="40" y1="10" x2="40" y2="38" stroke="white" stroke-width="1.5"/>
    <line x1="14" y1="16" x2="28" y2="16" stroke="white" stroke-width="1"/>
    <line x1="14" y1="22" x2="28" y2="22" stroke="white" stroke-width="1"/>
    <line x1="14" y1="28" x2="22" y2="28" stroke="white" stroke-width="1"/>
  </svg>`,
  lab: `<svg class="proj-icon-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6 L18 22 L8 38 L40 38 L30 22 L30 6" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
    <line x1="18" y1="6" x2="30" y2="6" stroke="white" stroke-width="1.5"/>
    <circle cx="20" cy="30" r="2" fill="white" opacity="0.6"/>
    <circle cx="28" cy="33" r="1.5" fill="white" opacity="0.4"/>
    <circle cx="24" cy="27" r="1" fill="white" opacity="0.5"/>
  </svg>`,
};

function renderProjects() {
  const grid = document.getElementById('projGrid');
  PROJECTS.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'proj-card';

    // Image or icon block
    let mediaHTML;
    if (proj.image) {
      mediaHTML = `
        <div class="proj-image-wrap" data-icon="${proj.icon || 'lab'}">
          <img src="${proj.image}" alt="${proj.title_en}"
            onerror="var w=this.parentElement;var ic=w.dataset.icon;w.outerHTML='<div class=proj-icon-block id=icon-'+ic+'></div>';document.getElementById('icon-'+ic)" />
        </div>`;
    } else {
      const iconSVG = PROJECT_ICONS[proj.icon] || PROJECT_ICONS.lab;
      mediaHTML = `<div class="proj-icon-block">${iconSVG}</div>`;
    }

    const statusClass = proj.status === 'ongoing' ? 'ongoing' : 'completed';
    const statusLabel = proj.status === 'ongoing'
      ? `<span class="proj-status-dot"></span><span class="lang-en">Ongoing</span><span class="lang-zh">進行中</span>`
      : `<span class="lang-en">Completed</span><span class="lang-zh">已完成</span>`;

    const linkHTML = proj.url
      ? `<a href="${proj.url}" target="_blank" class="proj-link">↗ ${proj.url.replace('https://', '')}</a>`
      : '';

    card.innerHTML = `
      ${mediaHTML}
      <div class="proj-body">
        <span class="proj-status-badge ${statusClass}">${statusLabel}</span>
        <div class="proj-title lang-en">${proj.title_en}</div>
        <div class="proj-title lang-zh">${proj.title_zh}</div>
        <div class="proj-title-zh lang-en">${proj.title_zh}</div>
        <div class="proj-desc lang-en">${proj.desc_en}</div>
        <div class="proj-desc lang-zh">${proj.desc_zh}</div>
        <div class="proj-footer">
          <div class="proj-funding">${proj.funding ? proj.funding + (proj.period ? ' · ' + proj.period : '') : proj.period || ''}</div>
          ${linkHTML}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── CONTACT ──────────────────────────────────────────────────
function renderContact() {
  const grid = document.getElementById('contactGrid');

  const officeLines = INFO.office_en.split('\n').join('<br>');
  const officeZhLines = INFO.office_zh.split('\n').join('<br>');

  const linksHTML = INFO.links.map(l =>
    `<a href="${l.url}" target="_blank" class="contact-link">↗ ${l.label}</a>`
  ).join('');

  grid.innerHTML = `
    <div class="contact-block">
      <div class="contact-label"><span class="lang-en">Email</span><span class="lang-zh">電子郵件</span></div>
      <a href="mailto:${INFO.email}" class="contact-link">${INFO.email}</a>
    </div>
    <div class="contact-block">
      <div class="contact-label"><span class="lang-en">Office</span><span class="lang-zh">辦公室</span></div>
      <div class="contact-value lang-en">${officeLines}</div>
      <div class="contact-value lang-zh">${officeZhLines}</div>
    </div>
    <div class="contact-block">
      <div class="contact-label"><span class="lang-en">Links</span><span class="lang-zh">連結</span></div>
      ${linksHTML}
    </div>
    <div class="contact-block">
      <div class="contact-label">CV</div>
      <a href="${INFO.cv_url}" target="_blank" class="contact-link">
        <span class="lang-en">Download PDF ↓</span>
        <span class="lang-zh">下載 PDF ↓</span>
      </a>
    </div>
  `;
}

// ── INIT ─────────────────────────────────────────────────────
renderHero();
renderBook();
renderPubList('journal');
renderProjects();
renderContact();
