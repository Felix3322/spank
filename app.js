const AUDIO_LIBRARY = {
  "halo": [
    "audio/halo/00.mp3",
    "audio/halo/01.mp3",
    "audio/halo/02.mp3",
    "audio/halo/03.mp3",
    "audio/halo/04.mp3",
    "audio/halo/05.mp3",
    "audio/halo/06.mp3",
    "audio/halo/07.mp3",
    "audio/halo/08.mp3"
  ],
  "pain": [
    "audio/pain/00_Ow.mp3",
    "audio/pain/01_Ouch.mp3",
    "audio/pain/02_Owwie.mp3",
    "audio/pain/03_Hey_that_hurts.mp3",
    "audio/pain/04_Ow_stop_it.mp3",
    "audio/pain/05_What_was_that_for.mp3",
    "audio/pain/06_Ow_ow_ow.mp3",
    "audio/pain/07_Hey.mp3",
    "audio/pain/08_Yowch.mp3",
    "audio/pain/09_That_stings.mp3"
  ],
  "sexy": [
    "audio/sexy/00.mp3",
    "audio/sexy/01.mp3",
    "audio/sexy/02.mp3",
    "audio/sexy/03.mp3",
    "audio/sexy/04.mp3",
    "audio/sexy/05.mp3",
    "audio/sexy/06.mp3",
    "audio/sexy/07.mp3",
    "audio/sexy/08.mp3",
    "audio/sexy/09.mp3",
    "audio/sexy/10.mp3",
    "audio/sexy/11.mp3",
    "audio/sexy/12.mp3",
    "audio/sexy/13.mp3",
    "audio/sexy/14.mp3",
    "audio/sexy/15.mp3",
    "audio/sexy/16.mp3",
    "audio/sexy/17.mp3",
    "audio/sexy/18.mp3",
    "audio/sexy/19.mp3",
    "audio/sexy/20.mp3",
    "audio/sexy/21.mp3",
    "audio/sexy/22.mp3",
    "audio/sexy/23.mp3",
    "audio/sexy/24.mp3",
    "audio/sexy/25.mp3",
    "audio/sexy/26.mp3",
    "audio/sexy/27.mp3",
    "audio/sexy/28.mp3",
    "audio/sexy/29.mp3",
    "audio/sexy/30.mp3",
    "audio/sexy/31.mp3",
    "audio/sexy/32.mp3",
    "audio/sexy/33.mp3",
    "audio/sexy/34.mp3",
    "audio/sexy/35.mp3",
    "audio/sexy/36.mp3",
    "audio/sexy/37.mp3",
    "audio/sexy/38.mp3",
    "audio/sexy/39.mp3",
    "audio/sexy/40.mp3",
    "audio/sexy/41.mp3",
    "audio/sexy/42.mp3",
    "audio/sexy/43.mp3",
    "audio/sexy/44.mp3",
    "audio/sexy/45.mp3",
    "audio/sexy/46.mp3",
    "audio/sexy/47.mp3",
    "audio/sexy/48.mp3",
    "audio/sexy/49.mp3",
    "audio/sexy/50.mp3",
    "audio/sexy/51.mp3",
    "audio/sexy/52.mp3",
    "audio/sexy/53.mp3",
    "audio/sexy/54.mp3",
    "audio/sexy/55.mp3",
    "audio/sexy/56.mp3",
    "audio/sexy/57.mp3",
    "audio/sexy/58.mp3",
    "audio/sexy/59.mp3"
  ],
  "from_me": [
    "audio/From ME!!!/Timeline 1_slices/Timeline 1_part_001.mp3",
    "audio/From ME!!!/Timeline 1_slices/Timeline 1_part_002.mp3",
    "audio/From ME!!!/Timeline 1_slices/Timeline 1_part_003.mp3",
    "audio/From ME!!!/Timeline 1_slices/Timeline 1_part_004.mp3",
    "audio/From ME!!!/Timeline 1_slices/Timeline 1_part_005.mp3"
  ]
};

