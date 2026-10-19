(() => {
  const container = document.querySelector('[data-factory-viewer]');
  if (!container) return;

  const stage = container.querySelector('[data-model-stage]');
  const overlay = container.querySelector('[data-model-overlay]');
  const loadButton = container.querySelector('[data-load-model]');
  const status = document.querySelector('[data-model-status]');
  const resetButton = document.querySelector('[data-reset-model]');
  const rotateButton = document.querySelector('[data-rotate-model]');
  let viewer;
  let timeout;

  function showError() {
    clearTimeout(timeout);
    viewer?.remove();
    viewer = null;
    stage.querySelector('img').hidden = false;
    overlay.hidden = false;
    loadButton.disabled = false;
    loadButton.textContent = container.dataset.retry;
    status.textContent = container.dataset.error;
    container.removeAttribute('aria-busy');
    resetButton.disabled = true;
    rotateButton.disabled = true;
  }

  loadButton.addEventListener('click', async () => {
    loadButton.disabled = true;
    status.textContent = container.dataset.loading;
    container.setAttribute('aria-busy', 'true');

    try {
      await import('./vendor/model-viewer.min.js');
      await customElements.whenDefined('model-viewer');
      viewer = document.createElement('model-viewer');
      viewer.setAttribute('alt', document.documentElement.lang === 'nl'
        ? 'Interactief 3D-model van de fabriekslijn met transportbanen, depalletizer en palletizer'
        : 'Interactive 3D model of the factory line with conveyors, depalletizer and palletizer');
      viewer.setAttribute('camera-controls', '');
      viewer.setAttribute('touch-action', 'pan-y');
      viewer.setAttribute('shadow-intensity', '0.6');
      viewer.setAttribute('camera-orbit', '35deg 65deg auto');
      viewer.setAttribute('exposure', '1');

      viewer.addEventListener('load', () => {
        clearTimeout(timeout);
        stage.querySelector('img').hidden = true;
        overlay.hidden = true;
        container.removeAttribute('aria-busy');
        status.textContent = container.dataset.ready;
        resetButton.disabled = false;
        rotateButton.disabled = false;
        rotateButton.setAttribute('aria-pressed', 'false');
        rotateButton.textContent = rotateButton.dataset.start;
      }, { once: true });
      viewer.addEventListener('error', showError, { once: true });
      stage.append(viewer);
      timeout = setTimeout(showError, 90000);
      viewer.src = 'models/Fabriek_lijn_web.glb';
    } catch {
      showError();
    }
  });

  resetButton.addEventListener('click', () => {
    if (!viewer) return;
    viewer.cameraOrbit = '35deg 65deg auto';
    viewer.cameraTarget = 'auto auto auto';
    viewer.fieldOfView = 'auto';
    viewer.jumpCameraToGoal();
  });

  rotateButton.addEventListener('click', () => {
    if (!viewer) return;
    const rotating = rotateButton.getAttribute('aria-pressed') !== 'true';
    viewer.autoRotate = rotating;
    rotateButton.setAttribute('aria-pressed', String(rotating));
    rotateButton.textContent = rotating ? rotateButton.dataset.stop : rotateButton.dataset.start;
  });
})();
