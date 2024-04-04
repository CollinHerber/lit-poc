import { LitElement, unsafeCSS } from 'lit'
import styles from '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css?inline';

export class SldsComponent extends LitElement {
  static styles = [unsafeCSS(styles)];
}
