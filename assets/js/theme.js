(() => {
  const root = document.documentElement;
  const storageKey = 'emma-portfolio-theme';
  let theme = 'light';

  // Apply a saved choice before the stylesheet and page content render.
  try {
    if (localStorage.getItem(storageKey) === 'dark') theme = 'dark';
  } catch {
    // The switch still works if the browser blocks preference storage.
  }
  root.dataset.theme = theme;

  function updateControls() {
    const dark = root.dataset.theme === 'dark';
    const dutch = root.lang === 'nl';
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const label = dutch
        ? (dark ? 'Schakel naar lichte modus' : 'Schakel naar donkere modus')
        : (dark ? 'Switch to light mode' : 'Switch to dark mode');
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', label);
      button.title = label;
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? '#18272d' : '#f6f5ef';
  }

  function initialize() {
    updateControls();
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = theme;
        try {
          localStorage.setItem(storageKey, theme);
        } catch {
          // Storage can be unavailable in private or restricted browsing.
        }
        updateControls();
      });
    });
  }

  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    root.dataset.theme = event.newValue === 'dark' ? 'dark' : 'light';
    updateControls();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
