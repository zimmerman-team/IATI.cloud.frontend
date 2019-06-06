import React, {ChangeEvent} from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Switches/', module).add('Switch', () => (
  <Providers>
    <Component checked onChange={handleChange('hoi')}/>
  </Providers>
));

const handleChange = (name: string) => (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  // setState({ ...state, [name]: event.target.checked });
};