const presetSelect = document.getElementById('presetSelect');
const folderInput = document.getElementById('folderInput');
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const starBtn = document.getElementById('starBtn');
const starText = document.getElementById('starText');
const langSelect = document.getElementById('langSelect');
const langLabel = document.getElementById('langLabel');
const statusEl = document.getElementById('status');
const meterBar = document.getElementById('meterBar');
const excitementBar = document.getElementById('excitementBar');
const excitementValue = document.getElementById('excitementValue');
const excitementValueLabel = document.getElementById('excitementValueLabel');
const tagText = document.getElementById('tagText');
const titleText = document.getElementById('titleText');
const subtitleText = document.getElementById('subtitleText');
const audioSourceTitle = document.getElementById('audioSourceTitle');
const builtInLabel = document.getElementById('builtInLabel');
const dividerText = document.getElementById('dividerText');
const localFolderLabel = document.getElementById('localFolderLabel');
const localHint = document.getElementById('localHint');
const detectionTitle = document.getElementById('detectionTitle');
const sensitivityLabel = document.getElementById('sensitivityLabel');
const rmsLabel = document.getElementById('rmsLabel');
const cooldownLabel = document.getElementById('cooldownLabel');
const liveTitle = document.getElementById('liveTitle');
const meterHint = document.getElementById('meterHint');
const excitementLabel = document.getElementById('excitementLabel');
const gyroLabel = document.getElementById('gyroLabel');
const gyroStatusLabel = document.getElementById('gyroStatusLabel');
const gyroValueLabel = document.getElementById('gyroValueLabel');
const slapsLabel = document.getElementById('slapsLabel');
const tracksLabel = document.getElementById('tracksLabel');
const footerText = document.getElementById('footerText');
const gyroStatus = document.getElementById('gyroStatus');
const gyroValue = document.getElementById('gyroValue');
const hitCountEl = document.getElementById('hitCount');
const trackCountEl = document.getElementById('trackCount');

const peakThresholdInput = document.getElementById('peakThreshold');
const rmsThresholdInput = document.getElementById('rmsThreshold');
const cooldownInput = document.getElementById('cooldown');
const peakValue = document.getElementById('peakValue');
const rmsValue = document.getElementById('rmsValue');
const cooldownValue = document.getElementById('cooldownValue');

const I18N = {
  en: {
    tag: 'Mic + Audio Game',
    title: 'Slap Detection · Play Audio',
    subtitle: 'Allow the microphone, the system detects short slaps and plays random audio.',
    start: 'Start',
    stop: 'Stop',
    star: 'Star on',
    language: 'Language',
    statusIdle: 'Status: Idle',
    statusRequest: 'Status: Requesting mic...',
    statusRunning: 'Status: Listening',
    statusStopped: 'Status: Stopped',
    statusNoMic: 'Status: Mic unavailable',
    statusNoAudio: 'Status: No audio to play',
    statusNeedGesture: 'Status: Tap the page to enable audio',
    audioSource: 'Audio Source',
    builtIn: 'Built-in folders',
    builtInPrefix: 'Built-in:',
    or: 'or',
    localFolder: 'Choose local audio folder',
    localFolderOption: 'Local folder',
    localHint: 'Supports mp3 / wav / ogg (local browser only)',
    detection: 'Detection',
    sensitivity: 'Sensitivity (peak threshold)',
    rms: 'Energy threshold (RMS)',
    cooldown: 'Cooldown (ms)',
    live: 'Live Feedback',
    meterHint: 'Higher peak/energy makes the bar brighter',
    excitement: 'Excitement',
    excitementValue: 'Excitement: ',
    gyro: 'Gyroscope',
    statusLabel: 'Status:',
    gyroOff: 'Off',
    gyroOn: 'On',
    gyroDenied: 'Permission denied',
    gyroNoData: 'No gyro data',
    rotation: 'Rotation: ',
    slaps: 'Slaps detected: ',
    tracks: 'Tracks loaded: ',
    footer: 'Tip: Microphone access requires https:// or http://localhost.'
  },
  zh: {
    tag: 'Mic + Audio Game',
    title: '拍打检测 · 播放音效',
    subtitle: '允许麦克风后，系统会检测短促的拍打声并随机播放音频。',
    start: '开始检测',
    stop: '停止',
    star: '在 GitHub 上点星',
    language: '语言',
    statusIdle: '状态：未开始',
    statusRequest: '状态：请求麦克风权限...',
    statusRunning: '状态：检测中',
    statusStopped: '状态：已停止',
    statusNoMic: '状态：无法访问麦克风',
    statusNoAudio: '状态：没有可播放的音频',
    statusNeedGesture: '状态：需要与页面交互后才能播放',
    audioSource: '音频来源',
    builtIn: '内置音频文件夹',
    builtInPrefix: '内置：',
    or: '或',
    localFolder: '选择本地音频文件夹',
    localFolderOption: '本地文件夹',
    localHint: '支持 mp3 / wav / ogg（仅本地浏览器可用）',
    detection: '检测设置',
    sensitivity: '灵敏度 (拍打峰值阈值)',
    rms: '持续能量阈值 (RMS)',
    cooldown: '冷却时间 (ms)',
    live: '实时反馈',
    meterHint: '峰值和能量越高，条形越亮',
    excitement: '兴奋值',
    excitementValue: '当前兴奋值：',
    gyro: '陀螺仪',
    statusLabel: '状态：',
    gyroOff: '未启用',
    gyroOn: '已启用',
    gyroDenied: '权限被拒绝',
    gyroNoData: '无陀螺仪数据',
    rotation: '旋转强度：',
    slaps: '检测到的拍打次数：',
    tracks: '当前音频列表：',
    footer: '提示：浏览器需要 https:// 或 http://localhost 才能使用麦克风。'
  }
};

