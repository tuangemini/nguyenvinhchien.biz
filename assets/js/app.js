/**
 * NGUYỄN VĨNH CHIẾN - OFFICIAL BLOG SCRIPT
 * Domain: https://nguyenvinhchien.biz/
 * Interactive Features: Running Log Filter, Lightbox, Calculator, Guestbook, WebAudio Ambient
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  renderHeroStats();
  renderPillars();
  renderRuns('all');
  renderArticles();
  renderGallery();
  renderWishes();
  initCalculator();
  initFaqAccordion();
  initAmbientAudio();
  initModals();
});

/* ==========================================================================
   THEME SWITCHER (DARK / LIGHT)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('nvc_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('nvc_theme', next);
      updateThemeIcon(next);
      showToast(next === 'dark' ? 'Đã bật chế độ ban đêm 🌙' : 'Đã bật chế độ ban ngày ☀️');
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ==========================================================================
   NAVBAR & SCROLL
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/* ==========================================================================
   HERO STATS & ANIMATED COUNTER
   ========================================================================== */
function renderHeroStats() {
  // Animate numbers if element exists
  const statNumbers = document.querySelectorAll('.hero-stat-number[data-target]');
  statNumbers.forEach(el => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.textContent = Math.round(target).toLocaleString('vi-VN') + suffix;
        clearInterval(timer);
      } else {
        el.textContent = Math.round(start).toLocaleString('vi-VN') + suffix;
      }
    }, stepTime);
  });
}

/* ==========================================================================
   PILLARS OF VITALITY
   ========================================================================== */
function renderPillars() {
  const container = document.getElementById('pillars-container');
  if (!container || !window.BLOG_DATA) return;

  const icons = {
    'heart-pulse': 'fa-solid fa-heart-pulse',
    'sun': 'fa-solid fa-sun',
    'compass': 'fa-solid fa-compass',
    'users': 'fa-solid fa-hands-holding-heart'
  };

  container.innerHTML = BLOG_DATA.profile.pillars.map(p => `
    <div class="pillar-item">
      <div class="pillar-icon-wrap">
        <i class="${icons[p.icon] || 'fa-solid fa-star'}"></i>
      </div>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   RUNNING LOGS (STRAVA TRACKER)
   ========================================================================== */
function renderRuns(filter = 'all') {
  const container = document.getElementById('runs-container');
  if (!container || !window.BLOG_DATA) return;

  let filtered = BLOG_DATA.runs;
  if (filter === 'long') {
    filtered = BLOG_DATA.runs.filter(r => r.distance >= 7.6);
  } else if (filter === 'red') {
    filtered = BLOG_DATA.runs.filter(r => r.shirtColor === 'red');
  } else if (filter === 'blue') {
    filtered = BLOG_DATA.runs.filter(r => r.shirtColor === 'blue');
  } else if (filter === 'white') {
    filtered = BLOG_DATA.runs.filter(r => r.shirtColor === 'white');
  }

  container.innerHTML = filtered.map(run => `
    <div class="run-card" data-id="${run.id}">
      <div class="run-card-image-wrap" onclick="openPosterModal('${run.id}')">
        <img class="run-card-img" src="${run.posterImage}" alt="${run.title}" loading="lazy">
        <span class="run-card-tag tag-${run.shirtColor}">
          <i class="fa-solid fa-shirt"></i> ${run.shirtColor === 'red' ? 'Áo Đỏ' : run.shirtColor === 'blue' ? 'Áo Xanh' : 'Áo Trắng'}
        </span>
        <span class="run-card-date">
          <i class="fa-regular fa-calendar"></i> ${run.date}
        </span>
        <div class="run-card-overlay">
          <span class="view-poster-btn">
            <i class="fa-solid fa-expand"></i> Phóng to poster & GPS
          </span>
        </div>
      </div>

      <div class="run-card-body">
        <h3 class="run-card-title">${run.title}</h3>
        <div class="run-card-route">
          <i class="fa-solid fa-location-dot" style="color: var(--accent-red)"></i>
          <span>${run.route}</span>
        </div>

        <div class="run-stats-matrix">
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.distance} <small style="font-size: 0.65em">km</small></span>
            <span class="run-matrix-label">Quãng đường</span>
          </div>
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.pace}</span>
            <span class="run-matrix-label">Pace TB</span>
          </div>
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.duration}</span>
            <span class="run-matrix-label">Thời gian</span>
          </div>
        </div>

        <p class="run-card-quote">“${run.quote}”</p>

        <div class="run-card-footer">
          <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">
            <i class="fa-solid fa-fire" style="color: var(--accent-gold-dark)"></i> ${run.calories} kcal • ${run.cadence || '130 spm'}
          </span>
          <button class="btn-run-detail" onclick="openPosterModal('${run.id}')">
            Chi tiết <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Setup filter button listeners
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRuns(btn.getAttribute('data-filter'));
    };
  });
}

