/**
 * KITOB OLAMI 📚 — Main Client Script
 * Handles Search, Category Filter, Modal, Cart, Number Counters and Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('KITOB OLAMI 📚 — Web App Initialized Successfully!');

  // Number Counter Animation via IntersectionObserver
  const counterElements = document.querySelectorAll('.counter-number');
  if (counterElements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target') || '0', 10);
          animateCounter(entry.target, target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => observer.observe(el));
  }

  function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = current.toLocaleString('uz-UZ') + '+';
    }, 40);
  }
});