let currentLang = 'en';

let audioCtx = null;
let analyser = null;
let dataArray = null;
let mediaStream = null;
let animationId = null;
let lastHitAt = 0;
let hitCount = 0;
let audioList = [];
let localUrls = [];
let excitement = 0;
let lastFrameAt = performance.now();
let gyroEnabled = false;
let gyroStrength = 0;
let lastGyroAt = 0;
let gyroListenerAttached = false;
let lastHeartAt = 0;
let lastTrack = null;
const HEART_EXCITEMENT_THRESHOLD = 0.65;
const WEB_ORIGIN = window.location.origin;

function setStatus(text) {
  statusEl.textContent = text;
}

function applyLanguage() {
  const t = I18N[currentLang] || I18N.en;

  if (tagText) tagText.textContent = t.tag;
  if (titleText) titleText.textContent = t.title;
  if (subtitleText) subtitleText.textContent = t.subtitle;
  if (btnStart) btnStart.textContent = t.start;
  if (btnStop) btnStop.textContent = t.stop;
  if (starText) starText.textContent = t.star;
  if (langLabel) langLabel.textContent = t.language;
  if (audioSourceTitle) audioSourceTitle.textContent = t.audioSource;
  if (builtInLabel) builtInLabel.textContent = t.builtIn;
  if (dividerText) dividerText.textContent = t.or;
  if (localFolderLabel) localFolderLabel.textContent = t.localFolder;
  if (localHint) localHint.textContent = t.localHint;
  if (detectionTitle) detectionTitle.textContent = t.detection;
  if (sensitivityLabel) sensitivityLabel.textContent = t.sensitivity;
  if (rmsLabel) rmsLabel.textContent = t.rms;
  if (cooldownLabel) cooldownLabel.textContent = t.cooldown;
  if (liveTitle) liveTitle.textContent = t.live;
  if (meterHint) meterHint.textContent = t.meterHint;
  if (excitementLabel) excitementLabel.textContent = t.excitement;
  if (excitementValueLabel) excitementValueLabel.textContent = t.excitementValue;
  if (gyroLabel) gyroLabel.textContent = t.gyro;
  if (gyroStatusLabel) gyroStatusLabel.textContent = t.statusLabel || (currentLang === 'zh' ? '状态：' : 'Status:');
  if (gyroValueLabel) gyroValueLabel.textContent = t.rotation;
  if (slapsLabel) slapsLabel.textContent = t.slaps;
  if (tracksLabel) tracksLabel.textContent = t.tracks;
  if (footerText) footerText.textContent = t.footer;

  gyroStatus.textContent = gyroEnabled ? t.gyroOn : t.gyroOff;
  populatePresets();
}

