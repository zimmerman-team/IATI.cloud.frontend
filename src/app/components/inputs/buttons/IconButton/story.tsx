import React from 'react';
import { storiesOf } from '@storybook/react';
import IconButton from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons/', module).add('IconButton', () => (
  <Providers>
    <IconButton label="XML Workbook" />
  </Providers>
));
