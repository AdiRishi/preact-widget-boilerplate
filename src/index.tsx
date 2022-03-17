import habitat from 'preact-habitat';
import App from './App';

const { render } = habitat(App);

render({
  selector: '[data-selector="my-widget-container"]',
  defaultProps: {
    showBanner: false,
    appTitle: 'Hello Widget Users',
  },
  clean: true,
});
