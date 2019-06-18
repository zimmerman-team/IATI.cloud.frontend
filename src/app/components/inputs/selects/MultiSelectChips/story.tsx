import React from 'react';
import { storiesOf } from '@storybook/react';
import MultiSelectChips from '.';
import Providers from 'app/Providers';

const mockData = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];

storiesOf('Inputs|Selects/', module).add('Multi Select Chips', () => (
  <Providers>
    <MultiSelectChips
      items={mockData}
      label="Multiple Chip Select"
      helperText="Assitive text"
    ></MultiSelectChips>
  </Providers>
));