function updateThresholdLabels() {
  peakValue.textContent = Number(peakThresholdInput.value).toFixed(2);
  rmsValue.textContent = Number(rmsThresholdInput.value).toFixed(2);
  cooldownValue.textContent = `${cooldownInput.value} ms`;
}

function populatePresets() {
  const previous = presetSelect.value;
  presetSelect.innerHTML = '';
  const t = I18N[currentLang] || I18N.en;
  Object.keys(AUDIO_LIBRARY).forEach((key) => {
    const opt = document.createElement('option');
    opt.value = key;
    const label = key === 'from_me' ? 'From ME!!!' : key;
    opt.textContent = `${t.builtInPrefix || 'Built-in:'} ${label}`;
    presetSelect.appendChild(opt);
  });
  const optLocal = document.createElement('option');
  optLocal.value = 'local';
  optLocal.textContent = t.localFolderOption || 'Local folder';
  presetSelect.appendChild(optLocal);
  if (previous && [...presetSelect.options].some((opt) => opt.value === previous)) {
    presetSelect.value = previous;
  }
}

function usePreset(name) {
  if (name === 'local') {
    audioList = localUrls.length ? localUrls.slice() : [];
  } else {
    audioList = (AUDIO_LIBRARY[name] || []).map((item) => new URL(encodeURI(item), WEB_ORIGIN).toString());
  }
  trackCountEl.textContent = audioList.length.toString();
  presetSelect.classList.toggle('from-me', name === 'from_me');
}

function clearLocalUrls() {
  localUrls.forEach((url) => URL.revokeObjectURL(url));
  localUrls = [];
}

function handleFolderSelection(files) {
  clearLocalUrls();
  const allowed = ['audio/mpeg', 'audio/wav', 'audio/ogg'];
  for (const file of files) {
    if (allowed.includes(file.type)) {
      localUrls.push(URL.createObjectURL(file));
    }
  }
  if (presetSelect.value === 'local') {
    audioList = localUrls.slice();
    trackCountEl.textContent = audioList.length.toString();
  }
}

function playRandom() {
  if (!audioList.length) {
    setStatus(I18N[currentLang].statusNoAudio);
    return;
  }
  let pick = audioList[Math.floor(Math.random() * audioList.length)];
  if (audioList.length > 1 && pick === lastTrack) {
    const index = audioList.indexOf(pick);
    const nextIndex = (index + 1 + Math.floor(Math.random() * (audioList.length - 1))) % audioList.length;
    pick = audioList[nextIndex];
  }
  lastTrack = pick;
  const audio = new Audio(pick);
  const volume = Math.min(1, 0.45 + excitement * 0.55);
  audio.volume = volume;
  audio.play().catch(() => {
    setStatus(I18N[currentLang].statusNeedGesture);
  });
}

function calculateLevels() {
  analyser.getByteTimeDomainData(dataArray);
  let sum = 0;
  let peak = 0;
  for (let i = 0; i < dataArray.length; i += 1) {
    const x = (dataArray[i] - 128) / 128;
    sum += x * x;
    const absX = Math.abs(x);
    if (absX > peak) peak = absX;
  }
  const rms = Math.sqrt(sum / dataArray.length);
  return { peak, rms };
}

function updateExcitement(isHit, dtMs) {
  const decayPerSec = 0.22;
  const boost = isHit ? 0.35 : 0;
  const decay = decayPerSec * (dtMs / 1000);
  excitement = Math.max(0, Math.min(1, excitement - decay + boost));
  excitementBar.style.width = `${(excitement * 100).toFixed(1)}%`;
  excitementValue.textContent = excitement.toFixed(2);
}

function canSpawnHeart() {
  return excitement >= HEART_EXCITEMENT_THRESHOLD || presetSelect.value === 'from_me';
}

function spawnHeart(x, y) {
  if (!canSpawnHeart()) return;
  const now = performance.now();
  if (now - lastHeartAt < 80) return;
  lastHeartAt = now;
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1100);
}

function bindHeartEvents() {
  document.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    spawnHeart(event.clientX, event.clientY);
  });
  document.addEventListener('pointerdown', (event) => {
    spawnHeart(event.clientX, event.clientY);
  });
}

