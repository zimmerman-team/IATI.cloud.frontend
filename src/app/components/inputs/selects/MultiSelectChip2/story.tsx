import React from 'react';
import { storiesOf } from '@storybook/react';
import MultiChipSelect2 from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Selects/', module).add('Multi Select Chips2 ', () => (
  <Providers>
    <MultiChipSelect2 />
  </Providers>
));
