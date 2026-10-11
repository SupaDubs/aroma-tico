window.Place = ({ place: p }) => `
<section id="local" class="place" style="--img:url('../${p.image}')">
  <div class="place-body reveal"><h2>${p.title}</h2><p>${p.text}</p></div>
</section>`;
