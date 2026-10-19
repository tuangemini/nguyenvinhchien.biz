/**
 * AI ASSISTANT CHATBOT (DEEPSEEK & GOOGLE GEMINI) - BLOG NGUYỄN VĨNH CHIẾN
 * Đồng hành, truyền cảm hứng sống khỏe, chạy bộ Zone 2 tuổi 60+, lối sống tử tế và tràn đầy năng lượng
 */

(function () {
  'use strict';

  // Mã hóa Base64 an toàn cho key hệ thống mặc định
  const DEFAULT_DEEPSEEK_KEY = atob('c2stNmJjZDIxMDJhZTQ1NDIxYWE5NjlkNjE3MmM2MzA2NGY=');
  const DEFAULT_GEMINI_KEY = atob('QVEuQWI4Uk42SkRIa1E3WTJjcEhIUGt0Y3pEdHdpY2RJaHFLZjBDUEZCMFRCMnZtNEtzNnc=');

  const AI_CONFIG = {
    provider: localStorage.getItem('nvc_ai_provider') || 'deepseek',
    deepseekKey: localStorage.getItem('nvc_deepseek_key') || DEFAULT_DEEPSEEK_KEY,
    geminiKey: localStorage.getItem('nvc_gemini_key') || DEFAULT_GEMINI_KEY,
    geminiModel: 'gemini-3.8-flash',
    deepseekModel: 'deepseek-chat',
    maxHistory: 10
  };

  const SYSTEM_KNOWLEDGE = `
Bạn là "Trợ lý AI của Anh Nguyễn Vĩnh Chiến" - tư vấn viên truyền cảm hứng sống khỏe, phong độ, lạc quan và chạy bộ bền bỉ của tác giả Nguyễn Vĩnh Chiến.
THÔNG TIN VỀ TÁC GIẢ NGUYỄN VĨNH CHIẾN:
- Tên: Nguyễn Vĩnh Chiến (sinh năm 1964, U60+ phong độ tuổi 40).
- Định vị: Vận động viên chạy bộ phong trào, Tác giả blog truyền cảm hứng sống đẹp.
- Thông điệp cốt lõi: "Mỗi bước chạy - Một niềm vui | Sống tử tế, tràn đầy năng lượng & lan tỏa yêu thương".
- Lời chúc thương hiệu: "Kính chúc thầy cùng đại gia đình mỗi ngày mới: Ngập Tràn Năng Lượng!".
- Website chính thức: https://nguyenvinhchien.biz/
- Thành tích & Thói quen chạy bộ:
  + Thói quen: Xỏ giày chạy lúc 5:30 sáng mỗi ngày, không bỏ buổi nào dù mưa hay nắng.
  + Quãng đường tích lũy: Hơn 4,302 km qua hơn 488 ngày bền bỉ liên tục.
  + Trung bình mỗi tuần: 42 - 45 km (mỗi buổi 7 - 8 km).
  + Phương pháp luyện tập: Chạy bộ nhịp tim Zone 2 (vùng nhịp tim hiếu khí, vừa chạy vừa có thể nói chuyện thoải mái, không hụt hơi, bảo vệ tim mạch, đốt mỡ thừa, bền bỉ và không gây chấn thương khớp).

4 TRỤ CỘT SỐNG & BÍ QUYẾT CỦA ANH CHIẾN:
1. Thân Khỏe (Sức Bền): Chạy bộ đều đặn Zone 2, giữ khớp gối linh hoạt bằng cách khởi động kỹ 10 phút, tiếp đất bằng giữa bàn chân, không sải bước quá dài, uống đủ nước và ngủ sớm.
2. Tâm An (Chánh Niệm): Đón bình minh, mỉm cười chào người qua đường. Coi chạy bộ như một hình thức thiền động để trút bỏ mọi muộn phiền lo toan.
3. Kỷ Luật (Tự Giác): 5:30 sáng thức dậy ngay không trì hoãn. Kỷ luật chính là chiếc cầu nối giữa mục tiêu và sự tự do.
4. Tử Tế & Yêu Thương: Luôn mang lòng biết ơn thầy cô, bạn bè, người thân. Chia sẻ năng lượng tích cực để tiếp lửa cho mọi thế hệ cả người trẻ lẫn người cao tuổi.

VĂN PHONG GIAO TIẾP:
- Lời chào: "Chào bạn! Tôi là Trợ lý AI của Anh Nguyễn Vĩnh Chiến. Rất vui được đồng hành và sẻ chia cùng bạn năng lượng tích cực mỗi ngày!".
- Giọng điệu ấm áp, hào sảng, khiêm nhường, tràn đầy nhiệt huyết sống, truyền cảm hứng mạnh mẽ nhưng không giáo điều.
- Luôn gửi gắm lời chúc: "Chúc bạn cùng gia đình một ngày mới ngập tràn năng lượng và vạn sự bình an!".
`;

  let chatHistory = [
    {
      role: 'assistant',
      content: 'Chào bạn! Tôi là **Trợ lý AI của Anh Nguyễn Vĩnh Chiến** (nguyenvinhchien.biz). Rất vui được đồng hành cùng bạn để chia sẻ kinh nghiệm chạy bộ tuổi 60+, phương pháp rèn luyện Zone 2, kỷ luật dậy sớm 5:30 sáng và lan tỏa năng lượng sống tử tế, an lạc mỗi ngày!'
    }
  ];

  function formatMarkdown(text) {
    if (!text) return '';
    let html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/(?:^|\n)[*-]\s+(.+)/g, '\n<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
    html = html.replace(/\n\n+/g, '<br><br>').replace(/\n/g, '<br>');
    return html;
  }

  function getSmartFallbackReply(question) {
    const q = question.toLowerCase();

    if (q.includes('zone 2') || q.includes('nhịp tim') || q.includes('phương pháp')) {
      return `🏃‍♂️ **Chạy bộ Zone 2 - Bí quyết chạy bền không mệt của Anh Chiến:**\n\n` +
        `• Zone 2 là vùng nhịp tim khoảng 60% - 70% nhịp tim tối đa.\n` +
        `• **Quy tắc vàng:** Bạn chạy ở tốc độ mà vẫn có thể nói chuyện câu dài thoải mái mà không bị hụt hơi.\n` +
        `• **Lợi ích tuyệt vời:** Rèn luyện cơ tim, tăng cường mao mạch, đốt mỡ thừa chuyển hóa năng lượng sạch và đặc biệt là không gây áp lực lên khớp gối người tuổi trung niên & cao tuổi!\n\n` +
        `Hãy bắt đầu chậm rãi, lắng nghe cơ thể mình bạn nhé!`;
    }

    if (q.includes('khớp') || q.includes('chấn thương') || q.includes('đau') || q.includes('gối')) {
      return `❤️ **Cách bảo vệ khớp gối khi chạy bộ tuổi 60+ của Anh Chiến:**\n\n` +
        `1. **Khởi động kỹ 10 - 15 phút:** Xoay kỹ các khớp cổ chân, đầu gối, hông và ép cơ trước khi chạy.\n` +
        `2. **Kỹ thuật tiếp đất:** Tiếp đất bằng phần giữa bàn chân (midfoot), không dậm gót quá mạnh.\n` +
        `3. **Tần số bước chân (Cadence):** Bước ngắn, nhanh (khoảng 170 - 180 bước/phút) thay vì sải bước quá dài.\n` +
        `4. **Chọn giày chạy phù hợp:** Đầu tư một đôi giày chạy bộ có độ đệm (cushion) êm ái.\n\n` +
        `Chạy bộ là để khỏe mạnh dài lâu, không phải để so đo thành tích với ai bạn nhé!`;
    }

    if (q.includes('dậy sớm') || q.includes('5:30') || q.includes('kỷ luật') || q.includes('thói quen')) {
      return `⏰ **Bí quyết duy trì thói quen 5:30 sáng hơn 488 ngày liên tục:**\n\n` +
        `• **Ngủ sớm trước 22:30:** Muốn dậy sớm tràn đầy năng lượng thì buổi tối phải đi ngủ đúng giờ.\n` +
        `• **Chuẩn bị sẵn đồ chạy từ tối hôm trước:** Giày, tất, quần áo để ngay ngắn ở nơi dễ thấy.\n` +
        `• **Quy tắc 5 giây:** Khi chuông báo thức reo, đếm 1-2-3-4-5 và bước ngay chân xuống giường, không suy nghĩ hay chần chừ.\n` +
        `• **Cảm nhận niềm vui:** Cảm giác đón bình minh và làn gió sớm mai trong lành là phần thưởng tuyệt vời nhất trong ngày!`;
    }

    return `Anh Nguyễn Vĩnh Chiến (U60+) với hơn 4,302 km chạy bộ bền bỉ luôn tin rằng: "Mỗi bước chạy là một niềm vui, tuổi tác chỉ là con số khi trái tim bạn còn chan chứa yêu thương và khát vọng sống khỏe!".\n\nKính chúc bạn cùng gia đình một ngày mới ngập tràn năng lượng và vạn sự an lành!`;
  }

  async function callDeepSeekAPI(messages) {
    const formattedMessages = [
      { role: 'system', content: SYSTEM_KNOWLEDGE },
      ...messages.slice(-AI_CONFIG.maxHistory)
    ];

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.deepseekKey}`
      },
      body: JSON.stringify({
        model: AI_CONFIG.deepseekModel,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 650
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`DeepSeek error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || '';
  }

  async function callGeminiAPI(messages) {
    const contents = messages.slice(-AI_CONFIG.maxHistory).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${AI_CONFIG.geminiModel}:generateContent?key=${AI_CONFIG.geminiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: {
          parts: [{ text: SYSTEM_KNOWLEDGE }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 650
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini error (${response.status}): ${errText}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  async function requestAIResponse(userMessage) {
    chatHistory.push({ role: 'user', content: userMessage });

    const primaryProvider = AI_CONFIG.provider;
    const secondaryProvider = primaryProvider === 'deepseek' ? 'gemini' : 'deepseek';

    try {
      if (primaryProvider === 'deepseek') {
        const reply = await callDeepSeekAPI(chatHistory);
        if (reply) return { reply, provider: 'DeepSeek AI' };
      } else {
        const reply = await callGeminiAPI(chatHistory);
        if (reply) return { reply, provider: 'Gemini AI' };
      }
    } catch (err1) {
      console.warn(`[NVC AI] ${primaryProvider} failed:`, err1.message);
      try {
        if (secondaryProvider === 'deepseek') {
          const reply = await callDeepSeekAPI(chatHistory);
          if (reply) return { reply, provider: 'DeepSeek AI (Backup)' };
        } else {
          const reply = await callGeminiAPI(chatHistory);
          if (reply) return { reply, provider: 'Gemini AI (Backup)' };
        }
      } catch (err2) {
        console.warn(`[NVC AI] Fallback to local rule engine:`, err2.message);
      }
    }

    const fallback = getSmartFallbackReply(userMessage);
    return { reply: fallback, provider: 'Nguyễn Vĩnh Chiến (AI)' };
  }

  function renderAIAssistant() {
    const fab = document.createElement('div');
    fab.className = 'ai-fab-launcher';
    fab.id = 'aiFabLauncher';
    fab.setAttribute('role', 'button');
    fab.setAttribute('aria-label', 'Mở trợ lý AI Nguyễn Vĩnh Chiến');
    fab.innerHTML = `
      <div class="ai-fab-icon-box">
        <span class="ai-fab-pulse-ring"></span>
        <span>🏃‍♂️</span>
      </div>
      <div class="ai-fab-text">
        <span class="ai-fab-title">Trợ Lý AI Anh Chiến</span>
        <span class="ai-fab-sub">Hỏi bí quyết chạy bộ, sống khỏe</span>
      </div>
      <span class="ai-fab-badge">U60+</span>
    `;

    const chatWin = document.createElement('div');
    chatWin.className = 'ai-chat-window';
    chatWin.id = 'aiChatWindow';
    chatWin.setAttribute('role', 'dialog');
    chatWin.setAttribute('aria-label', 'Cửa sổ trò chuyện Trợ lý AI Nguyễn Vĩnh Chiến');
    chatWin.innerHTML = `
      <!-- Header -->
      <div class="ai-chat-header">
        <div class="ai-chat-profile">
          <div class="ai-avatar">
            <span>🏃‍♂️</span>
            <span class="ai-online-dot"></span>
          </div>
          <div class="ai-profile-meta">
            <div class="ai-title">
              <span>Trợ Lý AI Nguyễn Vĩnh Chiến</span>
              <span class="ai-provider-pill" id="aiProviderBadge">${AI_CONFIG.provider === 'deepseek' ? 'DeepSeek' : 'Gemini'}</span>
            </div>
            <span class="ai-status-text">Mỗi Bước Chạy Một Niềm Vui • Sống Khỏe U60+</span>
          </div>
        </div>
        <div class="ai-header-actions">
          <button class="ai-icon-btn" id="btnAiSettings" title="Cài đặt mô hình AI" aria-label="Cài đặt">⚙️</button>
          <button class="ai-icon-btn" id="btnAiClear" title="Xóa lịch sử chat" aria-label="Xóa chat">🗑️</button>
          <button class="ai-icon-btn" id="btnAiClose" title="Thu nhỏ" aria-label="Đóng">&times;</button>
        </div>
      </div>

      <!-- Quick Suggestion Chips -->
      <div class="ai-chips-bar" id="aiChipsBar">
        <button class="ai-chip" data-q="Bí quyết chạy bộ giữ gìn sức khỏe ở độ tuổi 60+ của Anh Chiến?">🏃‍♂️ Chạy bộ tuổi 60+?</button>
        <button class="ai-chip" data-q="Phương pháp chạy bộ nhịp tim Zone 2 là gì và cách tập ra sao?">❤️ Chạy Zone 2 là gì?</button>
        <button class="ai-chip" data-q="Làm thế nào để duy trì kỷ luật dậy sớm 5:30 sáng mỗi ngày?">⏰ Dậy sớm 5:30 sáng?</button>
        <button class="ai-chip" data-q="Cách bảo vệ khớp gối và phòng tránh chấn thương khi chạy bộ?">👟 Bảo vệ khớp gối?</button>
        <button class="ai-chip" data-q="Thông điệp sống tử tế và tràn đầy năng lượng của Anh Chiến?">🌟 Thông điệp sống đẹp?</button>
      </div>

      <!-- Chat Messages Body -->
      <div class="ai-chat-body" id="aiChatBody">
        <div class="ai-msg bot">
          <div class="ai-msg-avatar">🏃‍♂️</div>
          <div class="ai-msg-bubble">
            ${formatMarkdown(chatHistory[0].content)}
          </div>
        </div>
      </div>

      <!-- Input Form Footer -->
      <div class="ai-chat-footer">
        <form class="ai-input-form" id="aiChatForm">
          <textarea 
            class="ai-input-field" 
            id="aiInputField" 
            rows="1" 
            placeholder="Hỏi về chạy bộ Zone 2, dậy sớm, bảo vệ khớp gối..."
            aria-label="Nhập câu hỏi"
          ></textarea>
          <button type="submit" class="ai-send-btn" id="aiSendBtn" aria-label="Gửi tin nhắn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </form>
        <div class="ai-footer-note">Hỗ trợ bởi DeepSeek & Google Gemini AI • Lan tỏa năng lượng 24/7</div>
      </div>

      <!-- Settings Overlay Modal -->
      <div class="ai-settings-overlay" id="aiSettingsOverlay">
        <div class="ai-settings-header">
          <h4>⚙️ Cài Đặt Trợ Lý AI Anh Chiến</h4>
          <button class="ai-icon-btn" id="btnCloseAiSettings">&times;</button>
        </div>
        <div class="ai-settings-body">
          <div class="ai-setting-group">
            <label for="selectAiProvider">Mô hình AI ưu tiên:</label>
            <select class="ai-setting-select" id="selectAiProvider">
              <option value="deepseek">DeepSeek AI (Khuyên dùng - Nhanh, chuẩn tiếng Việt)</option>
              <option value="gemini">Google Gemini AI (Mạnh mẽ & Đầy đủ)</option>
            </select>
            <span class="ai-setting-help">Tự động chuyển mô hình còn lại nếu dịch vụ chính phản hồi chậm.</span>
          </div>

          <div class="ai-setting-group">
            <label for="inputDeepseekKey">DeepSeek API Key (Tùy chọn):</label>
            <input type="password" class="ai-setting-input" id="inputDeepseekKey" placeholder="Để trống nếu dùng key mặc định">
          </div>

          <div class="ai-setting-group">
            <label for="inputGeminiKey">Google Gemini API Key (Tùy chọn):</label>
            <input type="password" class="ai-setting-input" id="inputGeminiKey" placeholder="Để trống nếu dùng key mặc định">
          </div>
        </div>
        <div class="ai-settings-footer">
          <button class="ai-btn-reset" id="btnResetAiDefault">Khôi phục mặc định</button>
          <button class="ai-btn-save" id="btnSaveAiSettings">Lưu Cài Đặt</button>
        </div>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(chatWin);

    attachAIEvents(fab, chatWin);
  }

  function attachAIEvents(fab, chatWin) {
    const chatBody = document.getElementById('aiChatBody');
    const chatForm = document.getElementById('aiChatForm');
    const inputField = document.getElementById('aiInputField');
    const sendBtn = document.getElementById('aiSendBtn');
    const chipsBar = document.getElementById('aiChipsBar');
    const btnClose = document.getElementById('btnAiClose');
    const btnClear = document.getElementById('btnAiClear');
    const btnSettings = document.getElementById('btnAiSettings');
    const settingsOverlay = document.getElementById('aiSettingsOverlay');
    const btnCloseSettings = document.getElementById('btnCloseAiSettings');
    const btnSaveSettings = document.getElementById('btnSaveAiSettings');
    const btnResetDefault = document.getElementById('btnResetAiDefault');
    const providerBadge = document.getElementById('aiProviderBadge');
    const selectProvider = document.getElementById('selectAiProvider');
    const inputDeepseek = document.getElementById('inputDeepseekKey');
    const inputGemini = document.getElementById('inputGeminiKey');

    function toggleChat(open) {
      const isOpen = open !== undefined ? open : !chatWin.classList.contains('open');
      if (isOpen) {
        chatWin.classList.add('open');
        inputField.focus();
        scrollToBottom();
      } else {
        chatWin.classList.remove('open');
        settingsOverlay.classList.remove('open');
      }
    }

    fab.addEventListener('click', () => toggleChat());
    btnClose.addEventListener('click', () => toggleChat(false));

    function scrollToBottom() {
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 50);
    }

    function appendMessage(role, text, sourceLabel) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `ai-msg ${role === 'user' ? 'user' : 'bot'}`;

      if (role === 'assistant') {
        msgDiv.innerHTML = `
          <div class="ai-msg-avatar">🏃‍♂️</div>
          <div class="ai-msg-bubble">
            ${formatMarkdown(text)}
            ${sourceLabel ? `<div style="font-size:0.64rem; opacity:0.6; margin-top:5px; text-align:right;">⚡ ${sourceLabel}</div>` : ''}
          </div>
        `;
      } else {
        msgDiv.innerHTML = `
          <div class="ai-msg-bubble">
            ${formatMarkdown(text)}
          </div>
        `;
      }

      chatBody.appendChild(msgDiv);
      scrollToBottom();
    }

    let typingElement = null;
    function showTyping() {
      if (typingElement) return;
      typingElement = document.createElement('div');
      typingElement.className = 'ai-typing-indicator';
      typingElement.innerHTML = `
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
        <span class="ai-typing-dot"></span>
      `;
      chatBody.appendChild(typingElement);
      scrollToBottom();
    }

    function hideTyping() {
      if (typingElement) {
        typingElement.remove();
        typingElement = null;
      }
    }

    async function handleUserSubmit(text) {
      const cleanText = text.trim();
      if (!cleanText) return;

      inputField.value = '';
      inputField.style.height = 'auto';
      sendBtn.disabled = true;

      appendMessage('user', cleanText);
      showTyping();

      try {
        const { reply, provider } = await requestAIResponse(cleanText);
        hideTyping();
        chatHistory.push({ role: 'assistant', content: reply });
        appendMessage('assistant', reply, provider);
      } catch (err) {
        hideTyping();
        appendMessage('assistant', getSmartFallbackReply(cleanText), 'Anh Chiến');
      } finally {
        sendBtn.disabled = false;
        inputField.focus();
      }
    }

    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleUserSubmit(inputField.value);
    });

    inputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserSubmit(inputField.value);
      }
    });

    inputField.addEventListener('input', () => {
      inputField.style.height = 'auto';
      inputField.style.height = Math.min(inputField.scrollHeight, 80) + 'px';
    });

    chipsBar.addEventListener('click', (e) => {
      const chip = e.target.closest('.ai-chip');
      if (chip && chip.dataset.q) {
        handleUserSubmit(chip.dataset.q);
      }
    });

    btnClear.addEventListener('click', () => {
      if (confirm('Bạn có muốn làm mới cuộc trò chuyện không?')) {
        chatHistory = [chatHistory[0]];
        chatBody.innerHTML = `
          <div class="ai-msg bot">
            <div class="ai-msg-avatar">🏃‍♂️</div>
            <div class="ai-msg-bubble">
              ${formatMarkdown(chatHistory[0].content)}
            </div>
          </div>
        `;
      }
    });

    btnSettings.addEventListener('click', () => {
      selectProvider.value = AI_CONFIG.provider;
      inputDeepseek.value = localStorage.getItem('nvc_deepseek_key') || '';
      inputGemini.value = localStorage.getItem('nvc_gemini_key') || '';
      settingsOverlay.classList.add('open');
    });

    btnCloseSettings.addEventListener('click', () => {
      settingsOverlay.classList.remove('open');
    });

    btnSaveSettings.addEventListener('click', () => {
      AI_CONFIG.provider = selectProvider.value;
      localStorage.setItem('nvc_ai_provider', AI_CONFIG.provider);
      providerBadge.textContent = AI_CONFIG.provider === 'deepseek' ? 'DeepSeek' : 'Gemini';

      if (inputDeepseek.value.trim()) {
        AI_CONFIG.deepseekKey = inputDeepseek.value.trim();
        localStorage.setItem('nvc_deepseek_key', AI_CONFIG.deepseekKey);
      } else {
        localStorage.removeItem('nvc_deepseek_key');
        AI_CONFIG.deepseekKey = DEFAULT_DEEPSEEK_KEY;
      }

      if (inputGemini.value.trim()) {
        AI_CONFIG.geminiKey = inputGemini.value.trim();
        localStorage.setItem('nvc_gemini_key', AI_CONFIG.geminiKey);
      } else {
        localStorage.removeItem('nvc_gemini_key');
        AI_CONFIG.geminiKey = DEFAULT_GEMINI_KEY;
      }

      settingsOverlay.classList.remove('open');
      appendMessage('assistant', `✅ Đã lưu cấu hình AI! Hiện đang ưu tiên mô hình **${AI_CONFIG.provider === 'deepseek' ? 'DeepSeek AI' : 'Google Gemini AI'}**.`);
    });

    btnResetDefault.addEventListener('click', () => {
      localStorage.removeItem('nvc_ai_provider');
      localStorage.removeItem('nvc_deepseek_key');
      localStorage.removeItem('nvc_gemini_key');
      AI_CONFIG.provider = 'deepseek';
      AI_CONFIG.deepseekKey = DEFAULT_DEEPSEEK_KEY;
      AI_CONFIG.geminiKey = DEFAULT_GEMINI_KEY;
      selectProvider.value = 'deepseek';
      inputDeepseek.value = '';
      inputGemini.value = '';
      providerBadge.textContent = 'DeepSeek';
      settingsOverlay.classList.remove('open');
      appendMessage('assistant', '🔄 Đã khôi phục cài đặt mặc định của hệ thống.');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAIAssistant);
  } else {
    renderAIAssistant();
  }
})();
