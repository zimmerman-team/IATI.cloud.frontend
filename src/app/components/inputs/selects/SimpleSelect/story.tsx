import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleSelect from '.';

storiesOf('Inputs|Selects/', module).add('Simple Select', () => (
  <div>
    <SimpleSelect />
    <SimpleSelect />
  </div>
));
