import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import  TaxAssistNav, { TaxAssistNavProps }  from './TaxAssistNav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Example/TaxAssistNav',
    component: TaxAssistNav
} as Meta;

const Template :Story<TaxAssistNavProps> = (args) => <TaxAssistNav {...args}/>;

export const LoggedInNavStory = Template.bind({});

LoggedInNavStory.args = {
  name: "Samuel Tambunan",
};