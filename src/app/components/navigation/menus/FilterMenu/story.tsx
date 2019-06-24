import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';

const data = [
  [
    'Activity',
    [
      'Activity Status',
      'Activity periode',
      'Activity Scope',
      'Aid type',
      'Aid Type (category)',
      'Aid Type Vocabulary'
    ]
  ],
  [
    'Transaction',
    [
      'Budget identifier',
      'Budget identifier sector',
      'Budget identifier sector (catagory)'
    ]
  ]
];

storiesOf('Navigation|Menus/', module).add('FilterMenu', () => (
  <Providers>
    <Component data={data} />
  </Providers>
));
