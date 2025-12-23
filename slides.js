/*
 *  slides.js - Minimal Slides Framework
 *  Dead simple slides using minimal amount JavaScript and CSS.
 *  Idea: Mateusz Myalski
 *  Coded with: Claude AI and Sonnet 4.5
 */
(function() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; overflow: hidden; }
    section { 
      width: 100vw; 
      height: 100vh; 
      display: flex; 
      flex-direction: column;
      align-items: center; 
      justify-content: space-between;
      padding: 4rem;
      scroll-snap-align: start;
    }
    section > * { max-width: 1200px; width: 100%; }
    section > header { flex-shrink: 0; padding-bottom: 2rem; }
    section > footer { flex-shrink: 0; padding-top: 2rem; }
    section > *:not(header):not(footer) { margin: auto 0; }
    header { font-size: 0.9rem; opacity: 0.8; }
    footer { font-size: 0.9rem; opacity: 0.8; }
    section:nth-child(odd) { background: #1a1a2e; color: #eee; }
    section:nth-child(even) { background: #f5f5f5; color: #333; }
    h1 { font-size: 3rem; margin-bottom: 1rem; }
    h2 { font-size: 2rem; margin-bottom: 1rem; }
    h3 { font-size: 1.5rem; margin-bottom: 0.75rem; }
    p { font-size: 1.25rem; line-height: 1.6; margin-bottom: 1rem; }
    ul, ol { font-size: 1.25rem; line-height: 1.6; margin-left: 2rem; margin-bottom: 1rem; }
    aside { display: flex; gap: 2rem; }
    aside > * { flex: 1; }
    pre { margin: 1rem 0; border-radius: 8px; overflow-x: auto; }
    code { font-size: 1rem; }
    nav { 
      position: fixed; 
      bottom: 20px; 
      right: 20px; 
      background: rgba(0,0,0,0.5); 
      color: white; 
      padding: 8px 16px; 
      border-radius: 20px;
      font-size: 0.9rem;
      z-index: 1000;
    }
  `;
  document.head.appendChild(style);

  // Inject Highlight.js CSS
  const hlCss = document.createElement('link');
  hlCss.rel = 'stylesheet';
  hlCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
  document.head.appendChild(hlCss);

  // Load Highlight.js
  const hlScript = document.createElement('script');
  hlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
  hlScript.onload = function() {
    hljs.highlightAll();
  };
  document.head.appendChild(hlScript);

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    // Add counter
    const counter = document.createElement('nav');
    counter.setAttribute('aria-label', 'Slide navigation');
    counter.innerHTML = '<span id="current">1</span> / <span id="total">0</span>';
    document.body.appendChild(counter);

    const slides = document.querySelectorAll('section');
    const current = document.getElementById('current');
    const total = document.getElementById('total');
    let idx = 0;

    total.textContent = slides.length;

    function go(n) {
      idx = Math.max(0, Math.min(slides.length - 1, n));
      slides[idx].scrollIntoView({ behavior: 'smooth' });
      current.textContent = idx + 1;
    }

    document.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        go(idx + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        go(idx - 1);
      }
    });
  }
})();