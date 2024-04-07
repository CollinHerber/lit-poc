import './button';
export default {
  title: 'Components/NjcButton',
  component: 'njc-button',
  tags: ['autodocs'],
};

const Template = args => `
<njc-button
	label="${args.label}"
	theme="${args.theme}" ${args.buttonClass ? `button-class="${args.buttonClass}"` : ''} ${args.disabled ? 'disabled' : ''} ${args.fullWidth ? 'full-width' : ''}
></njc-button>
`;
export const BrandExample = Template.bind({});
BrandExample.args = {
  label: 'Brand Example',
  theme: 'brand',
  disabled: false,
  fullWidth: false,
};
BrandExample.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/KoJu0fIveu4oHe8hWfWSFU/02-SLDS-Components---Web?node-id=216%3A33&mode=dev',
  },
};
