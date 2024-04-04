/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@ncino/ncino-javascript-components';

@ProxyCmp({
  inputs: ['buttonClass', 'disabled', 'fullWidth', 'label', 'theme']
})
@Component({
  selector: 'njc-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonClass', 'disabled', 'fullWidth', 'label', 'theme'],
  standalone: true,
})
export class NjcButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface NjcButton extends Components.NjcButton {}


