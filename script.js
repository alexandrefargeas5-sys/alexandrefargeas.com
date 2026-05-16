// ===== ANIMATIONS AU SCROLL =====
// On utilise l'API IntersectionObserver : elle observe les éléments
// et déclenche une fonction quand ils entrent dans la zone visible de l'écran.

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Délai progressif pour les cartes (effet cascade)
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
      }
    });
  },
  {
    threshold: 0.1, // Se déclenche quand 10% de l'élément est visible
    rootMargin: '0px 0px -40px 0px'
  }
);

// On observe toutes les cartes de services
document.querySelectorAll('.service-card').forEach((card) => {
  observer.observe(card);
});

// On observe les éléments de la liste d'avantages
document.querySelectorAll('.avantages-list li').forEach((item) => {
  observer.observe(item);
});

// ===== NAVBAR : OMBRE AU SCROLL =====
// On ajoute une ombre à la navbar quand l'utilisateur scrolle vers le bas.
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== SCROLL FLUIDE POUR LES ANCRES =====
// Les liens comme "#services" défilent doucement vers la section cible.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
