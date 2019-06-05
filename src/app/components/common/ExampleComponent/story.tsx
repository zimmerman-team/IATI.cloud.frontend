import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from 'app/components/common/ExampleComponent/index';
import Providers from 'app/Providers';

storiesOf('Example', module).add('Example', () => (
  <Providers>
    <Component />
  </Providers>
));
