// Parse guest information from URL parameters
function parseInvitationData() {
  const urlParams = new URLSearchParams(window.location.search);
  let guestData = {
    to: "Khách Quý",
    nick: "Khách Quý",
    msg: "Sau những năm tháng học tập, rèn luyện và không ngừng nỗ lực, hành trình thanh xuân dưới mái trường Đại học Kinh doanh và Công nghệ Hà Nội của Hoàng đang đi đến một dấu mốc thật đặc biệt – Lễ Tốt nghiệp Tân Kỹ sư Công nghệ Thông tin.\n\nSự hiện diện và lời chúc của bạn chính là niềm vinh hạnh to lớn và là món quà thanh xuân quý giá nhất đối với Hoàng!",
    fx: "gold-confetti",
    role: "friend"
  };

  // Check encoded data first
  const encoded = urlParams.get('d');
  if (encoded) {
    try {
      const decodedJson = decodeURIComponent(atob(encoded));
      const parsed = JSON.parse(decodedJson);
      guestData = { ...guestData, ...parsed };
    } catch (e) {
      console.warn("Could not decode payload, checking query params", e);
    }
  }

  // Check direct query parameters
  if (urlParams.get('to')) {
    guestData.to = urlParams.get('to');
    guestData.nick = urlParams.get('nick') || guestData.to;
  }
  if (urlParams.get('msg')) {
    guestData.msg = urlParams.get('msg');
  }
  if (urlParams.get('fx')) {
    guestData.fx = urlParams.get('fx');
  }

  return guestData;
}

const currentGuest = parseInvitationData();

document.addEventListener("DOMContentLoaded", () => {
  // Populate guest name into envelope & card
  document.getElementById("envelopeGuestName").textContent = currentGuest.nick || currentGuest.to;
  document.getElementById("peekGuestName").textContent = currentGuest.to;
  document.getElementById("guestFullName").textContent = currentGuest.to;

  // Format message paragraphs
  if (currentGuest.msg) {
    const formattedMsg = currentGuest.msg.replace(/\n\n/g, '</p><p class="letter-paragraph">').replace(/\n/g, '<br>');
    document.getElementById("invitationMessage").innerHTML = formattedMsg;
  }

  // Initialize Particle Background
  initAmbientParticles(currentGuest.fx);

  // Initialize Countdown
  startCountdown();
});

// Open 3D Envelope
let isEnvelopeOpened = false;
function openEnvelope() {
  if (isEnvelopeOpened) return;
  isEnvelopeOpened = true;

  const wrapper = document.getElementById("envelopeWrapper");
  const tapHint = document.getElementById("tapHint");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const invitationContainer = document.getElementById("invitationContainer");

  // Play opening chime
  if (typeof audioGraduation !== 'undefined') {
    audioGraduation.playChimeEffect();
  }

  // Animation step 1: open flap & break seal & Kitty celebrates
  wrapper.classList.add("opening");
  tapHint.style.opacity = '0';

  // Hello Kitty jumps up cheering with 2 arms raised
  const kittyPeeker = document.getElementById("kittyPeeker");
  const kittyCheer = document.getElementById("kittyCheer");
  if (kittyPeeker) kittyPeeker.style.opacity = '0';
  if (kittyCheer) kittyCheer.classList.add("active");

  // Confetti explosion
  triggerOpeningConfetti();

  // Animation step 2: slide card up and transition to full invitation
  setTimeout(() => {
    envelopeScreen.classList.add("opened");
    invitationContainer.classList.add("visible");
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Start background music automatically
    toggleAudio();
  }, 1200);
}

// Confetti blast
function triggerOpeningConfetti() {
  if (typeof confetti === 'function') {
    // Left burst
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0.1, y: 0.6 },
      colors: ['#ffd700', '#fce085', '#38bdf8', '#ffffff', '#e11d48']
    });

    // Right burst
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.6 },
      colors: ['#ffd700', '#fce085', '#38bdf8', '#ffffff', '#e11d48']
    });
  }
}

