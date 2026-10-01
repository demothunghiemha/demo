// Templates for invitations based on relationship and tone
const messageTemplates = {
  friend: [
    "Hành trình 4 năm đại học tại HUBT của tớ sắp khép lại để mở ra một trang mới. Ngày 16/10/2026 này sẽ là khoảnh khắc thật đặc biệt khi tớ chính thức nhận tấm bằng Kỹ sư Công nghệ Thông tin. Thanh xuân của tớ sẽ trọn vẹn và rực rỡ hơn rất nhiều nếu có sự hiện diện, nụ cười và lời chúc từ cậu. Hẹn gặp cậu tại lễ tốt nghiệp nhé!",
    "Sau bao ngày đêm chạy deadline và những kỳ thi căng thẳng dưới mái trường HUBT, ngày vui nhận bằng tốt nghiệp của tớ đã đến rồi! Rất mong được đón tiếp cậu vào lúc 13h00 ngày 16/10/2026 tại Hội trường nhà B để chúng mình cùng chụp những bức hình thanh xuân đẹp nhất nhé!",
    "Thanh xuân có bạn thật đẹp! Ngày tớ khoác lên mình chiếc áo cử nhân và bước lên bục vinh dự, tớ rất mong có bạn bên cạnh để chia sẻ niềm hạnh phúc này. Hãy đến chung vui cùng tớ nhé!"
  ],
  bestie: [
    "Mày ơi! Vậy là sau 4 năm cùng nhau chia ngọt sẻ bùi, vượt qua muôn vàn đồ án CNTT, tao sắp chính thức trở thành Tân Kỹ Sư rồi! Ngày trọng đại nhất đời sinh viên của tao (16/10/2026), nhất định mày phải có mặt đấy nhé, không có mày là tao dỗi cả đời luôn! Chuẩn bị lên đồ thật đẹp chụp ảnh cùng tao nào!",
    "Tri kỷ ơi! Thanh xuân rực rỡ nhất là vì có mày đồng hành. Ngày 16/10 này tao nhận bằng tốt nghiệp rồi, sự có mặt của mày là món quà quý giá nhất. Hãy đến chứng kiến giây phút tao tung chiếc mũ cử nhân nhé!"
  ],
  teacher: [
    "Kính thưa Thầy/Cô! Lời đầu tiên, em xin gửi lời tri ân sâu sắc nhất tới Thầy/Cô – những người đã luôn tận tâm dìu dắt, truyền dạy tri thức và bồi đắp ước mơ cho em suốt 4 năm học dưới mái trường HUBT. Ngày 16/10/2026 tới đây, em vinh dự được nhận tấm bằng tốt nghiệp Kỹ sư Công nghệ Thông tin Khóa 27. Sự hiện diện và lời chúc của Thầy/Cô sẽ là niềm vinh hạnh to lớn và nguồn động viên vô giá đối với em trên bước đường tương lai.",
    "Em kính mời Thầy/Cô đến dự Lễ tốt nghiệp của em vào lúc 13h00 Thứ Sáu, ngày 16/10/2026 tại Hội trường nhà B. Em xin trân trọng kính mời Thầy/Cô!"
  ],
  family: [
    "Kính thưa Bố Mẹ và cả gia đình! Sau những năm tháng học tập không ngừng nghỉ, sự yêu thương và che chở của gia đình luôn là điểm tựa lớn nhất giúp con chạm tới ước mơ Tân Kỹ Sư CNTT hôm nay. Con trân trọng kính mời gia đình đến tham dự Lễ tốt nghiệp của con vào lúc 13h00 ngày 16/10/2026 tại HUBT, cùng con lưu giữ khoảnh khắc thiêng liêng và tự hào này ạ!",
    "Con kính mời Bố Mẹ và người thân đến chung vui ngày Lễ trao bằng tốt nghiệp của con. Thành quả ngày hôm nay con xin dành tặng Bố Mẹ và gia đình!"
  ],
  brother: [
    "Em chào Anh/Chị! Hành trình sinh viên của em tại HUBT đã đi đến đích với tấm bằng Kỹ sư Công nghệ Thông tin. Em trân trọng kính mời Anh/Chị dành chút thời gian quý báu đến chung vui cùng em vào lúc 13h00 Thứ Sáu, 16/10/2026. Sự hiện diện của Anh/Chị là niềm vinh dự và niềm vui rất lớn của em!",
    "Em rất mong được đón tiếp Anh/Chị tại Hội trường nhà B - HUBT vào ngày 16/10 tới đây. Em cảm ơn Anh/Chị đã luôn ủng hộ em suốt thời gian qua!"
  ],
  junior: [
    "Chào em! Vậy là sau 4 năm gắn bó với giảng đường HUBT, anh sắp chính thức tốt nghiệp và nhận bằng Kỹ sư CNTT Khóa 27 rồi. Anh trân trọng mời em ghé qua Hội trường nhà B lúc 13h00 ngày 16/10/2026 để cùng anh lưu lại những tấm ảnh kỷ niệm thật đẹp nhé!",
    "Rất mong em sẽ đến chung vui cùng anh trong ngày lễ tốt nghiệp đặc biệt này nhé!"
  ],
  colleague: [
    "Chào bạn! Ngày 16/10/2026 tới đây sẽ là một cột mốc đặc biệt khi mình chính thức tốt nghiệp và nhận bằng Kỹ sư Công nghệ Thông tin tại Trường ĐH Kinh doanh và Công nghệ Hà Nội. Mình rất mong bạn sẽ dành thời gian tới chung vui và chia sẻ khoảnh khắc đáng nhớ này cùng mình!",
    "Sự hiện diện của bạn là niềm vinh hạnh to lớn của mình. Trân trọng kính mời bạn!"
  ],
  special: [
    "Gửi người đặc biệt nhất của anh! Trong suốt hành trình đại học nhiều thử thách vừa qua, có em luôn là điều may mắn và tuyệt vời nhất. Ngày 16/10/2026, khi anh chính thức bước lên nhận tấm bằng Kỹ sư CNTT, khoảnh khắc ấy sẽ chỉ thực sự trọn vẹn và ý nghĩa khi có em ở bên chứng kiến và mỉm cười cùng anh. Hãy đến với anh ngày hôm ấy nhé, vì thanh xuân của anh có em thật đẹp! ❤️",
    "Ngày trọng đại nhất của anh, anh muốn em là người đầu tiên nhìn thấy anh trong chiếc áo cử nhân. Hẹn gặp em tại lễ tốt nghiệp ngày 16/10 nhé!"
  ]
};

