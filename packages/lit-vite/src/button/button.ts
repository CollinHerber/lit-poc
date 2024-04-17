import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type NJC_BUTTON_VARIANTS = null | 'neutral' | 'outline-brand' | 'brand' | 'destructive' | 'text-destructive' | 'success';
export type NJC_BUTTON_MATERIAL_VARIANT = 'filled' | 'outlined' | 'text' | 'elevated' | 'filled-tonal';

/*
    @slot - Default slot for the button text
 */
export class NjcButton extends LitElement {
    /*
        @property - variant - The variant of the button
        @type - NJC_BUTTON_VARIANTS | NJC_BUTTON_MATERIAL_VARIANT
     */
    @property()
    variant: NJC_BUTTON_MATERIAL_VARIANT | NJC_BUTTON_VARIANTS  = 'filled';

    public onClick(e: Event) {
        this.dispatchEvent(new CustomEvent('click'));
        e.stopPropagation();
    }
}
