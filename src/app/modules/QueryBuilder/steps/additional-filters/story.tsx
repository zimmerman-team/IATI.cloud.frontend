import React from 'react';
import { storiesOf } from '@storybook/react';
import { AdditionalFiltersLayout } from './layout';
import Providers from 'app/Providers';
import styled from 'styled-components';
import { DebugBox } from 'app/utils/layout';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(
  ' step 2: additional filters ',
  () => (
    <Providers>
      <DebugBox>
        <Container maxWidth="lg">
          <AdditionalFiltersLayout />
        </Container>
      </DebugBox>
    </Providers>
  ),
);
