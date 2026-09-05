function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function lerp(a, b, t) { return a + (b - a) * clamp(t, 0, 1); }
function phase(p, s, e) { return clamp((p - s) / (e - s), 0, 1); }


// Pushes every piece of text from content.js into the page. Runs once, immediately.
function applyContent() {
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  set('heroEyebrow', CONTENT.hero.eyebrow);
  setHTML('heroTitle', `${CONTENT.hero.titleBefore} <em>${CONTENT.hero.titleEmphasis}</em>,<br>${CONTENT.hero.titleName}`);
  set('heroTagline', CONTENT.hero.tagline);
  set('heroCounterCaption', CONTENT.hero.counterCaption);

  set('galleryLabel', CONTENT.gallery.label);
  const galleryTrack = document.getElementById('galleryTrack');
  CONTENT.gallery.photos.forEach(filename => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    const img = document.createElement('img');
    img.src = 'photos/' + filename;
    img.alt = '';
    img.loading = 'lazy';
    card.appendChild(img);
    galleryTrack.appendChild(card);
  });

  set('revealLabel', CONTENT.reveal.label);
  const revealList = document.getElementById('revealList');
  CONTENT.reveal.items.forEach(item => {
    const p = document.createElement('p');
    p.className = 'reveal-item';
    p.innerHTML = item;
    revealList.appendChild(p);
  });

  set('letterSalutation', CONTENT.letter.salutation);
  const letterParagraphs = document.getElementById('letterParagraphs');
  CONTENT.letter.paragraphs.forEach(para => {
    const p = document.createElement('p');
    p.className = 'fade-in';
    p.innerHTML = para;
    letterParagraphs.appendChild(p);
  });
  set('letterSignature', CONTENT.letter.signature);

  set('futureLabel', CONTENT.future.label);
  set('futureFinalText', CONTENT.future.finalText);
  set('futureFinalSmall', CONTENT.future.finalSmall);

  set('worldTourLabel', CONTENT.worldTour.label);
  document.querySelectorAll('.postcard-caption').forEach(el => {
    const stop = CONTENT.worldTour.stops[Number(el.dataset.stop)];
    if (stop) el.textContent = stop.caption;
  });

  set('closingHeading', CONTENT.closing.heading);
  set('closingSub', CONTENT.closing.sub);
  set('secretBtn', CONTENT.closing.secretButtonLabel);
  set('footerSig', CONTENT.closing.footer);
}
applyContent();

function updateCounter() {
  const now = new Date();
  let diff = now - CONTENT.startDate;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('c-days').textContent = days;
  document.getElementById('c-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('c-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('c-secs').textContent = String(secs).padStart(2, '0');
}
updateCounter();
setInterval(updateCounter, 1000);

function spawnEmbers(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'ember';
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 9;
    const delay = Math.random() * 14;
    const drift = (Math.random() - 0.5) * 140;
    const size = 3 + Math.random() * 6;
    span.style.left = left + '%';
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.animationDuration = duration + 's';
    span.style.animationDelay = delay + 's';
    span.style.setProperty('--drift', drift + 'px');
    container.appendChild(span);
  }
}
spawnEmbers('hero-floaters', 26);
spawnEmbers('closing-floaters', 26);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

const revealItems = document.querySelectorAll('.reveal-item');
function updateRevealItems() {
  const vh = window.innerHeight;
  revealItems.forEach(el => {
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const dist = Math.abs(center - vh / 2);
    const t = clamp(1 - dist / (vh * 0.55), 0, 1);
    el.style.opacity = 0.15 + t * 0.85;
    el.style.transform = `translateY(${(1 - t) * 26}px) scale(${0.95 + t * 0.05})`;
    el.style.filter = `blur(${(1 - t) * 3}px)`;
    el.classList.toggle('visible', t > 0.55);
  });
}

const progressBar = document.getElementById('progress-bar');
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

const futureSection = document.getElementById('future');
const charShivansh = document.getElementById('charShivansh');
const charVinani = document.getElementById('charVinani');
const car = document.getElementById('car');
const catSprite = document.getElementById('catSprite');
const speedLines = document.getElementById('speedLines');
const layerRoad = document.getElementById('layerRoad');
const layerRestaurant = document.getElementById('layerRestaurant');
const futureText = document.getElementById('futureText');
const futureTextMid = document.getElementById('futureTextMid');
const torsoShivansh = document.getElementById('torsoShivansh');
const torsoVinani = document.getElementById('torsoVinani');
const sleeveVinaniL = document.getElementById('sleeveVinaniL');
const sleeveVinaniR = document.getElementById('sleeveVinaniR');
const tableGroup = document.getElementById('tableGroup');
const wineGroup = document.getElementById('wineGroup');

