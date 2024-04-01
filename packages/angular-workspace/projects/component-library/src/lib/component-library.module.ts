import { DIRECTIVES } from './stencil-generated';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '../../../../../stencil-library/loader';

@NgModule({
  exports: [...DIRECTIVES],
  imports: [
    DIRECTIVES,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class ComponentLibraryModule { }
