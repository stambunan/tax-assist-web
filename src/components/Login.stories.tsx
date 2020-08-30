import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

export default {
    title: 'Example/LoginPage',
    component: Login
} as Meta;

const Template:Story = () => <Login/>

export const LoginStory = Template.bind({});
