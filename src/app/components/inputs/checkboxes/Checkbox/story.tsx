import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Checkboxes/', module).add('Checkbox', () => (
  <Providers>
    <Component onChange={handleChange('hoi')} checked />
  </Providers>
));

const handleChange = (name: string) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  // setState({ ...state, [name]: event.target.checked });
};