// Current active invitation data
let currentInvite = {
  name: "Bạn Thảo",
  message: "",
  targetDomain: "https://demothunghiemha.github.io/demo",
  effect: "kitty-cute",
  role: "friend",
  url: ""
};

// Storage key
const STORAGE_KEY = "hoang_grad_invitations_history";

document.addEventListener("DOMContentLoaded", () => {
  // Load saved domain if any
  const savedDomain = localStorage.getItem("hoang_grad_target_domain");
  if (savedDomain) {
    document.getElementById("targetDomain").value = savedDomain;
  }

  // Set initial template
  onRelationshipChange();

  // Load history
  renderHistory();

  // Initial generation with default name
  document.getElementById("recipientName").value = "Bạn Thảo";
  generateInvite();
});

// When relationship changes, update message
function onRelationshipChange() {
  const role = document.getElementById("relationship").value;
  const templates = messageTemplates[role] || messageTemplates.friend;
  const randomMsg = templates[0];
  document.getElementById("customMessage").value = randomMsg;
}

// When tone changes
function onToneChange() {
  regenerateMessage();
}

// Cycle to next template
let templateIndex = 0;
function regenerateMessage() {
  const role = document.getElementById("relationship").value;
  const templates = messageTemplates[role] || messageTemplates.friend;
  templateIndex = (templateIndex + 1) % templates.length;
  document.getElementById("customMessage").value = templates[templateIndex];
}

