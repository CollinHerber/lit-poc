import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
    public count = 0;

    public onClick() {
        this.count++;
    }
}

declare global {
    // eslint-disable-next-line no-unused-vars
    interface HTMLElementTagNameMap {
        'njc-button': NjcButton
    }
}
