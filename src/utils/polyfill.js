if (!window.customElements) {
  const customElementAdapter = document.createElement('script');
  customElementAdapter.src = './vendor/custom-elements-es5-adapter.js';

  document.head.appendChild(customElementAdapter);
}
