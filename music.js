// Web Audio API Synthesizer for graduation piano & chime melody
class GraduationAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.noteTimer = null;
    this.step = 0;

    // F frequencies (A4 = 440Hz)
    this.notes = {
      'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
      'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
      'C6': 1046.50
    };

    // Emotional nostalgic graduation song melody progression (chords + lead)
    // Inspired by youth memories / Pomp & Circumstance / A Time for Us
    this.score = [
      { note: 'E5', bass: 'C4', dur: 1.2 },
      { note: 'G5', bass: 'G4', dur: 0.8 },
      { note: 'A5', bass: 'A4', dur: 1.5 },
      { note: 'G5', bass: 'E4', dur: 1.0 },
      { note: 'F5', bass: 'F4', dur: 1.2 },
      { note: 'E5', bass: 'C4', dur: 0.8 },
      { note: 'D5', bass: 'G4', dur: 1.6 },
      { note: 'C5', bass: 'C4', dur: 1.8 },
      
      { note: 'E5', bass: 'C4', dur: 1.0 },
      { note: 'F5', bass: 'D4', dur: 0.8 },
      { note: 'G5', bass: 'E4', dur: 1.4 },
      { note: 'C6', bass: 'A4', dur: 1.8 },
      { note: 'B5', bass: 'G4', dur: 1.0 },
      { note: 'A5', bass: 'F4', dur: 1.0 },
      { note: 'G5', bass: 'E4', dur: 1.6 },
      
      { note: 'A5', bass: 'F4', dur: 1.2 },
      { note: 'G5', bass: 'E4', dur: 0.8 },
      { note: 'F5', bass: 'D4', dur: 1.0 },
      { note: 'E5', bass: 'C4', dur: 1.4 },
      { note: 'D5', bass: 'G4', dur: 1.6 },
      { note: 'C5', bass: 'C4', dur: 2.2 }
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playNote(frequency, startTime, duration, type = 'sine', volume = 0.12) {
    if (!this.ctx || !frequency) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, startTime);

    // Warm envelope
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  // Play a chime chord for sound effect (when opening envelope or clicking celebrate)
  playChimeEffect() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const t = this.ctx.currentTime;
    const chord = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chord.forEach((freq, idx) => {
      this.playNote(freq, t + idx * 0.09, 1.8, 'sine', 0.15);
    });
  }

  playCelebrationFanfare() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    const t = this.ctx.currentTime;
    // Fanfare motif
    const notes = [
      { f: 523.25, time: 0, dur: 0.2 },
      { f: 659.25, time: 0.15, dur: 0.2 },
      { f: 783.99, time: 0.3, dur: 0.25 },
      { f: 1046.50, time: 0.5, dur: 0.9 }
    ];
    notes.forEach(n => {
      this.playNote(n.f, t + n.time, n.dur, 'triangle', 0.2);
    });
  }

  startMelodyLoop() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.step = 0;
    this.scheduleNextNote();
  }

  scheduleNextNote() {
    if (!this.isPlaying) return;

    const item = this.score[this.step];
    const now = this.ctx.currentTime;

    // Melody bell note
    if (item.note && this.notes[item.note]) {
      this.playNote(this.notes[item.note], now, item.dur * 1.5, 'triangle', 0.12);
      // Subtle overtone for bell warmth
      this.playNote(this.notes[item.note] * 2, now, item.dur * 0.8, 'sine', 0.04);
    }

    // Soft Bass note
    if (item.bass && this.notes[item.bass]) {
      this.playNote(this.notes[item.bass] / 2, now, item.dur * 2, 'sine', 0.15);
    }

    // Spawn floating note graphic
    if (window.spawnMusicNote) {
      window.spawnMusicNote();
    }

    const nextDelay = item.dur * 1000;
    this.step = (this.step + 1) % this.score.length;

    this.noteTimer = setTimeout(() => {
      this.scheduleNextNote();
    }, nextDelay);
  }

  stop() {
    this.isPlaying = false;
    clearTimeout(this.noteTimer);
  }
}

const audioGraduation = new GraduationAudioEngine();

function toggleAudio() {
  const vinyl = document.getElementById("vinylDisc");
  const statusText = document.getElementById("musicStatusText");

  if (!audioGraduation.isPlaying) {
    audioGraduation.startMelodyLoop();
    vinyl.classList.add("spinning");
    statusText.textContent = "Đang phát";
  } else {
    audioGraduation.stop();
    vinyl.classList.remove("spinning");
    statusText.textContent = "Bật nhạc nền";
  }
}

function spawnMusicNote() {
  const container = document.getElementById("floatingNotes");
  if (!container) return;
  const noteIcons = ['♪', '♫', '♬', '♩', '✨'];
  const note = document.createElement("span");
  note.className = "note";
  note.textContent = noteIcons[Math.floor(Math.random() * noteIcons.length)];
  container.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 2000);
}