// Reset target domain
function resetDomain() {
    document.getElementById("targetDomain").value = "https://demothunghiemha.github.io/demo";
    localStorage.removeItem("hoang_grad_target_domain");
    showToast("Đã khôi phục tên miền mặc định (https://demothunghiemha.github.io/demo)");
}

// Generate the invite URL
function generateInvite() {
  const name = document.getElementById("recipientName").value.trim();
  if (!name) {
    showToast("Vui lòng nhập tên người nhận!");
    document.getElementById("recipientName").focus();
    return;
  }

  const role = document.getElementById("relationship").value;
  const message = document.getElementById("customMessage").value.trim();
  const nickname = document.getElementById("guestNickname").value.trim();
  const effect = document.getElementById("effectTheme").value;
  let domain = document.getElementById("targetDomain").value.trim();

  // Clean domain ending slash
  if (domain.endsWith("/")) {
    domain = domain.slice(0, -1);
  }
  localStorage.setItem("hoang_grad_target_domain", domain);

  // Encode payload safely
  const payload = {
    to: name,
    nick: nickname || name,
    msg: message,
    role: role,
    fx: effect,
    author: "Nguyễn Nhật Hoàng",
    school: "Trường Đại học Kinh doanh và Công nghệ Hà Nội",
    major: "Tân Kỹ sư Công nghệ Thông tin - Khóa 27",
    time: "13h00 Thứ Sáu, ngày 16/10/2026",
    loc: "Hội trường nhà B - Trường ĐH Kinh doanh và Công nghệ Hà Nội",
    createdAt: new Date().toISOString()
  };

  // Convert payload to utf8 base64
  const jsonStr = JSON.stringify(payload);
  const encodedData = btoa(encodeURIComponent(jsonStr));

  // Build target URL
  // We use query parameter `?d=` containing the encoded payload for clean, full data transfer
  // Also provide standard params fallback `to=` and `msg=`
  const targetUrl = `${domain}/?to=${encodeURIComponent(name)}&d=${encodedData}`;

  currentInvite = {
    name: name,
    nickname: nickname || name,
    message: message,
    role: role,
    effect: effect,
    url: targetUrl,
    timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' })
  };

  // Update Preview UI
  document.getElementById("previewGuestName").textContent = name;
  document.getElementById("previewTextSnippet").textContent = `"${message}"`;
  document.getElementById("generatedUrl").value = targetUrl;
  document.getElementById("btnTestOpen").href = targetUrl;
  document.getElementById("resultSubtitle").innerHTML = `Đã sản sinh thư mời độc quyền cho: <strong style="color:#e6ca65">${name}</strong>`;

  // Save to History
  saveToHistory(currentInvite);
  renderHistory();

  showToast(`Đã tạo thành công thư mời cho ${name}!`);
}

// Copy invitation URL
function copyInvitationLink() {
  const urlInput = document.getElementById("generatedUrl");
  if (!urlInput.value) return;

  navigator.clipboard.writeText(urlInput.value).then(() => {
    showToast("Đã sao chép link thư mời vào bộ nhớ tạm!");
    const btn = document.getElementById("btnCopyLink");
    const originalText = btn.innerHTML;
    btn.innerHTML = `<span class="icon">✅</span> Đã chép!`;
    setTimeout(() => {
      btn.innerHTML = originalText;
    }, 2000);
  }).catch(err => {
    urlInput.select();
    document.execCommand("copy");
    showToast("Đã sao chép link thư mời!");
  });
}

