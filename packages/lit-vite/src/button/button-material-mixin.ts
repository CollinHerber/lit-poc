import { html, unsafeCSS } from 'lit';
import { NjcButton } from './button.ts';

import '@material/web/icon/icon.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/filled-tonal-button.js';

export type NJC_BUTTON_MATERIAL_VARIANT = 'filled' | 'outlined' | 'text' | 'elevated' | 'filled-tonal';
// eslint-disable-next-line no-unused-vars
type Constructor<T = {}> = new (...args: any[]) => T;
import styles from '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css?inline';
import { property } from 'lit/decorators.js';

export const NjcButtonMaterialMixin = <T extends Constructor<NjcButton>>(superClass: T) => {
    class NjcButtonMaterialMixinClass extends superClass {
        @property() variant: NJC_BUTTON_MATERIAL_VARIANT = 'filled';

        static styles = [unsafeCSS(styles)];

        override render() {
            return html`
              <md-filled-button @click=${this.onClick}>count is ${this.count}</md-filled-button>
            `;
        }
    }

    // Cast return type to the superClass type passed in
    return NjcButtonMaterialMixinClass as T;
};
