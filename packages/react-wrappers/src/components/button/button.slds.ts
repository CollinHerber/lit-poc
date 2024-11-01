import React from 'react';
import { createComponent } from '@lit/react';
import { NjcButtonSlds } from '@collin/lit-components/slds';

export const MyElementComponent = createComponent({
    tagName: 'nsc-button',
    elementClass: NjcButtonSlds,
    react: React,
    events: {},
});
