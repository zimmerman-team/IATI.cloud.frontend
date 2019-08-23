import React from 'react';
import { storiesOf } from '@storybook/react';
import { OutputFormatLayout } from './layout';
import Providers from 'app/Providers';
import styled from 'styled-components';
import { DebugBox } from 'app/utils/layout';
import { Container } from '@material-ui/core';

storiesOf('Modules|Query Builder', module).add(
  ' step 3: output format ',
  () => (
    <Providers>
      <Container maxWidth="lg">
        <OutputFormatLayout />
      </Container>
    </Providers>
  ),
);
