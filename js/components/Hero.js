window.Hero = ({ hero: h }) => `
<section id="inicio" class="hero" style="--img:url('../${h.image}')">
  <div class="hero-body reveal">
    <h1>${h.title}</h1>
    <p>${h.text}</p>
    <div class="btns"><a class="btn" href="${h.cta[1]}">${h.cta[0]}</a><a class="btn ghost" href="${h.cta2[1]}">${h.cta2[0]}</a></div>
  </div>
</section>`;
