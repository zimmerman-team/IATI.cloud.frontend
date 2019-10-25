import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoreFiltersFragment } from '.';
import Providers from 'app/Providers';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(' step 1: organisation ', () => (
  <Providers>
      <Container maxWidth="lg">
        <CoreFiltersFragment />
      </Container>
  </Providers>
));
