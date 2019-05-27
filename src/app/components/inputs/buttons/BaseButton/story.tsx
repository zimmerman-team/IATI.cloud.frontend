import React from 'react';
import { storiesOf } from '@storybook/react';
import BaseButton from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons', module).add('BaseButton', () => (
  <Providers>
    <BaseButton label="Large" size="large" />
    <BaseButton label="Medium" />
    <BaseButton label="Small" size="small" />
  </Providers>
));
