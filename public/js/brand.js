// ===== BRAND DATA (6 Real Examples) =====
const defaultBrands = [
  {
    name: "Apple",
    tagline: "Think Different",
    industry: "Technology",
    founded: 1976,
    hq: "Cupertino, California",
    colors: ["#000000", "#ffffff", "#a2aaad"],
    description:
      "Apple Inc. is a global technology leader that designs, manufactures and sells smartphones, computers, tablets, wearables and services. Known for its iconic iPhone, Mac, iPad, and the App Store ecosystem.",
    tags: ["tech", "innovation", "premium", "consumer electronics", "software"],
    emoji: "🍎"
  },
  {
    name: "Nike",
    tagline: "Just Do It",
    industry: "Sportswear & Lifestyle",
    founded: 1964,
    hq: "Beaverton, Oregon",
    colors: ["#111111", "#fa5400", "#ffffff"],
    description:
      "Nike is the world's leading athletic footwear and apparel brand, inspiring athletes through innovative performance products and powerful storytelling.",
    tags: ["fashion", "lifestyle", "sports", "footwear", "apparel"],
    emoji: "✔️"
  },
  {
    name: "Coca-Cola",
    tagline: "Open Happiness",
    industry: "Beverages",
    founded: 1892,
    hq: "Atlanta, Georgia",
    colors: ["#f40009", "#ffffff", "#000000"],
    description:
      "The Coca-Cola Company is the world's largest beverage corporation, with over 500 brands sold in more than 200 countries.",
    tags: ["food", "beverages", "fmcg", "global", "iconic"],
    emoji: "🥤"
  },
  {
    name: "Tesla",
    tagline: "Accelerating the World's Transition to Sustainable Energy",
    industry: "Electric Vehicles & Energy",
    founded: 2003,
    hq: "Austin, Texas",
    colors: ["#cc0000", "#000000", "#ffffff"],
    description:
      "Tesla designs and manufactures electric vehicles, battery energy storage, solar panels and solar roof tiles.",
    tags: ["auto", "tech", "ev", "innovation", "sustainability"],
    emoji: "⚡"
  },
  {
    name: "Louis Vuitton",
    tagline: "The Art of Travel",
    industry: "Luxury Fashion",
    founded: 1854,
    hq: "Paris, France",
    colors: ["#b08850", "#1a1a1a", "#f5f0e8"],
    description:
      "Louis Vuitton is a French luxury fashion house and the flagship brand of LVMH. Famous for its LV monogram on luggage, handbags, and leather goods.",
    tags: ["fashion", "luxury", "lifestyle", "premium", "heritage"],
    emoji: "👜"
  },
  {
    name: "Spotify",
    tagline: "Music for Everyone",
    industry: "Music & Streaming",
    founded: 2006,
    hq: "Stockholm, Sweden",
    colors: ["#1db954", "#191414", "#ffffff"],
    description:
      "Spotify is the world's largest music streaming service with over 600 million users offering songs, podcasts, and audiobooks.",
    tags: ["tech", "music", "streaming", "entertainment", "lifestyle"],
    emoji: "🎵"
  }
];

// ===== STATE =====
let brands = JSON.parse(localStorage.getItem("brandvault_brands")) || [...defaultBrands];
let currentFilter = "all";
let currentSearch = "";
let detailIndex = -1;

// ===== TAG COLORS =====
const tagColors = [
  { bg: "rgba(99,102,241,0.18)", border: "rgba(99,102,241,0.5)", text: "#a78bfa" },
  { bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.5)", text: "#22d3ee" },
  { bg: "rgba(244,114,182,0.15)", border: "rgba(244,114,182,0.5)", text: "#f472b6" },
  { bg: "rgba(45,212,191,0.15)", border: "rgba(45,212,191,0.5)", text: "#2dd4bf" },
  { bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.4)", text: "#fbbf24" },
  { bg: "rgba(52,211,153,0.15)", border: "rgba(52,211,153,0.4)", text: "#34d399" }
];

function getTagColor(tag) {
  let hash = 0;
  for (let c of tag) hash = (hash * 31 + c.charCodeAt(0)) % tagColors.length;
  return tagColors[Math.abs(hash) % tagColors.length];
}

// ===== SAVE TO LOCALSTORAGE =====
function save() {
  localStorage.setItem("brandvault_brands", JSON.stringify(brands));
}

