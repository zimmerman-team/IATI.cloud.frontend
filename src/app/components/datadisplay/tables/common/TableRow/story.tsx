import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './';
import Providers from 'app/Providers';

storiesOf('Data display|Table/common', module).add('Table Row', () => (
  <Providers>
    <table>
      <tbody>
        <Component />
      </tbody>
    </table>
  </Providers>
));
