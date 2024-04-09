import { NjcButton, } from './button.ts';
import { NjcButtonSldsMixin } from './button-slds-mixin.ts';

class NjcButtonSlds extends NjcButtonSldsMixin(NjcButton) {}

if (!customElements.get('njc-button')) {
    customElements.define('njc-button', NjcButtonSlds);
}
