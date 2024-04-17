import { NjcButton } from './button.ts';
import { html } from 'lit';

import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-tonal-button.js';
import { customElement } from 'lit/decorators.js';


@customElement('nmc-button')
export class NjcButtonMaterial extends NjcButton {
  override render() {
    return html`
      <md-filled-button @click=${this.onClick}>
        <slot>! Missing Text !</slot>
      </md-filled-button>
    `;
  }
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface HTMLElementTagNameMap {
    'nmc-button': NjcButtonMaterial;
  }
}
