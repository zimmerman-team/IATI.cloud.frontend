import React from 'react';
import { storiesOf } from '@storybook/react';
import { OrganisationFragment } from '.';
import Providers from 'app/Providers';
import styled from 'styled-components';
import { DebugBox } from 'app/utils/layout';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(' step 1: organisation ', () => (
  <Providers>
      <Container maxWidth="lg">
        <OrganisationFragment />
      </Container>
  </Providers>
));