// Copy prepared Zalo/Messenger message
function copyPreparedMessage() {
  if (!currentInvite.url) return;

  const textToCopy = `🎓 THƯ MỜI LỄ TỐT NGHIỆP TÂN KỸ SƯ CNTT - NGUYỄN NHẬT HOÀNG
━━━━━━━━━━━━━━━━━━━
✨ Trân trọng kính mời: ${currentInvite.name}

"${currentInvite.message}"

⏰ Thời gian: 13h00 (Thứ Sáu) ngày 16/10/2026
📍 Địa điểm: Hội trường nhà B - Trường Đại học Kinh doanh và Công nghệ Hà Nội

💌 Mời bạn chạm vào liên kết dưới đây để mở bức thư mời 3D trang trọng dành riêng cho bạn:
👉 ${currentInvite.url}

Rất mong được đón tiếp bạn trong ngày vui thanh xuân của Hoàng! ❤️`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    showToast(`Đã sao chép toàn bộ lời mời gửi Zalo/Messenger cho ${currentInvite.name}!`);
  }).catch(() => {
    showToast("Vui lòng sao chép link thư mời ở ô bên trên!");
  });
}

// QR Code Modal
let qrInstance = null;
function showQrModal() {
  if (!currentInvite.url) return;

  document.getElementById("qrModalGuest").textContent = `Dành riêng cho: ${currentInvite.name}`;
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  qrInstance = new QRCode(qrContainer, {
    text: currentInvite.url,
    width: 220,
    height: 220,
    colorDark: "#0c1f38",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  document.getElementById("qrModal").classList.add("active");
}

function closeQrModal(event) {
  if (!event || event.target.id === "qrModal" || event.target.classList.contains("modal-close") || event.target.classList.contains("btn-outline-sm")) {
    document.getElementById("qrModal").classList.remove("active");
  }
}

function downloadQrCode() {
  const qrCanvas = document.querySelector("#qrcode canvas");
  const qrImg = document.querySelector("#qrcode img");

  let imageUri = "";
  if (qrCanvas) {
    imageUri = qrCanvas.toDataURL("image/png");
  } else if (qrImg) {
    imageUri = qrImg.src;
  }

  if (imageUri) {
    const downloadLink = document.createElement("a");
    downloadLink.download = `QR_ThuMoi_${currentInvite.name.replace(/\s+/g, '_')}.png`;
    downloadLink.href = imageUri;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    showToast("Đã tải mã QR Code về máy!");
  } else {
    showToast("Chưa thể xuất ảnh mã QR.");
  }
}

// History Management
function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveToHistory(invite) {
  let list = getHistory();
  // Filter duplicate name
  list = list.filter(item => item.name !== invite.name);
  list.unshift(invite);
  if (list.length > 20) list = list.slice(0, 20); // Keep last 20
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderHistory() {
  const list = getHistory();
  const container = document.getElementById("historyList");
  const countEl = document.getElementById("historyCount");
  countEl.textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `<p class="empty-history">Chưa có thư mời nào. Hãy nhập tên ở bên trái để sản sinh thư mời nhé!</p>`;
    return;
  }

  container.innerHTML = list.map((item, idx) => `
    <div class="history-item">
      <div class="history-meta">
        <strong>${item.name}</strong>
        <span>Tạo lúc: ${item.timestamp || 'Hôm nay'}</span>
      </div>
      <div class="history-actions">
        <a href="${item.url}" target="_blank" class="btn-icon-sm" title="Mở xem thư mời">🚀</a>
        <button class="btn-icon-sm" onclick="copyHistoryLink('${idx}')" title="Sao chép link">📋</button>
      </div>
    </div>
  `).join('');
}

window.copyHistoryLink = function(index) {
  const list = getHistory();
  const item = list[index];
  if (item && item.url) {
    navigator.clipboard.writeText(item.url).then(() => {
      showToast(`Đã sao chép link thư mời của ${item.name}!`);
    });
  }
};

function clearHistory() {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử thư mời đã tạo?")) {
    localStorage.removeItem(STORAGE_KEY);
    renderHistory();
    showToast("Đã xóa sạch lịch sử.");
  }
}

// Toast
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toastMessage");
  msgEl.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
