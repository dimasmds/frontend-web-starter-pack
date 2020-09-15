import { html } from 'lit-html';
import CommonElement from '../__base__/CommonElement';
import style from './style.scss';

class AppElement extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div class="app">
        <h1>Hello</h1>
      </div>
    `;
  }
}

customElements.define('app-element', AppElement);
