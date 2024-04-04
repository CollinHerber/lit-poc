import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { SldsComponent } from '../slds-component.ts';

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('njc-button')
export class NjcButton extends SldsComponent {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  constructor() {
    super()
    this.count = 0
  }

  override render() {
    return html`
      <button class="slds-button slds-button_brand" @click=${this._onClick}>
        count is ${this.count}
      </button>
    `
  }

  _onClick() {
    this.count++
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'njc-button': NjcButton
  }
}
