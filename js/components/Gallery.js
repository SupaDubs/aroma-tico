window.Gallery = ({ gallery: g }) => `
<section id="galeria" class="section"><div class="wrap">
  <h2>${g.title}</h2>
  <div class="grid">${g.images.map(([s, a]) => `<img class="reveal" src="${s}" alt="${a}" loading="lazy">`).join("")}</div>
</div></section>`;
