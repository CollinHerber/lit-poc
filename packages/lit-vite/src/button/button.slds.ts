import { NjcButton } from './button.ts';
import { html, unsafeCSS } from 'lit';
import styles from '../index.scss?inline';
import { customElement } from 'lit/decorators.js';

@customElement('nsc-button')
export class NscButtonSlds extends NjcButton {
    static styles = [unsafeCSS(styles)];

    private get _themeClass() {
        switch (this.variant) {
            case 'neutral':
                return 'slds-button_neutral';
            case 'brand':
                return 'slds-button_brand';
            case 'outline-brand':
                return 'slds-button_outline-brand';
            case 'destructive':
                return 'slds-button_destructive';
            case 'text-destructive':
                return 'slds-button_text-destructive';
            case 'success':
                return 'slds-button_success';
            default:
                return '';
        }
    }

    override render() {
        return html`
            <button class="slds-button ${this._themeClass}" @click=${this.onClick}>
                <slot>! Missing Text !</slot>
            </button>
        `;
    }
}

declare global {
    // eslint-disable-next-line no-unused-vars
    interface HTMLElementTagNameMap {
        'nsc-button': NscButtonSlds;
    }
}
