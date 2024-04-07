import { createComponent } from '@lit/react';
import React from 'react';
import { NjcButton } from './button.ts';

export const NjcButtonComponent = createComponent({
  tagName: 'njc-button',
  elementClass: NjcButton,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
