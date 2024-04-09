import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SldsComponent } from '../slds-component.ts';

/**
 * A button that counts the number of times it has been clicked.
 * @element njc-button
 */
@customElement('njc-button')
export class NjcButton extends SldsComponent {
  /**
   * The number of times the button has been clicked.
   * @type {number}
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <button class="slds-button slds-button_brand" @click=${this.onClick}>
        count is ${this.count}
      </button>
    `;
  }

  private onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'njc-button': NjcButton
  }
}
