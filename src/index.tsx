import habitat from 'preact-habitat';
import App from './App';

const { render } = habitat(App);

render({
  // selector: '[data-selector="my-widget-container"]',
  selector: 'body',
  defaultProps: {
    showBanner: true,
  },
  clean: true,
});
