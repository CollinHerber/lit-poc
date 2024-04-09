import { NjcButton } from './button.ts';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-tonal-button.js';
import { customElement } from 'lit/decorators.js';

export type NJC_BUTTON_MATERIAL_VARIANT = 'filled' | 'outlined' | 'text' | 'elevated' | 'filled-tonal';

@customElement('njc-button')
export class NjcButtonMaterial extends NjcButton {
  @property()
  variant: NJC_BUTTON_MATERIAL_VARIANT = 'filled';

  override render() {
    return html`
      <md-filled-button @click=${this.onClick}>count is ${this.count}</md-filled-button>
    `;
  }
}