// Toss Graduation Cap interaction
function tossGraduationCap() {
  if (typeof audioGraduation !== 'undefined') {
    audioGraduation.playCelebrationFanfare();
  }

  if (typeof confetti === 'function') {
    const end = Date.now() + 2500;
    const colors = ['#d4af37', '#ffd700', '#1e3a8a', '#38bdf8', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  // Floating caps animation
  for (let i = 0; i < 8; i++) {
    setTimeout(createFlyingCap, i * 200);
  }
}

function createFlyingCap() {
  const cap = document.createElement("div");
  cap.textContent = "🎓";
  cap.style.position = "fixed";
  cap.style.left = `${Math.random() * 80 + 10}vw`;
  cap.style.bottom = "-50px";
  cap.style.fontSize = `${Math.random() * 25 + 30}px`;
  cap.style.zIndex = "9999";
  cap.style.pointerEvents = "none";
  cap.style.transition = "transform 2.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.2s ease";

  document.body.appendChild(cap);

  requestAnimationFrame(() => {
    cap.style.transform = `translateY(-${Math.random() * 400 + 400}px) rotate(${Math.random() * 360 - 180}deg)`;
    cap.style.opacity = "0";
  });

  setTimeout(() => cap.remove(), 2400);
}

// Countdown Timer to 13:00 on October 16, 2026
function startCountdown() {
  // Target: 2026-10-16 13:00:00 (GMT+7)
  const targetDate = new Date("2026-10-16T13:00:00+07:00").getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("cdDays").textContent = "00";
      document.getElementById("cdHours").textContent = "00";
      document.getElementById("cdMinutes").textContent = "00";
      document.getElementById("cdSeconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cdDays").textContent = String(days).padStart(2, '0');
    document.getElementById("cdHours").textContent = String(hours).padStart(2, '0');
    document.getElementById("cdMinutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("cdSeconds").textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Add to Calendar (.ics Download or Google Calendar)
function addToCalendar() {
  const title = "Lễ Tốt Nghiệp Tân Kỹ Sư CNTT Nguyễn Nhật Hoàng - HUBT";
  const details = "Lễ trao bằng tốt nghiệp Sinh viên Khóa 27 Ngành Công nghệ Thông tin - Tân Kỹ sư Nguyễn Nhật Hoàng.\\nĐịa điểm: Hội trường nhà B - Trường Đại học Kinh doanh và Công nghệ Hà Nội.";
  const location = "Hội trường nhà B, Trường Đại học Kinh doanh và Công nghệ Hà Nội, 29A Ngõ 124 Vĩnh Tuy, Hai Bà Trưng, Hà Nội";
  
  // Format dates: 20261016T060000Z (13h00 VN = 06h00 UTC)
  const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nguyen Nhat Hoang Graduation//VN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
DTSTART:20261016T060000Z
DTEND:20261016T100000Z
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT1D
DESCRIPTION:Nhắc nhở: Lễ tốt nghiệp Nguyễn Nhật Hoàng ngày mai!
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'Le_Tot_Nghiep_Nguyen_Nhat_Hoang.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  alert("Đã tải tệp lịch (.ics) về máy! Bạn hãy mở file để thêm trực tiếp vào Lịch trên điện thoại hoặc máy tính nhé!");
}

// Ambient Background Particles
function initAmbientParticles(theme) {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = 45;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.5 + 1.5,
      speedX: Math.random() * 0.8 - 0.4,
      speedY: Math.random() * 0.7 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      isFlower: i % 2 === 0,
      angle: Math.random() * 360,
      rotSpeed: Math.random() * 0.02 - 0.01
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX;
      p.angle += p.rotSpeed;

      if (p.y > height + 10) {
        p.y = -10;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      if (p.isFlower) {
        // Delicate white/gold youth petal
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 2, p.size, 0, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Golden glowing ember
        ctx.fillStyle = `rgba(255, 215, 0, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#ffd700";
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  draw();
}
