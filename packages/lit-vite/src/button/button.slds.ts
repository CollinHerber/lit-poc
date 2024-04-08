import { NjcButton } from './button.ts'
import { html } from 'lit'

export class NjcButtonSlds extends NjcButton {
  override render() {
    return html`
      <button class="slds-button slds-button_brand" @click=${this.onClick}>
        count is ${this.count}
      </button>
    `;
  }
}