/* ==========================================================================
   BLOG ARTICLES
   ========================================================================== */
function renderArticles() {
  const container = document.getElementById('articles-container');
  if (!container || !window.BLOG_DATA) return;

  container.innerHTML = BLOG_DATA.articles.map(article => `
    <article class="article-card">
      <div class="article-img-wrap">
        <img class="article-img" src="${article.thumbnail}" alt="${article.title}" loading="lazy">
        <span class="article-category">${article.category}</span>
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
          <span>•</span>
          <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        </div>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-footer">
          <button class="read-more-btn" onclick="openArticleModal('${article.id}')">
            Đọc bài viết <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   PHOTO & MOMENTS GALLERY
   ========================================================================== */
function renderGallery() {
  const container = document.getElementById('gallery-container');
  if (!container || !window.BLOG_DATA) return;

  container.innerHTML = BLOG_DATA.gallery.map(item => `
    <div class="gallery-card" onclick="openSimpleImageModal('${item.image}', '${item.title}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-card-info">
        <h4 class="gallery-card-title">${item.title}</h4>
        <p class="gallery-card-desc">${item.subtitle}</p>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   COMMUNITY WISHES & GUESTBOOK
   ========================================================================== */
function renderWishes() {
  const feed = document.getElementById('wishes-feed');
  if (!feed) return;

  // Retrieve custom local wishes if any
  let stored = JSON.parse(localStorage.getItem('nvc_wishes') || '[]');
  const allWishes = [...stored, ...BLOG_DATA.communityWishes];

  feed.innerHTML = allWishes.map((w, index) => {
    const initial = w.name ? w.name.trim().charAt(0).toUpperCase() : 'B';
    const bg = w.avatarBg || '#1d4ed8';
    return `
      <div class="wish-item">
        <div class="wish-header">
          <div class="wish-user">
            <div class="wish-avatar-initial" style="background-color: ${bg};">${initial}</div>
            <div>
              <div class="wish-name">${escapeHTML(w.name)}</div>
              <div class="wish-role">${escapeHTML(w.relationship || 'Độc giả yêu quý')}</div>
            </div>
          </div>
          <span class="wish-date">${w.date || 'Gần đây'}</span>
        </div>
        <p class="wish-text">${escapeHTML(w.message)}</p>
        <div class="wish-actions">
          <button class="btn-like-wish" onclick="toggleWishLike(this, ${w.heartCount || 10})">
            <i class="fa-regular fa-heart"></i> <span>${w.heartCount || 10}</span> Yêu thích
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Handle Form Submission
  const form = document.getElementById('wish-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('wish-author-name').value.trim();
      const relationship = document.getElementById('wish-author-role').value.trim() || 'Người bạn tiếp lửa';
      const message = document.getElementById('wish-author-message').value.trim();

      if (!name || !message) {
        showToast('Vui lòng nhập tên và lời chúc của bạn nhé!');
        return;
      }

      const colors = ['#1d4ed8', '#dc2626', '#059669', '#d97706', '#7c3aed'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newWish = {
        name: name,
        relationship: relationship,
        message: message,
        avatarBg: randomColor,
        date: new Date().toLocaleDateString('vi-VN'),
        heartCount: 1
      };

      let currentStored = JSON.parse(localStorage.getItem('nvc_wishes') || '[]');
      currentStored.unshift(newWish);
      localStorage.setItem('nvc_wishes', JSON.stringify(currentStored));

      form.reset();
      renderWishes();
      showToast('Cảm ơn bạn! Lời chúc đã được gửi đến Anh Chiến ❤️');
    };
  }
}

function toggleWishLike(btn, count) {
  const isLiked = btn.classList.contains('liked');
  const span = btn.querySelector('span');
  const icon = btn.querySelector('i');
  if (isLiked) {
    btn.classList.remove('liked');
    icon.className = 'fa-regular fa-heart';
    span.textContent = count;
  } else {
    btn.classList.add('liked');
    icon.className = 'fa-solid fa-heart';
    span.textContent = count + 1;
    showToast('Đã thả tim lời chúc ❤️');
  }
}

/* ==========================================================================
   INTERACTIVE RUNNING CALCULATOR
   ========================================================================== */
function initCalculator() {
  const form = document.getElementById('running-calculator-form');
  if (!form) return;

  const weightInput = document.getElementById('calc-weight');
  const targetKmInput = document.getElementById('calc-km');
  const paceSelect = document.getElementById('calc-pace');
  const caloriesResult = document.getElementById('calc-calories-val');
  const timeResult = document.getElementById('calc-time-val');
  const tipResult = document.getElementById('calc-tip-text');

  function calculate() {
    const weight = parseFloat(weightInput.value) || 65;
    const distance = parseFloat(targetKmInput.value) || 5;
    const paceDecimal = parseFloat(paceSelect.value) || 9.2; // minutes per km

    // Calorie formula: Calories ≈ MET * weight(kg) * time(hours) or Distance * Weight * 1.036
    const calories = Math.round(distance * weight * 1.036);
    const totalMinutes = Math.round(distance * paceDecimal);

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const formattedTime = hours > 0 ? `${hours} giờ ${mins} phút` : `${mins} phút`;

    if (caloriesResult) caloriesResult.textContent = calories.toLocaleString('vi-VN') + ' kcal';
    if (timeResult) timeResult.textContent = formattedTime;

    if (tipResult) {
      if (distance <= 3) {
        tipResult.textContent = '“Khởi đầu 3km nhẹ nhàng là bước đi vàng! Đi bộ nhanh kết hợp chạy chậm, hít thở sâu gió sớm để cơ thể quen dần.” — Anh Nguyễn Vĩnh Chiến';
      } else if (distance <= 7) {
        tipResult.textContent = '“Cự ly 5 - 7km là mốc dưỡng sinh lý tưởng cho tim mạch. Duy trì pace 9:00 - 9:30, nhịp tim ổn định và nụ cười luôn nở trên môi!” — Anh Nguyễn Vĩnh Chiến';
      } else {
        tipResult.textContent = '“8km trở lên đòi hỏi sự kiên trì tuyệt vời. Nhớ uống đủ nước ấm trước khi chạy và khởi động thật kỹ 15 phút nhé!” — Anh Nguyễn Vĩnh Chiến';
      }
    }
  }

  weightInput.addEventListener('input', calculate);
  targetKmInput.addEventListener('input', calculate);
  paceSelect.addEventListener('change', calculate);

  calculate();
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faq-container');
  if (!container || !window.BLOG_DATA) return;

  container.innerHTML = BLOG_DATA.faqs.map((faq, idx) => `
    <div class="faq-card ${idx === 0 ? 'open' : ''}">
      <button class="faq-question" onclick="toggleFaq(this)">
        <span>${faq.question}</span>
        <i class="fa-solid fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const card = btn.parentElement;
  const wasOpen = card.classList.contains('open');
  
  // Close all
  document.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));
  
  if (!wasOpen) {
    card.classList.add('open');
  }
}

/* ==========================================================================
   MODAL DIALOGS (POSTER / GPS LIGHTBOX & ARTICLE MODAL)
   ========================================================================== */
function initModals() {
  const overlay = document.getElementById('site-modal-overlay');
  const closeBtn = document.getElementById('modal-close-btn');

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openPosterModal(runId) {
  const run = BLOG_DATA.runs.find(r => r.id === runId);
  if (!run) return;

  const modalBody = document.getElementById('modal-content-container');
  const overlay = document.getElementById('site-modal-overlay');

  modalBody.innerHTML = `
    <div class="poster-modal-grid">
      <div class="poster-modal-img-wrap">
        <img src="${run.posterImage}" alt="${run.title}">
      </div>
      <div class="poster-modal-content">
        <div class="badge badge-${run.shirtColor}">
          <i class="fa-solid fa-award"></i> Nhật Ký Chạy Thực Tế
        </div>
        <h2 style="font-size: 1.75rem;">${run.title}</h2>
        <div style="font-size: 0.9rem; color: var(--text-muted); display: flex; gap: 12px; flex-wrap: wrap;">
          <span><i class="fa-regular fa-calendar"></i> ${run.date} (${run.dayOfWeek})</span>
          <span><i class="fa-regular fa-clock"></i> ${run.timeStart}</span>
        </div>

        <div class="run-stats-matrix" style="margin: 10px 0;">
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.distance} km</span>
            <span class="run-matrix-label">Quãng đường</span>
          </div>
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.pace}</span>
            <span class="run-matrix-label">Pace TB</span>
          </div>
          <div class="run-matrix-item">
            <span class="run-matrix-val">${run.duration}</span>
            <span class="run-matrix-label">Thời gian</span>
          </div>
        </div>

        <div style="font-size: 0.925rem; background: var(--bg-alt); padding: 14px; border-radius: var(--radius-sm);">
          <strong>Cung đường chạy:</strong> ${run.route}<br>
          <strong>Năng lượng tiêu hao:</strong> ${run.calories} kcal<br>
          <strong>Guồng chân (Cadence):</strong> ${run.cadence || '130 spm'}<br>
          <strong>Trang phục:</strong> ${run.shirtLabel}
        </div>

        <p style="font-style: italic; color: var(--text-secondary); border-left: 3px solid var(--accent-gold); padding-left: 12px;">
          “${run.story}”
        </p>

        <div style="display: flex; gap: 12px; margin-top: auto;">
          <a href="${run.posterImage}" download="NguyenVinhChien-${run.date.replace(/\//g, '-')}.jpg" class="btn-primary btn-gold" style="font-size: 0.85rem;">
            <i class="fa-solid fa-download"></i> Tải poster kỷ niệm
          </a>
          <button class="btn-secondary" onclick="shareUrl()" style="font-size: 0.85rem;">
            <i class="fa-solid fa-share-nodes"></i> Chia sẻ
          </button>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openArticleModal(articleId) {
  const article = BLOG_DATA.articles.find(a => a.id === articleId);
  if (!article) return;

  const modalBody = document.getElementById('modal-content-container');
  const overlay = document.getElementById('site-modal-overlay');

  modalBody.innerHTML = `
    <div class="article-modal-box">
      <span class="badge badge-gold">${article.category}</span>
      <h2 style="font-size: 2.2rem; margin: 16px 0 12px;">${article.title}</h2>
      <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; gap: 14px;">
        <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
        <span>•</span>
        <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
        <span>•</span>
        <span>Tác giả: Anh Nguyễn Vĩnh Chiến</span>
      </div>

      <div style="margin: 24px 0; border-radius: var(--radius-md); overflow: hidden; max-height: 380px;">
        <img src="${article.thumbnail}" alt="${article.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="article-modal-body">
        ${article.content}
      </div>

      <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="assets/images/chien-avatar.jpg" alt="Nguyễn Vĩnh Chiến" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-gold);">
          <div>
            <div style="font-weight: 700;">Nguyễn Vĩnh Chiến</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Sống Khỏe • Tử Tế • Năng Động Tuổi 60+</div>
          </div>
        </div>
        <button class="btn-primary" onclick="closeModal()">Đóng</button>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openSimpleImageModal(imgSrc, title) {
  const modalBody = document.getElementById('modal-content-container');
  const overlay = document.getElementById('site-modal-overlay');

  modalBody.innerHTML = `
    <div style="padding: 24px; text-align: center;">
      <h3 style="margin-bottom: 16px;">${title}</h3>
      <img src="${imgSrc}" alt="${title}" style="max-height: 75vh; margin: 0 auto; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);">
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('site-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   WEB AUDIO API: MORNING ENERGY AMBIENT SYNTHESIZER
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let ambientInterval = null;

function initAmbientAudio() {
  const btn = document.getElementById('audio-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startAmbientAudio();
      btn.classList.add('playing');
      btn.setAttribute('title', 'Tắt âm thanh buổi sớm');
      showToast('Đang phát âm thanh năng lượng bình minh 🌅');
    } else {
      stopAmbientAudio();
      btn.classList.remove('playing');
      btn.setAttribute('title', 'Bật âm thanh buổi sớm');
      showToast('Đã dừng âm thanh ⏸️');
    }
  });
}

function startAmbientAudio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    audioCtx = new AudioContext();

    // Pentatonic scale frequencies for soothing uplifting morning harmony: C4, D4, E4, G4, A4, C5
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

    function playChime(freq, delay) {
      setTimeout(() => {
        if (!isAudioPlaying || !audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.5);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 3.6);
      }, delay);
    }

    // Play an uplifting gentle chord pattern every 4 seconds
    function triggerChord() {
      if (!isAudioPlaying) return;
      const rootIdx = Math.floor(Math.random() * (notes.length - 2));
      playChime(notes[rootIdx], 0);
      playChime(notes[rootIdx + 1], 400);
      playChime(notes[rootIdx + 2], 900);
    }

    isAudioPlaying = true;
    triggerChord();
    ambientInterval = setInterval(triggerChord, 4200);
  } catch (e) {
    console.error('Audio synth error:', e);
  }
}

function stopAmbientAudio() {
  isAudioPlaying = false;
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
}

/* ==========================================================================
   UTILITIES
   ========================================================================== */
function showToast(msg) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function shareUrl() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText('https://nguyenvinhchien.biz/');
    showToast('Đã sao chép liên kết https://nguyenvinhchien.biz/ vào bộ nhớ tạm!');
  } else {
    showToast('Trang web: https://nguyenvinhchien.biz/');
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Global exports
window.openPosterModal = openPosterModal;
window.openArticleModal = openArticleModal;
window.openSimpleImageModal = openSimpleImageModal;
window.closeModal = closeModal;
window.toggleWishLike = toggleWishLike;
window.toggleFaq = toggleFaq;
window.shareUrl = shareUrl;
