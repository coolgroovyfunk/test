(function () {
  const grid = document.getElementById("stickerGrid");
  const chipsWrap = document.getElementById("filterChips");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Deterministic pseudo-random rotation per card, based on its id,
  // so the "stuck on the wall" look stays consistent between reloads.
  function rotationFor(id) {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
      hash = (hash * 31 + id.charCodeAt(i)) % 1000;
    }
    // range roughly -4deg to 4deg
    return ((hash % 80) / 10 - 4).toFixed(2);
  }

  function cardHTML(sticker) {
    const rot = rotationFor(sticker.id);
    const newBadge = sticker.isNew
      ? `<span class="badge-new">New</span>`
      : "";
    return `
      <article class="sticker-card" style="--rot:${rot}deg" data-category="${sticker.category}">
        <div class="sticker-card-inner">
          <div class="sticker-peel" aria-hidden="true"></div>
          <div class="sticker-image">
            <img src="${sticker.image}" alt="${sticker.name}" loading="lazy" width="400" height="400">
            ${newBadge}
          </div>
          <h3 class="sticker-name">${sticker.name}</h3>
          <p class="sticker-desc">${sticker.description}</p>
          <a class="sticker-link" href="${sticker.etsyUrl}" target="_blank" rel="noopener">Get it on Etsy →</a>
        </div>
      </article>
    `;
  }

  function renderGrid(filter) {
    const items = filter && filter !== "All"
      ? STICKERS.filter(s => s.category === filter)
      : STICKERS;
    grid.innerHTML = items.map(cardHTML).join("");
  }

  function renderChips() {
    const categories = ["All", ...new Set(STICKERS.map(s => s.category))];
    chipsWrap.innerHTML = categories
      .map((cat, i) => `<button class="chip${i === 0 ? " is-active" : ""}" data-cat="${cat}">${cat}</button>`)
      .join("");

    chipsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      chipsWrap.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderGrid(btn.dataset.cat);
    });
  }

  renderChips();
  renderGrid("All");
})();
