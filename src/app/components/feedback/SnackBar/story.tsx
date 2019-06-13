import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

storiesOf('Feedback|Snackbar/', module).add('Snackbar', () => (
  <Providers>
    <Component
      message="Snackbar: a dutch eatery where mainly snacks are sold."
      open
    />
  </Providers>
));
