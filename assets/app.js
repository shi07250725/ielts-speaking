/* 雅思口语题库 · 交互逻辑 */
(function () {
  const BANK = window.QUESTION_BANK || { topics: [] };
  const TOPICS = BANK.topics || [];

  const $ = (s) => document.querySelector(s);

  // 以 file:// 打开时部分浏览器会禁用 localStorage，这里做降级保护
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* 忽略 */ } }
  };

  // 题目身份：顺序即筛选 pills / 统计行 / 列表排序的优先级
  const STATUS = ["新题", "保留题", "必备题"];
  const STATUS_CLS = {
    "必备题": "st-must", "新题": "st-new", "保留题": "st-keep"
  };

  // 时间段：来自 data.js 的 periods（约定：数组从新到旧排列，最新季度在前），月份归属据此判断
  const PERIODS = (BANK.periods && BANK.periods.length) ? BANK.periods : [
    { label: "9-12月", months: [9, 10, 11, 12] },
    { label: "5-8月", months: [5, 6, 7, 8] }
  ];
  const YEAR = BANK.year || new Date().getFullYear();
  const periodOf = (m) => {
    const p = PERIODS.find((x) => x.months.indexOf(Number(m)) > -1);
    return p ? p.label : PERIODS[0].label;
  };
  // 默认时段：最新的有内容的时段（PERIODS 从新到旧，取第一个有内容的）
  const defaultPeriod = () => {
    for (let i = 0; i < PERIODS.length; i++) {
      if (TOPICS.some((t) => periodOf(t.month) === PERIODS[i].label)) return PERIODS[i].label;
    }
    return PERIODS[0].label;
  };

  const state = {
    q: "",
    period: defaultPeriod(),
    part: "all",
    cat: "all",
    status: "all",
    practice: store.get("ielts-practice") === "1"
  };

  /* ---------- 工具 ---------- */
  const escapeHtml = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  // [[英文|中文]] → 高亮 span
  const HL_RE = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  function renderRich(text) {
    return escapeHtml(text).replace(HL_RE, (_, en, cn) =>
      `<span class="hl" tabindex="0" data-tip="${escapeHtml(cn)}">${en}</span>`
    );
  }
  /* ---------- 录音 / 视频 ---------- */
  const VIDEO_RE = /\.(mp4|mov|webm|m4v)$/i;
  const ICON_PLAY =
    '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4.8 2.9 12.6 8 4.8 13.1z" fill="#fff"/></svg>';
  const ICON_PAUSE =
    '<svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><rect x="4.2" y="3" width="3" height="10" rx="1" fill="#fff"/><rect x="8.8" y="3" width="3" height="10" rx="1" fill="#fff"/></svg>';
  const fmtTime = (s) => {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return m + ":" + String(ss).padStart(2, "0");
  };

  function normMedia(m) {
    if (!m) return [];
    const arr = Array.isArray(m) ? m : [m];
    return arr
      .map((x) => (typeof x === "string" ? { file: x } : x))
      .filter((x) => x && x.file);
  }

  function playerHtml(item) {
    const file = item.file;
    const label = item.label || "播放录音";
    if (VIDEO_RE.test(file)) {
      return `<div class="player player-video">
        <div class="p-name">${escapeHtml(label)}</div>
        <video controls preload="metadata" src="${escapeHtml(file)}"></video>
      </div>`;
    }
    return `<div class="player" data-src="${escapeHtml(file)}">
      <button class="p-btn" type="button" title="播放 / 暂停">${ICON_PLAY}</button>
      <div class="p-main">
        <div class="p-row">
          <span class="p-name">${escapeHtml(label)}</span>
          <span class="p-time">0:00</span>
        </div>
        <div class="p-bar"><div class="p-fill"></div></div>
      </div>
    </div>`;
  }

  const mediaHtml = (m) => {
    const list = normMedia(m);
    if (!list.length) return "";
    return `<div class="media-list">${list.map(playerHtml).join("")}</div>`;
  };

  function bindPlayers(root) {
    let current = null; // 同时只播放一个

    root.querySelectorAll(".player[data-src]").forEach((el) => {
      const audio = new Audio(el.dataset.src);
      audio.preload = "metadata";

      const btn = el.querySelector(".p-btn");
      const fill = el.querySelector(".p-fill");
      const time = el.querySelector(".p-time");
      const bar = el.querySelector(".p-bar");

      btn.addEventListener("click", () => {
        if (audio.paused) {
          if (current && current !== audio) current.pause();
          current = audio;
          const p = audio.play();
          if (p && p.catch) p.catch(() => markFailed());
        } else {
          audio.pause();
        }
      });

      const markFailed = () => {
        el.classList.add("failed");
        time.textContent = "无法播放（文件缺失或格式不支持）";
        btn.disabled = true;
      };

      audio.addEventListener("play", () => {
        btn.innerHTML = ICON_PAUSE;
        el.classList.add("playing");
      });
      audio.addEventListener("pause", () => {
        btn.innerHTML = ICON_PLAY;
        el.classList.remove("playing");
      });
      audio.addEventListener("loadedmetadata", () => {
        time.textContent = "0:00 / " + fmtTime(audio.duration);
      });
      audio.addEventListener("timeupdate", () => {
        if (!audio.duration) return;
        fill.style.width = (audio.currentTime / audio.duration) * 100 + "%";
        time.textContent = fmtTime(audio.currentTime) + " / " + fmtTime(audio.duration);
      });
      audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        fill.style.width = "0%";
      });
      audio.addEventListener("error", markFailed);

      let dragging = false;
      const seek = (e) => {
        const r = bar.getBoundingClientRect();
        const p = Math.min(Math.max((e.clientX - r.left) / r.width, 0), 1);
        if (audio.duration) audio.currentTime = p * audio.duration;
      };
      bar.addEventListener("pointerdown", (e) => {
        dragging = true;
        bar.setPointerCapture(e.pointerId);
        seek(e);
      });
      bar.addEventListener("pointermove", (e) => { if (dragging) seek(e); });
      bar.addEventListener("pointerup", () => { dragging = false; });
    });
  }

  function extractPhrases(text) {
    const out = [];
    let m;
    const re = new RegExp(HL_RE.source, "g");
    while ((m = re.exec(text || "")) !== null) out.push({ en: m[1], cn: m[2] });
    return out;
  }

  const partLabel = (p) => (p === 2 ? "Part 2 & 3" : "Part " + p);

  const statusTag = (s) =>
    `<span class="stag ${STATUS_CLS[s] || "st-none"}">${escapeHtml(s || "未标注")}</span>`;

  // "2026-09-01" → "09-01"；格式不对就原样显示
  const shortDate = (d) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? d.slice(5) : d);
  const countOf = (t) =>
    (t.questions || []).length + ((t.part3 || []).length ? t.part3.length : 0) + (t.sampleAnswer ? 1 : 0);

  function haystack(t) {
    const bag = [t.title, t.titleCn, t.category, t.card];
    (t.questions || []).forEach((i) => bag.push(i.q, i.qCn, i.a));
    (t.part3 || []).forEach((i) => bag.push(i.q, i.qCn, i.a));
    return bag.filter(Boolean).join(" ").toLowerCase();
  }
  TOPICS.forEach((t) => (t._hay = haystack(t)));

  /* ---------- 目录页 ---------- */
  function buildPeriodSeg() {
    const seg = $("#periodSeg");
    seg.innerHTML = PERIODS.map((p) => {
      const n = TOPICS.filter((t) => periodOf(t.month) === p.label).length;
      // 最新季度（数组第一个）标「当季题库」
      const hot = p === PERIODS[0]
        ? `<span class="hot-tag">当季题库</span>` : "";
      return `<button class="sbtn${state.period === p.label ? " active" : ""}" data-period="${escapeHtml(p.label)}">
        ${escapeHtml(p.label)}${hot}<span class="cnt">${n}</span>
      </button>`;
    }).join("");
  }

  function buildFilters() {
    buildPeriodSeg();

    const parts = [...new Set(TOPICS.map((t) => t.part))].sort();
    const partPills = [{ k: "all", label: "全部" }].concat(
      parts.map((p) => ({ k: String(p), label: partLabel(p) }))
    );
    $("#partPills").innerHTML = partPills
      .map((o) => `<button class="pill${state.part === o.k ? " active" : ""}" data-part="${o.k}">${o.label}</button>`)
      .join("");

    // 类别筛选：仅在选中「Part 2 & 3」时显示；类别只取 Part 2 的（人物/物品/地点/事件）
    const catRow = $("#catRow");
    const showCat = state.part === "2";
    catRow.hidden = !showCat;
    if (showCat) {
      const cats = [...new Set(TOPICS.filter((t) => t.part === 2).map((t) => t.category).filter(Boolean))];
      const catPills = [{ k: "all", label: "不限类别" }].concat(
        cats.map((c) => ({ k: c, label: c }))
      );
      $("#catPills").innerHTML = catPills
        .map((o) => `<button class="pill${state.cat === o.k ? " active" : ""}" data-cat="${escapeHtml(o.k)}">${escapeHtml(o.label)}</button>`)
        .join("");
    }

    const used = STATUS.filter((s) => TOPICS.some((t) => t.status === s));
    const extra = [...new Set(TOPICS.map((t) => t.status))].filter(
      (s) => s && STATUS.indexOf(s) === -1
    );
    const statusPills = [{ k: "all", label: "全部" }].concat(
      used.concat(extra).map((s) => ({ k: s, label: s }))
    );
    $("#statusPills").innerHTML = statusPills
      .map((o) => `<button class="pill${state.status === o.k ? " active" : ""}" data-status="${escapeHtml(o.k)}">${escapeHtml(o.label)}</button>`)
      .join("");
  }

  // 排序：新题 → 保留题 → 必备题，同档内保持 data.js 里的书写顺序
  const rank = (t) => {
    const i = STATUS.indexOf(t.status);
    return i === -1 ? 99 : i;
  };

  function filtered() {
    const q = state.q.trim().toLowerCase();
    return TOPICS.filter((t) => {
      if (periodOf(t.month) !== state.period) return false;
      if (state.part !== "all" && String(t.part) !== state.part) return false;
      if (state.cat !== "all" && t.category !== state.cat) return false;
      if (state.status !== "all" && (t.status || "未标注") !== state.status) return false;
      if (q && t._hay.indexOf(q) === -1) return false;
      return true;
    }).sort((a, b) => rank(a) - rank(b));
  }

  // 答案状态：全部有答案 → 已更新；部分 → 部分答案 n/m；全无 → 暂无答案
  function ansTag(t) {
    const items = (t.questions || []).concat(t.part3 || []);
    const total = items.length + (t.sampleAnswer ? 1 : 0);
    const done = items.filter((i) => i.a).length + (t.sampleAnswer ? 1 : 0);
    if (total === 0 || done === 0) return `<span class="ans-tag none">答案待更新</span>`;
    if (done === total) return `<span class="ans-tag ok">答案已更新</span>`;
    return `<span class="ans-tag partial">部分答案 ${done}/${total}</span>`;
  }

  function renderList() {
    const list = filtered();
    const qs = list.reduce((n, t) => n + countOf(t), 0);
    const dist = STATUS.concat(["未标注"])
      .map((s) => {
        const n = list.filter((t) => (t.status || "未标注") === s).length;
        return n ? `${s} ${n}` : "";
      })
      .filter(Boolean)
      .join(" · ");
    const scope = state.period;
    $("#stat").innerHTML =
      `<span class="stat-scope">${escapeHtml(scope)}</span>　共 <b>${list.length}</b> 个话题 · <b>${qs}</b> 道题` +
      (dist ? `　（${dist}）` : "") +
      `　题库总数 ${TOPICS.length}`;

    $("#topicGrid").innerHTML = list
      .map((t) => {
        const qs = t.questions || [];
        const preview = qs.slice(0, 3)
          .map((i) => `<li>${escapeHtml(i.q)}</li>`).join("");
        const more = qs.length > 3
          ? `<li class="more">还有 ${qs.length - 3} 个问题…</li>` : "";
        return `<button class="topic-card" data-id="${escapeHtml(t.id)}">
            <div class="tc-top">
              <span class="badge p${t.part}">${partLabel(t.part)}</span>
              ${statusTag(t.status)}
              ${t.part === 2 ? `<span class="cat">${escapeHtml(t.category || "")}</span>` : ""}
              <span class="tc-count">${countOf(t)} 题</span>
            </div>
            <p class="tc-title">${escapeHtml(t.title)}</p>
            ${t.titleCn ? `<p class="tc-title-cn">${escapeHtml(t.titleCn)}</p>` : ""}
            <ul class="tc-preview">${preview}${more}</ul>
            <div class="tc-foot">
              <span class="tc-date">${
                t.date && t.status !== "保留题" ? `更新 ${shortDate(t.date)}` : ""
              }</span>
              ${ansTag(t)}
            </div>
          </button>`;
      })
      .join("");

    $("#listEmpty").hidden = list.length > 0;
    const periodHas = TOPICS.some((t) => periodOf(t.month) === state.period);
    $("#listEmpty").textContent = periodHas
      ? "没有匹配的话题，换个关键词或筛选条件试试。"
      : `「${state.period}」暂时还没有题目，等你导入后就会显示在这里。`;
  }

  /* ---------- 详情页 ---------- */
  function qBlock(item, idx) {
    const ans = item.a
      ? `<p class="a-label">范例回答</p>
         <p class="a-text">${renderRich(item.a)}</p>
         ${mediaHtml(item.media)}`
      : `<p class="a-label">范例回答</p>
         <p class="a-text pending">答案待更新…</p>`;
    return `<div class="q-block">
      <button class="q-head">
        <span class="q-num">${idx + 1}</span>
        <span class="q-text">${escapeHtml(item.q)}${
          item.qCn ? `<span class="q-cn">${escapeHtml(item.qCn)}</span>` : ""
        }</span>
        <span class="q-arrow">▾</span>
      </button>
      <div class="answer">${ans}</div>
    </div>`;
  }

  function sampleBlock(text) {
    const body = text
      ? `<p class="a-text">${renderRich(text)}</p>`
      : `<p class="a-text pending">范文待更新…</p>`;
    return `<div class="q-block sample-block">
      <button class="q-head">
        <span class="q-num q-num-a">A</span>
        <span class="q-text">范例回答</span>
        <span class="q-arrow">▾</span>
      </button>
      <div class="answer">${body}</div>
    </div>`;
  }

  function renderDetail(id) {
    const t = TOPICS.find((x) => x.id === id);
    if (!t) { location.hash = ""; return; }

    const phrases = [];
    [...(t.questions || []), ...(t.part3 || [])].forEach((i) => {
      extractPhrases(i.a).forEach((p) => {
        if (!phrases.some((x) => x.en === p.en)) phrases.push(p);
      });
    });

    const head = `<div class="detail-head">
        <div class="detail-meta">
          <span class="badge p${t.part}">${partLabel(t.part)}</span>
          ${statusTag(t.status)}
          <span class="cat">${escapeHtml(t.category || "")}</span>
          <span class="tc-count">${countOf(t)} 题</span>
          ${t.date && t.status !== "保留题" ? `<span class="tc-date">${escapeHtml(t.date)} 更新</span>` : ""}
        </div>
        <h2>${escapeHtml(t.title)}</h2>
        ${t.titleCn ? `<p class="detail-cn">${escapeHtml(t.titleCn)}</p>` : ""}
        ${t.note ? `<p class="detail-note">${escapeHtml(t.note)}</p>` : ""}
      </div>`;

    const cue = (t.card ? `<div class="cue-card">${escapeHtml(t.card)}</div>` : "") +
      mediaHtml(t.media);

    let main = "";
    if (t.part === 2) {
      main =
        `<div class="section-title">题卡范文 · Sample Answer</div>` +
        sampleBlock(t.sampleAnswer || "");
    } else if ((t.questions || []).length) {
      main =
        `<div class="section-title">${t.part === 2 ? "题卡问题 · Cue Questions" : "问题与范例回答"}</div>` +
        (t.questions || []).map(qBlock).join("");
    }

    const p3 = (t.part3 || []).length
      ? `<div class="section-title">Part 3 · 深入讨论</div>
         ${t.part3.map(qBlock).join("")}`
      : "";

    const wl = phrases.length
      ? `<div class="wordlist">
           <h3>本话题高分表达 · ${phrases.length} 条</h3>
           <div class="wl-grid">${phrases
             .map((p) => `<div class="wl-item"><span class="wl-en">${escapeHtml(p.en)}</span><span class="wl-cn">${escapeHtml(p.cn)}</span></div>`)
             .join("")}</div>
         </div>`
      : "";

    $("#detailBody").innerHTML = head + cue + main + p3 + wl;
    document.title = t.title + " · 雅思口语题库";

    // 展开/折叠
    $("#detailBody").querySelectorAll(".q-block").forEach((b) => {
      if (state.practice) b.classList.add("collapsed");
      b.querySelector(".q-head").addEventListener("click", () => {
        b.classList.toggle("collapsed");
      });
    });

    // 录音 / 视频播放
    bindPlayers($("#detailBody"));
  }

  /* ---------- 路由 ---------- */
  function route() {
    const m = location.hash.match(/^#\/t\/(.+)$/);
    if (m) {
      $("#pageList").hidden = true;
      $("#pageDetail").hidden = false;
      renderDetail(decodeURIComponent(m[1]));
      window.scrollTo(0, 0);
    } else {
      $("#pageDetail").hidden = true;
      $("#pageList").hidden = false;
      renderList();
      document.title = "雅思口语题库";
    }
  }

  /* ---------- 事件 ---------- */
  // 百度统计事件埋点（统计点击次数等）
  const track = (cat, act, label) => {
    if (window._hmt && window._hmt.push) {
      try { window._hmt.push(["_trackEvent", cat, act, label || ""]); } catch (e) { /* 忽略 */ }
    }
  };
  const updateSeasonTag = () => {
    $("#seasonTag").textContent = `${YEAR} 年 ${state.period}`;
  };
  buildFilters();
  updateSeasonTag();
  $("#updatedTag").textContent =
    `数据更新于 ${BANK.updated || "—"}　·　${YEAR} 年雅思口语题库（${TOPICS.length} 个话题）`;
  $("#footNote").textContent = "　·　数据文件 data.js，按格式补充内容即可自动出现在目录中";

  // 更新公告弹窗：按「已读条数」判断，新增题目或补充答案都会触发一次（点「我知道了」记住）
  (function updateNotice() {
    const UPDATES = (BANK.updates || []).slice().sort(
      (a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)); // 日期降序，同日保持插入序（最新插最前）
    if (!UPDATES.length) return;
    const seen = Number(store.get("ielts-update-seen")) || 0; // 旧版存日期字符串 → 视为 0（重看一次）
    const total = UPDATES.length;
    if (total <= seen) return;
    const unread = Math.min(total - seen, 6); // 每次最多展示最近 6 条
    const cnDate = (d) => {
      const p = String(d).split("-");
      return p.length === 3 ? Number(p[1]) + "月" + Number(p[2]) + "日" : d;
    };
    const html = UPDATES.slice(0, unread).map(
      (u) => `<li><b>${escapeHtml(cnDate(u.date))}</b><span>${escapeHtml(u.text || "")}</span></li>`
    ).join("");
    $("#updateList").innerHTML =
      html + (total - seen > unread ? `<li class="ud-more">…更早还有 ${total - seen - unread} 条</li>` : "");
    $("#updateMask").hidden = false;
    $("#updateClose").addEventListener("click", () => {
      $("#updateMask").hidden = true;
      store.set("ielts-update-seen", String(total));
    });
  })();

  $("#periodSeg").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-period]");
    if (!btn) return;
    if (state.period === btn.dataset.period) return;
    track("时段", "切换", btn.dataset.period);
    state.period = btn.dataset.period;
    buildFilters();
    updateSeasonTag();
    renderList();
  });

  $("#partPills").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-part]");
    if (!btn) return;
    track("筛选", "部分", btn.dataset.part === "2" ? "Part 2 & 3" : btn.dataset.part);
    state.part = btn.dataset.part;
    if (state.part !== "2") state.cat = "all"; // Part 1 / 全部 不涉及类别
    buildFilters();
    renderList();
  });

  $("#catPills").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    track("筛选", "类别", btn.dataset.cat);
    state.cat = btn.dataset.cat;
    buildFilters();
    renderList();
  });

  $("#statusPills").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-status]");
    if (!btn) return;
    track("筛选", "题型", btn.dataset.status);
    state.status = btn.dataset.status;
    buildFilters();
    renderList();
  });

  const search = $("#search");
  search.addEventListener("input", () => {
    state.q = search.value;
    search.parentElement.classList.toggle("has-value", !!search.value);
    if (location.hash) location.hash = "";
    track("搜索", "查询");
    renderList();
  });
  $("#clearSearch").addEventListener("click", () => {
    search.value = "";
    state.q = "";
    search.parentElement.classList.remove("has-value");
    track("搜索", "清空");
    renderList();
    search.focus();
  });

  const toggle = $("#practiceToggle");
  toggle.checked = state.practice;
  toggle.addEventListener("change", () => {
    state.practice = toggle.checked;
    track("练习", toggle.checked ? "开启" : "关闭");
    store.set("ielts-practice", state.practice ? "1" : "0");
    if (location.hash.match(/^#\/t\//)) {
      renderDetail(decodeURIComponent(location.hash.slice(4)));
    }
  });

  $("#topicGrid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (!card) return;
    const t = TOPICS.find((x) => x.id === card.dataset.id);
    track("话题", "查看", t ? t.title : card.dataset.id);
    location.hash = "#/t/" + encodeURIComponent(card.dataset.id);
  });

  $("#backBtn").addEventListener("click", () => { location.hash = ""; });
  $("#brand").addEventListener("click", () => { location.hash = ""; });

  window.addEventListener("hashchange", route);
  route();
})();
