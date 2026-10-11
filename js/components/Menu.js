window.Menu = ({ menu: m }) => `
<section id="menu" class="section alt"><div class="wrap">
  <h2>${m.title}</h2><p class="intro">${m.intro}</p>
  <div class="cards">${m.items.map((i) => `
    <article class="card reveal"><img src="${i.img}" alt="${i.name}" loading="lazy">
      <div><h3>${i.name}</h3><p>${i.desc}</p><span class="price">${i.price}</span></div></article>`).join("")}
  </div></div>
</section>`;
