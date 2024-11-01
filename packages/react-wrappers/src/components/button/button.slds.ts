import React from 'react';
import { createComponent } from '@lit/react';
import { NscButton } from '@collin/lit-components/slds';

export const MyElementComponent = createComponent({
    tagName: 'nsc-button',
    elementClass: NscButton,
    react: React,
    events: {},
});
