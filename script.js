// script.js - small interactions and animations
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  document.querySelectorAll('.bar').forEach(el => {
    const v = el.dataset.value || 0;
    setTimeout(()=> el.style.width = v + '%', 200);
  });

  // Animate donuts (conic gradients)
  document.querySelectorAll('.donut').forEach(el => {
    const v = Number(el.dataset.value || 0);
    const deg = Math.round((v / 100) * 360);
    el.style.background = `conic-gradient(${getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#11e0e6'} ${deg}deg, rgba(255,255,255,0.06) ${deg}deg)`;
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link, .btn').forEach(a=>{
    if(!a.hash) return;
    a.addEventListener('click', e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
  });

  // Back to top
  const btt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 360) btt.style.display = 'block';
    else btt.style.display = 'none';
  });
  btt.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
});
