// High-level node package dependencies
import 'regenerator-runtime';

// Component Inject
import './lib/components';

// Style inject
import './styles/main.scss';

// High-level dependencies
import registerSW from './utils/register-sw';

// eslint-disable-next-line no-console
window.addEventListener('DOMContentLoaded', async () => {
  await registerSW();
});
