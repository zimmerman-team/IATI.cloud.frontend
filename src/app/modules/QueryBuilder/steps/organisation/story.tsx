import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrganisationFragmentLayout } from './layout';
import Providers from 'app/Providers';
import styled from 'styled-components';
import { DebugBox } from 'app/utils/layout';
import { Container } from '@material-ui/core';

const Contaminated = styled.div`
  display: block;
  margin-left: 80px;
  margin-right: 80px;
  padding-left: 32px;
  padding-right: 32px;
  max-width: 1024px;
  width: 1024px;
`;

storiesOf('Modules|Query Builder', module).add(' step 1: organisation ', () => (
  <Providers>
    <DebugBox>
      <Container maxWidth="lg">
        <OrganisationFragmentLayout />
      </Container>
    </DebugBox>
  </Providers>
));
