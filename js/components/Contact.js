window.Contact = ({ contact: c }) => `
<section id="contacto" class="section alt"><div class="wrap split">
  <div class="reveal"><h2>${c.title}</h2>
    <p>📍 ${c.address}</p>
    <p>📞 <a href="tel:${c.phone.replace(/[^+\d]/g, "")}">${c.phone}</a></p>
    <p>✉️ <a href="mailto:${c.email}">${c.email}</a></p>
    <h3>Horario</h3>
    <table class="hours">${c.hours.map(([d, h]) => `<tr><td>${d}</td><td>${h}</td></tr>`).join("")}</table>
    <p class="social">${c.social.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</p>
  </div>
  <form class="reveal form" novalidate>
    <h3>Escríbanos</h3>
    <label>Nombre<input name="nombre" required autocomplete="name"></label>
    <label>Correo<input name="correo" type="email" required autocomplete="email"></label>
    <label>Mensaje<textarea name="mensaje" rows="4" required></textarea></label>
    <button class="btn" type="submit">Enviar</button>
    <p class="msg" role="status"></p>
  </form>
</div></section>`;
