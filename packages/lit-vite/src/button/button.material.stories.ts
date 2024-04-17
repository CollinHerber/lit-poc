import './button.material';
import { html } from 'lit';
import { StoryObj } from '@storybook/web-components';
import { NjcButtonMaterial } from './button.material';
export default {
  title: 'Components/Button/Material',
  component: 'nmc-button',
  tags: ['autodocs'],
};

const template = args => html`
<nmc-button variant="${args.variant}">
    ${args.defaultSlot}
</nmc-button>
`;

type Story = StoryObj<NjcButtonMaterial & { defaultSlot: string }>;
export const Example: Story = {
  render: (args) => template(args),
  args: {
    variant: 'neutral',
    defaultSlot: 'Button',
  },
};
