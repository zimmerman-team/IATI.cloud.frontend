import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { Footer } from './index';

storiesOf('Surfaces|Footer', module).add('Footer', () => (
  <Providers>
    <Footer />
  </Providers>
));
