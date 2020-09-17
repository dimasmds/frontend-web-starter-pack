import { html } from 'lit-html';
import CommonElement from '../__base__/CommonElement';
import style from './style.scss';

class AppElement extends CommonElement {
  static get styles() {
    return [...super.styles, style];
  }

  static get properties() {
    return {
      _title: { type: String },
    };
  }

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._title = '';
  }

  render() {
    return html`
      <div class="app">
        <h1>${this._title}</h1>
      </div>
    `;
  }
}

customElements.define('app-element', AppElement);
