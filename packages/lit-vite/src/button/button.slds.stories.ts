import './button.slds';
import { NscButton } from './button.slds';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta<NscButton> = {
    title: 'Components/Button/Slds',
    component: 'nsc-button',
    tags: ['autodocs'],
};
export default meta;

const template = args => html`
<nsc-button variant="${args.variant}">
    ${args.defaultSlot}
</nsc-button>
`;

type Story = StoryObj<NscButton & { defaultSlot: string }>;
export const SldsExample: Story = {
    render: (args) => template(args),
    args: {
        variant: 'neutral',
        defaultSlot: 'Button',
    },
};
