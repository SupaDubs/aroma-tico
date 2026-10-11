window.About = ({ about: a }) => `
<section id="nosotros" class="section split">
  <div class="reveal"><h2>${a.title}</h2>${a.paragraphs.map((p) => `<p>${p}</p>`).join("")}
    <ul class="values">${a.values.map(([t, d]) => `<li><strong>${t}</strong>${d}</li>`).join("")}</ul></div>
  <img class="reveal photo" src="${a.image}" alt="Interior de Aroma Tico" loading="lazy">
</section>`;
