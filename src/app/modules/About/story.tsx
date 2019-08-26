import React from 'react';
import { storiesOf } from '@storybook/react';
import { About } from './index';
import Providers from 'app/Providers';
import { DebugBox } from 'app/utils/layout';

storiesOf('Modules|Page', module).add('Page - about', () => (
  <>
    <Providers>
      <About />
    </Providers>
  </>
));
