import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';
import RadioButton from 'app/components/inputs/radiobuttons/RadioButton';
import { Switch, Checkbox } from '@material-ui/core';

storiesOf('Sort|Components', module).add('Form item label', () => (
  <Providers>
    <Component control={<RadioButton />} />
    <Component control={<Switch />} />
    <Component control={<Checkbox />} />
  </Providers>
));
