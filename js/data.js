// Todo el contenido editable del sitio vive aquí. Los componentes solo lo dibujan.
window.SITE = {
  name: "Aroma Tico",
  tagline: "Café de Costa Rica, servido con calma",
  nav: [
    ["inicio", "Inicio"], ["nosotros", "Quiénes somos"], ["menu", "Menú"],
    ["galeria", "Galería"], ["local", "Nuestro local"], ["contacto", "Contacto"],
  ],
  hero: {
    title: "El aroma de Costa Rica en cada taza",
    text: "Café de altura, desayunos de la abuela y postres caseros en un rincón tranquilo rodeado de plantas.",
    cta: ["Ver el menú", "#menu"], cta2: ["Cómo llegar", "#contacto"], image: "assets/ventanal.jpg",
  },
  about: {
    title: "Quiénes somos",
    paragraphs: [
      "Aroma Tico nació del cariño por la tradición cafetalera costarricense. Trabajamos con pequeños productores de las zonas de Tarrazú y Valle Central para servir un café fresco, con historia y sabor a casa.",
      "Creemos en lo sencillo: buen grano, buena mano y buena compañía. Cada mañana preparamos el gallo pinto, horneamos los postres y abrimos la puerta para que se sientan en familia.",
    ],
    values: [
      ["Tradición", "Recetas costarricenses de siempre."],
      ["Frescura", "Café tostado en lotes pequeños."],
      ["Sostenibilidad", "Productores locales y empaques reutilizables."],
    ],
    image: "assets/interior.jpg",
  },
  menu: {
    title: "Nuestro menú",
    intro: "Precios en colones, impuestos incluidos.",
    items: [
      { name: "Gallo pinto Aroma", desc: "Arroz y frijoles con huevo, natilla, plátano maduro y tortilla.", price: "₡3 800", img: "assets/gallo-pinto.jpg" },
      { name: "Pastel tres leches", desc: "Esponjoso, bañado en tres leches con crema batida y canela.", price: "₡2 600", img: "assets/tres-leches.jpg" },
      { name: "Café de especialidad", desc: "Espresso o filtrado de Tarrazú. Pídalo con arte latte.", price: "₡1 900", img: "assets/latte.jpg" },
    ],
  },
  gallery: {
    title: "Galería",
    images: [
      ["assets/latte.jpg", "Barista sirviendo arte latte"],
      ["assets/gallo-pinto.jpg", "Desayuno de gallo pinto"],
      ["assets/tres-leches.jpg", "Pastel tres leches y capuchino"],
      ["assets/ventanal.jpg", "Taza de café junto al ventanal"],
      ["assets/interior.jpg", "Barra de madera y plantas"],
    ],
  },
  place: {
    title: "Nuestro local",
    text: "Madera natural, luz de ventana y muchas plantas. Un lugar para conversar, trabajar un rato o simplemente tomarse el café sin prisa.",
    image: "assets/interior.jpg",
  },
  contact: {
    title: "Visítenos",
    address: "Avenida Central, 200 m norte de la iglesia, San José, Costa Rica",
    phone: "+506 2222-0000", email: "hola@aromatico.cr",
    hours: [["Lunes a viernes", "6:30 a. m. – 7:00 p. m."], ["Sábado y domingo", "7:30 a. m. – 8:00 p. m."]],
    social: [["Instagram", "https://instagram.com/"], ["Facebook", "https://facebook.com/"], ["WhatsApp", "https://wa.me/50622220000"]],
  },
};