const CASUAL_SHIVANSH = '#5b7fb5';
const DRESSY_SHIVANSH = '#232634';
const CASUAL_VINANI = '#fdf6ee';
const DRESSY_VINANI = '#7a2340';

function updateScene() {
  const rect = futureSection.getBoundingClientRect();
  const total = futureSection.offsetHeight - window.innerHeight;
  let p = total > 0 ? (-rect.top) / total : 0;
  p = clamp(p, 0, 1);

  const walkT = phase(p, 0, 0.16);
  const sX = lerp(-80, 620, walkT);
  const vX = sX - 55;

  const walking = p < 0.16;
  charShivansh.classList.toggle('is-walking', walking);
  charVinani.classList.toggle('is-walking', walking);

  const board1 = phase(p, 0.16, 0.22);
  const seatT = phase(p, 0.4, 0.5);

  let charOpacity;
  let curX, curVX, curY;
  if (p < 0.22) {
    charOpacity = 1 - board1;
    curX = sX; curVX = vX; curY = 280;
  } else if (p < 0.4) {
    charOpacity = 0;
    curX = 400; curVX = 470; curY = 250;
  } else {
    charOpacity = seatT;
    curX = 400; curVX = 470; curY = 250;
  }
  charShivansh.setAttribute('transform', `translate(${curX},${curY})`);
  charVinani.setAttribute('transform', `translate(${curVX},${curY})`);
  charShivansh.style.opacity = charOpacity;
  charVinani.style.opacity = charOpacity;

  const dressy = seatT > 0.4;
  torsoShivansh.setAttribute('fill', dressy ? DRESSY_SHIVANSH : CASUAL_SHIVANSH);
  torsoVinani.setAttribute('fill', dressy ? DRESSY_VINANI : CASUAL_VINANI);
  if (sleeveVinaniL) sleeveVinaniL.setAttribute('fill', dressy ? DRESSY_VINANI : '#f7c6d9');
  if (sleeveVinaniR) sleeveVinaniR.setAttribute('fill', dressy ? DRESSY_VINANI : '#f7c6d9');

  const carAppearT = phase(p, 0.12, 0.17);
  const driveT = phase(p, 0.22, 0.32);
  const carX = lerp(700, 1350, driveT);
  car.setAttribute('transform', `translate(${carX},250)`);
  car.style.opacity = carAppearT;

  catSprite.style.opacity = phase(p, 0.16, 0.22);
  speedLines.style.opacity = phase(p, 0.24, 0.32);
  layerRoad.style.opacity = phase(p, 0.18, 0.3);
  layerRestaurant.style.opacity = phase(p, 0.28, 0.42);
  tableGroup.style.opacity = phase(p, 0.34, 0.46);

  wineGroup.classList.toggle('clink', p > 0.78);

  const activeBeat = CONTENT.future.captionBeats.find(b => p >= b.start && p <= b.end);
  if (activeBeat) {
    if (futureTextMid.textContent !== activeBeat.text) futureTextMid.textContent = activeBeat.text;
    const fadeIn = phase(p, activeBeat.start, activeBeat.start + 0.02);
    const fadeOut = 1 - phase(p, activeBeat.end - 0.02, activeBeat.end);
    futureTextMid.style.opacity = fadeIn * fadeOut;
  } else {
    futureTextMid.style.opacity = 0;
  }

  const textT = phase(p, 0.85, 1.0);
  futureText.style.opacity = textT;
  futureText.style.transform = `translate(-50%, ${lerp(20, 0, textT)}px)`;
}

const gallerySection = document.getElementById('gallery');
const galleryCards = document.querySelectorAll('.gallery-card');
const galleryIndexEl = document.getElementById('galleryIndex');
const GALLERY_COUNT = galleryCards.length;

