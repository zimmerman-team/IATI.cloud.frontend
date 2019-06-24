import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Selects/', module).add('Multi Select Chips ', () => (
  <Providers>
    <Component helperText="Assitive text" />
  </Providers>
));
