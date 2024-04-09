import { NjcButton } from './button.ts';
import { html, unsafeCSS } from 'lit';
import styles from '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css?inline';
import { customElement } from 'lit/decorators.js';

@customElement('nsc-button')
export class NjcButtonSlds extends NjcButton {
  static styles = [unsafeCSS(styles)];

  override render() {
    return html`
      <button class="slds-button slds-button_brand" @click=${this.onClick}>
        count is ${this.count}
      </button>
    `;
  }
}
