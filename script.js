/* Pausa Café & bistró — Cala Millor
   Data verified from Google Maps (719 reviews, 4.8 ★),
   reviews, Speisekarte highlights. Default language: ES. */

const RECS = [
  { es:{n:"Pancakes con queso y fresas", d:"Nuestro éxito en cada brunch — los niños no se resisten."}, en:{n:"Pancakes with cheese & strawberries", d:"Our brunch hit — kids can't resist."}, de:{n:"Pancakes mit Käse & Erdbeeren", d:"Unser Brunch-Liebling — Kinder können nicht widerstehen."} },
  { es:{n:"Pasta de trufa", d:"La favorita de los adultos — simplemente deliciosa."}, en:{n:"Truffle pasta", d:"The grown-ups' favourite — simply delicious."}, de:{n:"Trüffel-Pasta", d:"Der Erwachsenen-Favorit — einfach köstlich."} },
  { es:{n:"Crepes", d:"Dulces o saladas, siempre recién hechas."}, en:{n:"Crêpes", d:"Sweet or savoury, always freshly made."}, de:{n:"Crêpes", d:"Süß oder herzhaft, immer frisch zubereitet."} },
  { es:{n:"Cappuccino", d:"Buen café desde la primera hora de la mañana."}, en:{n:"Cappuccino", d:"Good coffee from first thing in the morning."}, de:{n:"Cappuccino", d:"Guter Kaffee ab dem frühen Morgen."} },
  { es:{n:"Huevos rancheros", d:"Brunch con un toque mexicano — generoso y sabroso."}, en:{n:"Huevos rancheros", d:"Brunch with a Mexican touch — generous and tasty."}, de:{n:"Huevos rancheros", d:"Brunch mit mexikanischer Note — großzügig und lecker."} },
  { es:{n:"Tagliatelle & Pizza", d:"Bistró italiano para cuando el café se convierte en cena."}, en:{n:"Tagliatelle & Pizza", d:"Italian bistro for when coffee turns into dinner."}, de:{n:"Tagliatelle & Pizza", d:"Italienisches Bistro für den Übergang zum Abendessen."} },
  { es:{n:"Sangría", d:"Para acompañar el atardecer en buena compañía."}, en:{n:"Sangría", d:"To go with the sunset and good company."}, de:{n:"Sangría", d:"Zum Sonnenuntergang in guter Gesellschaft."} },
  { es:{n:"Pedidos online", d:"Recogida, drive-in y entrega sin contacto vía foodiedelivery."}, en:{n:"Online orders", d:"Pickup, drive-in and contactless delivery via foodiedelivery."}, de:{n:"Online-Bestellung", d:"Abholung, Drive-in und kontaktlose Lieferung über foodiedelivery."} }
];