function updateGallery() {
  const rect = gallerySection.getBoundingClientRect();
  const total = gallerySection.offsetHeight - window.innerHeight;
  let p = total > 0 ? (-rect.top) / total : 0;
  p = clamp(p, 0, 1);

  const centerFloat = p * (GALLERY_COUNT - 1);
  galleryCards.forEach((card, i) => {
    const offset = i - centerFloat;
    const absOffset = Math.abs(offset);
    const rotateY = clamp(-offset * 35, -65, 65);
    const scale = clamp(1 - absOffset * 0.12, 0.55, 1);
    const brightness = clamp(1 - absOffset * 0.28, 0.35, 1);
    card.style.transform = `translateX(${offset * 72}%) translateZ(${-absOffset * 140}px) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.filter = `brightness(${brightness})`;
    card.style.opacity = clamp(1 - absOffset * 0.4, 0, 1);
    card.style.zIndex = String(100 - Math.round(absOffset * 10));
  });

  if (galleryIndexEl) {
    galleryIndexEl.textContent = `${Math.round(centerFloat) + 1} / ${GALLERY_COUNT}`;
  }
}

const worldtourSection = document.getElementById('worldtour');
const filmstrip = document.getElementById('filmstrip');
const postcardCaptions = document.querySelectorAll('.postcard-caption');
const WORLD_STOPS = postcardCaptions.length;

function updateWorldTour() {
  const rect = worldtourSection.getBoundingClientRect();
  const total = worldtourSection.offsetHeight - window.innerHeight;
  let p = total > 0 ? (-rect.top) / total : 0;
  p = clamp(p, 0, 1);

  const totalShift = (WORLD_STOPS - 1) * 1000;
  filmstrip.setAttribute('transform', `translate(${-p * totalShift},0)`);

  postcardCaptions.forEach((el, i) => {
    const center = i / (WORLD_STOPS - 1);
    const d = Math.abs(p - center);
    el.style.opacity = clamp(1 - d / 0.18, 0, 1);
  });
}

const navSections = ['hero', 'reasons', 'gallery', 'letter', 'future', 'worldtour', 'closing'];
const navButtons = document.querySelectorAll('.navdots button');
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});

function updateNavActive() {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  let activeId = navSections[0];
  navSections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) activeId = id;
  });
  navButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === activeId);
  });
}

let ticking = false;
function onScroll() {
  updateProgressBar();
  updateScene();
  updateWorldTour();
  updateGallery();
  updateNavActive();
  updateRevealItems();
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(onScroll);
    ticking = true;
  }
});
onScroll();

const secretBtn = document.getElementById('secretBtn');
const secretCard = document.getElementById('secretCard');
let secretIndex = 0;
secretBtn.addEventListener('click', (e) => {
  const messages = CONTENT.closing.secretMessages;
  secretCard.innerHTML = messages[secretIndex % messages.length];
  secretCard.classList.add('show');
  secretBtn.textContent = secretIndex === 0 ? 'reveal another' : 'and another';
  secretIndex++;
  burstDots(e.clientX, e.clientY);
  playChime();
});

function burstDots(x, y) {
  for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.className = 'burst-dot';
    const angle = Math.random() * Math.PI * 2;
    const dist = 70 + Math.random() * 150;
    span.style.setProperty('--bx', Math.cos(angle) * dist + 'px');
    span.style.setProperty('--by', Math.sin(angle) * dist + 'px');
    span.style.left = x + 'px';
    span.style.top = y + 'px';
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1200);
  }
}

const mascot = document.getElementById('mascot');
const mascotBubble = document.getElementById('mascotBubble');
let bubbleTimeout;
let clickStreak = 0;
let lastClickTime = 0;
mascot.addEventListener('click', () => {
  const now = Date.now();
  clickStreak = (now - lastClickTime < 900) ? clickStreak + 1 : 1;
  lastClickTime = now;
  const messages = CONTENT.mascot.messages;
  const msg = clickStreak >= 5
    ? CONTENT.mascot.streakMessage
    : messages[Math.floor(Math.random() * messages.length)];
  if (clickStreak >= 5) clickStreak = 0;
  mascotBubble.textContent = msg;
  mascotBubble.classList.add('show');
  clearTimeout(bubbleTimeout);
  bubbleTimeout = setTimeout(() => mascotBubble.classList.remove('show'), 2800);
  playChime();
});

let audioCtx;
function playChime() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const now = audioCtx.currentTime;
    [660, 880].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.05, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.5);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.55);
    });
  } catch (e) {}
}
