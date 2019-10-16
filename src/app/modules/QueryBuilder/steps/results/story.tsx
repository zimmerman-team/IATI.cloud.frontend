import React from 'react';
import { storiesOf } from '@storybook/react';
import { ResultsLayout } from './layout';
import Providers from 'app/Providers';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(' step 4: results ', () => (
  <Providers>
    <Container maxWidth="lg">
      <ResultsLayout />
    </Container>
  </Providers>
));