const I18N = {
  es: {
    "nav.menu":"Recomendaciones","nav.gallery":"Imágenes","nav.story":"Sobre nosotros","nav.visit":"Visita",
    "cta.reserve":"Reservar",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Tu pausa favorita.",
    "hero.sub":"Café, brunch y bistró en Cala Millor — desde los pancakes de la mañana hasta la pasta de trufa de la cena.",
    "hero.reserve":"Reservar mesa",
    "hero.hours":"Todos los días desde 09:30",
    "hero.rating":"★ 4,8 · 719 reseñas en Google",
    "gallery.kicker":"Imágenes",
    "gallery.title":"Así somos.",
    "gallery.note":"Imágenes de muestra — las cambiamos por fotos reales de vuestros platos y del local a petición.",
    "story.kicker":"Sobre nosotros",
    "story.title":"Café, brunch y mucho más.",
    "story.p1":"Pausa Café & bistró es nuestro pequeño rincón de Cala Millor — un local llevado por mujeres, luminoso y acogedor, abierto desde la mañana hasta la noche.",
    "story.p2":"Aquí se viene a desayunar pancakes y cappuccino, a comer pasta de trufa, a tomar una sangría con amigos o a llevarse la cena a casa. Cuidamos los detalles — y se nota en cada plato.",
    "story.statRating":"719 reseñas Google",
    "story.statDrive":"Recogida y entrega sin contacto",
    "story.statPrice":"por persona",
    "menu.kicker":"Recomendaciones",
    "menu.title":"Lo que más gusta a nuestros clientes.",
    "menu.note":"La carta completa está en el local. Pedidos online disponibles vía foodiedelivery.",
    "visit.kicker":"Visita",
    "visit.title":"viña del mar, 25 — Cala Millor",
    "visit.hoursLabel":"Horario",
    "visit.hoursMain":"Todos los días desde las 09:30",
    "visit.hoursNote":"Horario actualizado en Google Maps",
    "visit.addressLabel":"Dirección",
    "visit.contactLabel":"Contacto",
    "visit.callCta":"Llamar para reservar",
    "footer.tag":"Café · Brunch · Bistró · Cala Millor",
    "footer.findUs":"Dónde estamos",
    "footer.hours":"Horario",
    "footer.hoursLine":"Todos los días · desde 09:30",
    "footer.contact":"Contacto"
  },
  en: {
    "nav.menu":"Recommendations","nav.gallery":"Impressions","nav.story":"About","nav.visit":"Visit",
    "cta.reserve":"Book",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Your favourite pause.",
    "hero.sub":"Café, brunch and bistro in Cala Millor — from morning pancakes to evening truffle pasta.",
    "hero.reserve":"Book a table",
    "hero.hours":"Every day from 09:30",
    "hero.rating":"★ 4.8 · 719 Google reviews",
    "gallery.kicker":"Impressions",
    "gallery.title":"This is us.",
    "gallery.note":"Sample photos — happy to swap for real photos of your dishes and venue on request.",
    "story.kicker":"About",
    "story.title":"Café, brunch and so much more.",
    "story.p1":"Pausa Café & bistró is our little corner of Cala Millor — a woman-run, bright and welcoming place, open from morning to night.",
    "story.p2":"You come here for pancakes and cappuccino in the morning, truffle pasta at lunch, sangría with friends, or take dinner home. We care about the details — and it shows in every dish.",
    "story.statRating":"719 Google reviews",
    "story.statDrive":"Pickup & contactless delivery",
    "story.statPrice":"per person",
    "menu.kicker":"Recommendations",
    "menu.title":"What our guests love.",
    "menu.note":"The full menu is available at the café. Online orders via foodiedelivery.",
    "visit.kicker":"Visit",
    "visit.title":"viña del mar, 25 — Cala Millor",
    "visit.hoursLabel":"Hours",
    "visit.hoursMain":"Every day from 09:30",
    "visit.hoursNote":"Up-to-date hours on Google Maps",
    "visit.addressLabel":"Address",
    "visit.contactLabel":"Contact",
    "visit.callCta":"Call to book",
    "footer.tag":"Café · Brunch · Bistro · Cala Millor",
    "footer.findUs":"Find us",
    "footer.hours":"Hours",
    "footer.hoursLine":"Every day · from 09:30",
    "footer.contact":"Contact"
  },
  de: {
    "nav.menu":"Empfehlungen","nav.gallery":"Eindrücke","nav.story":"Über uns","nav.visit":"Besuch",
    "cta.reserve":"Reservieren",
    "hero.eyebrow":"Cala Millor · Mallorca",
    "hero.title":"Deine Lieblings-Pause.",
    "hero.sub":"Café, Brunch und Bistro in Cala Millor — von Pancakes am Morgen bis Trüffel-Pasta am Abend.",
    "hero.reserve":"Tisch reservieren",
    "hero.hours":"Täglich ab 09:30",
    "hero.rating":"★ 4,8 · 719 Google-Bewertungen",
    "gallery.kicker":"Eindrücke",
    "gallery.title":"So sind wir.",
    "gallery.note":"Symbolbilder – auf Anfrage tauschen wir gegen echte Fotos eurer Gerichte und des Lokals.",
    "story.kicker":"Über uns",
    "story.title":"Café, Brunch und vieles mehr.",
    "story.p1":"Pausa Café & bistró ist unser kleiner Lieblingsort in Cala Millor — frauengeführt, hell und einladend, vom Morgen bis in den Abend geöffnet.",
    "story.p2":"Pancakes und Cappuccino zum Frühstück, Trüffel-Pasta zum Mittag, Sangría mit Freunden oder Abendessen zum Mitnehmen. Wir achten auf die Details — und das schmeckt man in jedem Gericht.",
    "story.statRating":"719 Google-Bewertungen",
    "story.statDrive":"Abholung & kontaktlose Lieferung",
    "story.statPrice":"pro Person",
    "menu.kicker":"Empfehlungen",
    "menu.title":"Was unsere Gäste lieben.",
    "menu.note":"Die komplette Karte gibt es vor Ort. Online-Bestellung über foodiedelivery.",
    "visit.kicker":"Besuch",
    "visit.title":"viña del mar, 25 — Cala Millor",
    "visit.hoursLabel":"Öffnungszeiten",
    "visit.hoursMain":"Täglich ab 09:30",
    "visit.hoursNote":"Aktuelle Öffnungszeiten auf Google Maps",
    "visit.addressLabel":"Adresse",
    "visit.contactLabel":"Kontakt",
    "visit.callCta":"Anrufen zum Reservieren",
    "footer.tag":"Café · Brunch · Bistro · Cala Millor",
    "footer.findUs":"Wo wir sind",
    "footer.hours":"Öffnungszeiten",
    "footer.hoursLine":"Täglich · ab 09:30",
    "footer.contact":"Kontakt"
  }
};

let currentLang = 'es';

function applyI18n(lang){
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val) el.textContent = val;
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
  });
  renderRecs();
}

function renderRecs(){
  const grid = document.getElementById('recGrid');
  if (!grid) return;
  grid.innerHTML = RECS.map(r => {
    const t = r[currentLang] || r.es;
    return `<article class="rec-card"><h3>${t.n}</h3><p>${t.d}</p></article>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => applyI18n(b.dataset.lang));
  });

  const nav = document.createElement('nav');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <a href="#empfehlungen" data-i18n="nav.menu">Recomendaciones</a>
    <a href="#eindruecke" data-i18n="nav.gallery">Imágenes</a>
    <a href="#historia" data-i18n="nav.story">Sobre nosotros</a>
    <a href="#visitanos" data-i18n="nav.visit">Visita</a>
    <a href="tel:+34633820738" class="btn btn-primary" data-i18n="cta.reserve">Reservar</a>
  `;
  document.body.appendChild(nav);
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }));

  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  document.getElementById('year').textContent = new Date().getFullYear();

  applyI18n('es');
});
