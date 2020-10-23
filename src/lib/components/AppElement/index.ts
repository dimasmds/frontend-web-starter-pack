import { html } from 'lit-html';
import { customElement, property } from 'lit-element';
import CommonElement from '../__base__/CommonElement';
import style from './style.scss';

@customElement('app-element')
export class AppElement extends CommonElement {
  @property() title = ''

  static get styles() {
    return [...super.styles, style];
  }

  render() {
    return html`
      <div class="app">
        <h1>${this.title}</h1>
      </div>
    `;
  }
}
