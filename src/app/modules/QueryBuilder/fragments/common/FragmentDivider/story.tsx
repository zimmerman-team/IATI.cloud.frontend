import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from 'src/app/modules/QueryBuilder/fragments/common/FragmentDivider/index';
import Providers from 'src/app/Providers';

storiesOf('Common|FragmentDivider', module).add('Fragment Divider', () => (
  <Providers>
    <Component />
  </Providers>
));