async function enableGyroIfAvailable() {
  if (gyroListenerAttached) return;
  gyroListenerAttached = true;

  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    try {
      const result = await DeviceMotionEvent.requestPermission();
      if (result !== 'granted') {
        gyroStatus.textContent = I18N[currentLang].gyroDenied || 'Permission denied';
        return;
      }
    } catch (err) {
      gyroStatus.textContent = I18N[currentLang].gyroDenied || 'Permission denied';
      return;
    }
  }

  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    try {
      const result = await DeviceOrientationEvent.requestPermission();
      if (result !== 'granted') {
        gyroStatus.textContent = I18N[currentLang].gyroDenied || 'Permission denied';
        return;
      }
    } catch (err) {
      gyroStatus.textContent = I18N[currentLang].gyroDenied || 'Permission denied';
      return;
    }
  }

  window.addEventListener('devicemotion', (event) => {
    const rate = event.rotationRate;
    if (!rate) return;
    const x = rate.alpha || 0;
    const y = rate.beta || 0;
    const z = rate.gamma || 0;
    gyroStrength = Math.sqrt(x * x + y * y + z * z);
    lastGyroAt = performance.now();
    gyroEnabled = true;
  });

  gyroStatus.textContent = I18N[currentLang].gyroOn;
}

function tick() {
  const { peak, rms } = calculateLevels();
  const level = Math.min(1, Math.max(peak, rms) * 1.8);
  meterBar.style.width = `${(level * 100).toFixed(1)}%`;

  const now = performance.now();
  const dtMs = Math.max(0, now - lastFrameAt);
  lastFrameAt = now;
  const peakThreshold = Number(peakThresholdInput.value);
  const rmsThreshold = Number(rmsThresholdInput.value);
  const cooldown = Number(cooldownInput.value);

  let isHit = false;
  if (now - lastHitAt > cooldown && peak > peakThreshold && rms > rmsThreshold) {
    lastHitAt = now;
    hitCount += 1;
    hitCountEl.textContent = hitCount.toString();
    playRandom();
    isHit = true;
  }
  updateExcitement(isHit, dtMs);

  if (gyroEnabled) {
    if (now - lastGyroAt > 1500) {
      gyroStatus.textContent = I18N[currentLang].gyroNoData;
    } else {
      gyroStatus.textContent = I18N[currentLang].gyroOn;
      gyroValue.textContent = gyroStrength.toFixed(1);
    }
  }

  animationId = requestAnimationFrame(tick);
}

async function startListening() {
  if (audioCtx && audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const source = audioCtx.createMediaStreamSource(mediaStream);
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  dataArray = new Uint8Array(analyser.fftSize);
  source.connect(analyser);

  btnStart.disabled = true;
  btnStop.disabled = false;
  setStatus(I18N[currentLang].statusRunning);
  await enableGyroIfAvailable();
  tick();
}

function stopListening() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaStream = null;
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  gyroEnabled = false;
  gyroStrength = 0;
  lastGyroAt = 0;
  gyroStatus.textContent = I18N[currentLang].gyroOff;
  gyroValue.textContent = '0.0';
  btnStart.disabled = false;
  btnStop.disabled = true;
  setStatus(I18N[currentLang].statusStopped);
}

btnStart.addEventListener('click', async () => {
  setStatus(I18N[currentLang].statusRequest);
  try {
    await startListening();
  } catch (err) {
    setStatus(I18N[currentLang].statusNoMic);
  }
});

btnStop.addEventListener('click', () => {
  stopListening();
});

folderInput.addEventListener('change', (event) => {
  handleFolderSelection(event.target.files);
});

presetSelect.addEventListener('change', () => {
  usePreset(presetSelect.value);
});

langSelect.addEventListener('change', () => {
  currentLang = langSelect.value;
  applyLanguage();
});

peakThresholdInput.addEventListener('input', updateThresholdLabels);

rmsThresholdInput.addEventListener('input', updateThresholdLabels);

cooldownInput.addEventListener('input', updateThresholdLabels);

populatePresets();
usePreset(Object.keys(AUDIO_LIBRARY)[0]);
updateThresholdLabels();
trackCountEl.textContent = audioList.length.toString();
applyLanguage();
langSelect.value = currentLang;
setStatus(I18N[currentLang].statusIdle);
bindHeartEvents();
