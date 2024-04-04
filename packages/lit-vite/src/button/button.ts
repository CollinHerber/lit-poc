import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import '../reset.ts';
import '../index.scss';

/**
 * An example element.
 *
 * @csspart button - The button
 */
@customElement('njc-button')
export class NjcButton extends LitElement {
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
      <button class="slds-button" @click=${this._onClick}>
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
