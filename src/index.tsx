import { render } from 'preact';
import App from './App';

export class MountFunctions {
  static mountOnDataTarget(htmlSelector: string) {
    const element = document.querySelector(htmlSelector);
    if (element) {
      render(<App showBanner />, element);
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  MountFunctions.mountOnDataTarget('[data-selector="my-library-target"]');
});
