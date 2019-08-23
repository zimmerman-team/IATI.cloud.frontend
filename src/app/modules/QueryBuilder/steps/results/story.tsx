import React from 'react';
import { storiesOf } from '@storybook/react';
import { ResultsLayout } from './layout';
import Providers from 'app/Providers';
import styled from 'styled-components';
import { DebugBox } from 'app/utils/layout';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(' step 4: results ', () => (
  <Providers>
    <Container maxWidth="lg">
      <ResultsLayout />
    </Container>
  </Providers>
));
