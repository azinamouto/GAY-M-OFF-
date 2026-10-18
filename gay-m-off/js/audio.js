/** * GAY-M OFF GÇö Web Audio Synthesizer * Pure Web Audio API retro 8-bit arcade sound effects. * Fails safely and gracefully. Defaults to OFF. */class RetroAudioSystem {  constructor() {    this.ctx = null;    this.enabled = false;  }  init() {    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {      try {        const AudioCtx = window.AudioContext || window.webkitAudioContext;        this.ctx = new AudioCtx();      } catch (e) {        console.warn("Web Audio not available:", e);      }    }  }  resume() {    if (this.ctx && this.ctx.state === 'suspended') {      this.ctx.resume().catch(() => {});    }  }  setEnabled(val) {    this.enabled = Boolean(val);    if (this.enabled) {      this.init();      this.resume();    }  }  playTone(freq, type = 'square', duration = 0.1, gainVal = 0.15) {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const osc = this.ctx.createOscillator();      const gain = this.ctx.createGain();      osc.type = type;      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);      osc.connect(gain);      gain.connect(this.ctx.destination);      osc.start();      osc.stop(this.ctx.currentTime + duration);    } catch (e) {      // Audio errors must never crash the game    }  }  playClick() {    this.playTone(600, 'square', 0.05, 0.1);  }  playAnswerSelect() {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const now = this.ctx.currentTime;      const osc = this.ctx.createOscillator();      const gain = this.ctx.createGain();      osc.type = 'triangle';      osc.frequency.setValueAtTime(440, now);      osc.frequency.setValueAtTime(660, now + 0.05);      gain.gain.setValueAtTime(0.12, now);      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);      osc.connect(gain);      gain.connect(this.ctx.destination);      osc.start(now);      osc.stop(now + 0.15);    } catch (e) {}  }  playWrongAnswer() {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const now = this.ctx.currentTime;      const osc = this.ctx.createOscillator();      const gain = this.ctx.createGain();      osc.type = 'sawtooth';      osc.frequency.setValueAtTime(180, now);      osc.frequency.exponentialRampToValueAtTime(90, now + 0.2);      gain.gain.setValueAtTime(0.18, now);      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);      osc.connect(gain);      gain.connect(this.ctx.destination);      osc.start(now);      osc.stop(now + 0.22);    } catch (e) {}  }  playGlitch() {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const now = this.ctx.currentTime;      const bufferSize = this.ctx.sampleRate * 0.1;      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);      const data = buffer.getChannelData(0);      for (let i = 0; i < bufferSize; i++) {        data[i] = Math.random() * 2 - 1;      }      const noise = this.ctx.createBufferSource();      noise.buffer = buffer;      const gain = this.ctx.createGain();      gain.gain.setValueAtTime(0.15, now);      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);      noise.connect(gain);      gain.connect(this.ctx.destination);      noise.start(now);      noise.stop(now + 0.1);    } catch (e) {}  }  playMashTone(step = 0) {
    if (!this.enabled || !this.ctx) return;
    try {
      this.resume();
      const baseFreq = 320;
      const freq = Math.min(1100, baseFreq + (step * 45));
      this.playTone(freq, 'triangle', 0.08, 0.18);
    } catch (e) {}
  }

  playGlassTap() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.resume();
      this.playTone(1450, 'sine', 0.04, 0.15);
      setTimeout(() => this.playTone(1800, 'triangle', 0.05, 0.1), 25);
    } catch (e) {}
  }

  playBuzzer() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.resume();
      this.playTone(110, 'sawtooth', 0.18, 0.22);
      setTimeout(() => this.playTone(95, 'sawtooth', 0.22, 0.25), 90);
    } catch (e) {}
  }

  playOvercharge() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.resume();
      const freqs = [440, 554, 659, 880, 1108, 1318, 1760];
      freqs.forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'square', 0.09, 0.15), i * 40);
      });
    } catch (e) {}
  }

  playChallengeComplete() {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6      notes.forEach((freq, idx) => {        setTimeout(() => {          this.playTone(freq, 'triangle', 0.12, 0.14);        }, idx * 75);      });    } catch (e) {}  }  playFinalVerdict() {    if (!this.enabled || !this.ctx) return;    try {      this.resume();      const chords = [330, 415.3, 493.88];      chords.forEach((freq) => {        this.playTone(freq, 'sawtooth', 0.6, 0.1);      });    } catch (e) {}  }}export const gameAudio = new RetroAudioSystem();