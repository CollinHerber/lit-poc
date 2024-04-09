import { html, unsafeCSS } from 'lit';
// eslint-disable-next-line no-unused-vars
type Constructor<T = {}> = new (...args: any[]) => T;
import styles from '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css?inline';
import { NjcButton } from './button.ts';

export const NjcButtonSldsMixin = <T extends Constructor<NjcButton>>(superClass: T) => {
    class NjcButtonSldsMixinClass extends superClass {
        static styles = [unsafeCSS(styles)];

        override render() {
		    return html`
            <button class="slds-button slds-button_brand" @click=${this.onClick}>
                count is ${this.count}
            </button>
        `;
        }
    }

    // Cast return type to the superClass type passed in
    return NjcButtonSldsMixinClass as T;
};