// ===== FILTER LOGIC =====
function getFiltered() {
  const q = currentSearch.toLowerCase().trim();
  return brands.filter((b) => {
    const matchTag = currentFilter === "all" || b.tags.some((t) => t.toLowerCase().includes(currentFilter));
    const matchSearch =
      !q ||
      b.name.toLowerCase().includes(q) ||
      (b.tagline || "").toLowerCase().includes(q) ||
      (b.industry || "").toLowerCase().includes(q) ||
      (b.description || "").toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q));
    return matchTag && matchSearch;
  });
}

// ===== RENDER CARDS =====
function renderCards() {
  const grid = document.getElementById("brandGrid");
  const noRes = document.getElementById("noResults");
  const filtered = getFiltered();

  grid.innerHTML = "";

  if (filtered.length === 0) {
    noRes.classList.remove("hidden");
  } else {
    noRes.classList.add("hidden");
  }

  filtered.forEach((brand, fi) => {
    const realIdx = brands.indexOf(brand);
    const card = document.createElement("div");
    card.className = "brand-card";
    card.style.animationDelay = `${fi * 0.06}s`;

    const c1 = brand.colors[0] || "#6366f1";
    const c2 = brand.colors[1] || "#06b6d4";

    const tagsHTML = brand.tags
      .slice(0, 4)
      .map((t) => {
        const col = getTagColor(t);
        return `<span class="tag-pill" style="background:${col.bg};border-color:${col.border};color:${col.text}">${t}</span>`;
      })
      .join("");

    const dotsHTML = brand.colors
      .map((c) => `<span class="color-dot" style="background:${c}" title="${c}"></span>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <div class="brand-emoji" style="background:linear-gradient(135deg,${c1}33,${c2}44)">
          ${brand.emoji || "🏷️"}
        </div>
        <div class="brand-info">
          <div class="brand-name">${brand.name}</div>
          <div class="brand-tagline">${brand.tagline || "—"}</div>
        </div>
      </div>
      <div class="card-meta">
        <div class="meta-item">
          <span class="meta-label">Industry</span>
          <span class="meta-value">${brand.industry || "—"}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Founded</span>
          <span class="meta-value">${brand.founded || "—"}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">HQ</span>
          <span class="meta-value">${brand.hq || "—"}</span>
        </div>
      </div>
      ${brand.description ? `<div class="brand-desc">${brand.description}</div>` : ""}
      ${dotsHTML ? `<div class="color-dots">${dotsHTML}</div>` : ""}
      <div class="card-tags">${tagsHTML}</div>
      <div class="card-actions">
        <button class="action-btn edit-btn" data-idx="${realIdx}">
          <i class="fa-solid fa-pen"></i> Edit
        </button>
        <button class="action-btn del-btn" data-idx="${realIdx}">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (!e.target.closest(".card-actions")) openDetail(realIdx);
    });

    grid.appendChild(card);
  });

  // Action button listeners
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openEditModal(parseInt(btn.dataset.idx));
    });
  });
  document.querySelectorAll(".del-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteBrand(parseInt(btn.dataset.idx));
    });
  });

  updateStats();
}

// ===== STATS =====
function updateStats() {
  const filtered = getFiltered();
  document.getElementById("totalCount").textContent = brands.length;
  document.getElementById("visibleCount").textContent = filtered.length;
  const allTags = new Set(brands.flatMap((b) => b.tags.map((t) => t.toLowerCase())));
  document.getElementById("tagCount").textContent = allTags.size;
}

// ===== DETAIL MODAL =====
function openDetail(idx) {
  detailIndex = idx;
  const b = brands[idx];
  document.getElementById("detailTitle").textContent = b.name;

  const c1 = b.colors[0] || "#6366f1";
  const c2 = b.colors[1] || "#06b6d4";

  const swatches = b.colors
    .map((c) => `<div class="detail-color-swatch" style="background:${c}" title="${c}"></div>`)
    .join("");

  const tags = b.tags
    .map((t) => {
      const col = getTagColor(t);
      return `<span class="tag-pill" style="background:${col.bg};border-color:${col.border};color:${col.text}">${t}</span>`;
    })
    .join("");

  document.getElementById("detailBody").innerHTML = `
    <div class="detail-hero">
      <div class="detail-emoji" style="background:linear-gradient(135deg,${c1}44,${c2}55)">
        ${b.emoji || "🏷️"}
      </div>
      <div>
        <div class="detail-brand-name">${b.name}</div>
        <div class="detail-tagline">${b.tagline || ""}</div>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-field">
        <div class="d-label">Industry</div>
        <div class="d-value">${b.industry || "—"}</div>
      </div>
      <div class="detail-field">
        <div class="d-label">Founded</div>
        <div class="d-value">${b.founded || "—"}</div>
      </div>
      <div class="detail-field" style="grid-column:span 2">
        <div class="d-label">Headquarters</div>
        <div class="d-value">${b.hq || "—"}</div>
      </div>
    </div>
    ${b.description ? `<div class="detail-desc">${b.description}</div>` : ""}
    <div style="margin-bottom:10px;font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted)">Brand Colors</div>
    <div class="detail-colors">${swatches}</div>
    <div style="margin-bottom:10px;font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted)">Tags</div>
    <div class="detail-tags">${tags}</div>
  `;

  document.getElementById("detailOverlay").classList.remove("hidden");
}

document.getElementById("closeDetail").addEventListener("click", () => {
  document.getElementById("detailOverlay").classList.add("hidden");
});
document.getElementById("closeDetailBtn").addEventListener("click", () => {
  document.getElementById("detailOverlay").classList.add("hidden");
});
document.getElementById("editFromDetail").addEventListener("click", () => {
  document.getElementById("detailOverlay").classList.add("hidden");
  openEditModal(detailIndex);
});
document.getElementById("detailOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("detailOverlay"))
    document.getElementById("detailOverlay").classList.add("hidden");
});

// ===== ADD / EDIT MODAL =====
function openAddModal() {
  document.getElementById("modalTitle").textContent = "Add New Brand";
  document.getElementById("editIndex").value = -1;
  clearForm();
  document.getElementById("modalOverlay").classList.remove("hidden");
}

function openEditModal(idx) {
  const b = brands[idx];
  document.getElementById("modalTitle").textContent = "Edit Brand";
  document.getElementById("editIndex").value = idx;
  document.getElementById("brandName").value = b.name;
  document.getElementById("brandTagline").value = b.tagline || "";
  document.getElementById("brandIndustry").value = b.industry || "";
  document.getElementById("brandFounded").value = b.founded || "";
  document.getElementById("brandHQ").value = b.hq || "";
  document.getElementById("brandColors").value = b.colors.join(", ");
  document.getElementById("brandDesc").value = b.description || "";
  document.getElementById("brandTags").value = b.tags.join(", ");
  document.getElementById("brandEmoji").value = b.emoji || "";
  document.getElementById("modalOverlay").classList.remove("hidden");
}

function clearForm() {
  [
    "brandName",
    "brandTagline",
    "brandIndustry",
    "brandFounded",
    "brandHQ",
    "brandColors",
    "brandDesc",
    "brandTags",
    "brandEmoji"
  ].forEach((id) => (document.getElementById(id).value = ""));
}

function closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
}

document.getElementById("openModal").addEventListener("click", openAddModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

// ===== SAVE BRAND =====
document.getElementById("saveBrand").addEventListener("click", () => {
  const name = document.getElementById("brandName").value.trim();
  if (!name) {
    document.getElementById("brandName").focus();
    document.getElementById("brandName").style.borderColor = "#f43f5e";
    return;
  }
  document.getElementById("brandName").style.borderColor = "";

  const rawColors = document.getElementById("brandColors").value;
  const colors = rawColors
    .split(",")
    .map((c) => c.trim())
    .filter((c) => c.match(/^#[0-9a-fA-F]{3,6}$/));

  const brand = {
    name,
    tagline: document.getElementById("brandTagline").value.trim(),
    industry: document.getElementById("brandIndustry").value.trim(),
    founded: parseInt(document.getElementById("brandFounded").value) || null,
    hq: document.getElementById("brandHQ").value.trim(),
    colors: colors.length ? colors : ["#6366f1", "#06b6d4"],
    description: document.getElementById("brandDesc").value.trim(),
    tags: document
      .getElementById("brandTags")
      .value.split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    emoji: document.getElementById("brandEmoji").value.trim() || "🏷️"
  };

  const idx = parseInt(document.getElementById("editIndex").value);
  if (idx === -1) {
    brands.unshift(brand);
  } else {
    brands[idx] = brand;
  }

  save();
  closeModal();
  renderCards();
});

// ===== DELETE =====
function deleteBrand(idx) {
  if (confirm(`Delete "${brands[idx].name}"?`)) {
    brands.splice(idx, 1);
    save();
    renderCards();
  }
}

// ===== SEARCH =====
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value;
  renderCards();
});
document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  renderCards();
});

// ===== TAG FILTERS =====
document.querySelectorAll(".tag-filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tag-filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.tag;
    renderCards();
  });
});

// ===== INIT =====
renderCards();