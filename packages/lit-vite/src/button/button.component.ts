import { createComponent } from '@lit/react';
import React from 'react';
import { NjcButtonSlds } from './button.slds.ts';
import { NjcButtonMaterial } from './button.material.ts';

export const NjcButtonSldsReactComponent = createComponent({
  tagName: 'nsc-button',
  elementClass: NjcButtonSlds,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});

export const NjcButtonMaterialReactComponent = createComponent({
  tagName: 'nmc-button',
  elementClass: NjcButtonMaterial,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
