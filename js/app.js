const parts = [Navbar, Hero, About, Menu, Gallery, Place, Contact, Footer];
document.getElementById("app").innerHTML = parts.map((c) => c(SITE)).join("");

// menú móvil
const nav = document.querySelector(".navbar"), tgl = nav.querySelector(".nav-toggle");
tgl.onclick = () => tgl.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.querySelectorAll(".nav-links a").forEach((a) => (a.onclick = () => { nav.classList.remove("open"); tgl.setAttribute("aria-expanded", false); }));

// aparecer al hacer scroll
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// formulario: sin backend, solo valida y confirma
// ponytail: no envía nada; conectar a Formspree/Google Forms si se necesita recibir mensajes
document.querySelector(".form").onsubmit = (e) => {
  e.preventDefault();
  const f = e.target, ok = f.checkValidity();
  f.querySelector(".msg").textContent = ok ? "¡Gracias! Le responderemos pronto." : "Complete todos los campos con un correo válido.";
  if (ok) f.reset();
};
