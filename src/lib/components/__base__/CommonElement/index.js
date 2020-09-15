import { LitElement } from 'lit-element';
import style from './style.scss';

class CommonElement extends LitElement {
  static get styles() {
    return [style];
  }
}

export default CommonElement;
