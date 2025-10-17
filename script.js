
/* NAV TOGGLE (mobile) */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.18))';
    navLinks.style.padding = '12px';
  });
}

/* TYPEWRITER EFFECT */
const typeEl = document.getElementById('typewriter');
const cursor = document.querySelector('.cursor');
const text = "Building Future-Ready Web Experiences with Java & Modern Technologies";
let idx = 0;
let forward = true;

function typeLoop(){
  if(idx <= text.length){
    typeEl.textContent = text.slice(0, idx);
    idx++;
    setTimeout(typeLoop, 40);
  } else {
    // keep full text and stop (or loop after pause)
    cursor.style.display = 'inline-block';
  }
}
document.addEventListener('DOMContentLoaded', typeLoop);

/* SIMPLE SCROLL REVEAL using IntersectionObserver */
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      // small stagger for groups
      entry.target.style.transitionDelay = (entry.target.datasetDelay || 0) + 'ms';
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

revealEls.forEach((el, i) => {
  // optional per-element delay
  el.datasetDelay = i * 60;
  io.observe(el);
});

/* CONTACT FORM: open mail client with prefilled subject/body */
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const msg = document.getElementById('fmsg').value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);

    window.location.href = `mailto:muttinenilikitha321@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* small parallax on photo */
const photo = document.querySelector('.photo-frame');
if(photo){
  document.addEventListener('mousemove', (e) => {
    const rect = photo.getBoundingClientRect();
    const x = (e.clientX - window.innerWidth/2) / 60;
    const y = (e.clientY - rect.top - rect.height/2) / 60;
    photo.style.transform = `translate(${x}px, ${y}px)`;
  });
  photo.addEventListener('mouseleave', () => photo.style.transform = 'translate(0,0)');
}
