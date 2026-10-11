window.Navbar = ({ nav, name }) => `
<header class="navbar">
  <a class="brand" href="#inicio">${Logo(40)}<span>${name}</span></a>
  <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button>
  <nav class="nav-links">${nav.map(([id, t]) => `<a href="#${id}">${t}</a>`).join("")}</nav>
</header>`;
