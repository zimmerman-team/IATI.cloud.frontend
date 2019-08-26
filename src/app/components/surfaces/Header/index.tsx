import React from 'react';
import Container from '@material-ui/core/Container';
import { HeaderModel } from './model';
import Background from 'app/components/surfaces/Background';
import AppBar from 'app/components/surfaces/AppBar';
import { Box } from '@material-ui/core';

export const Header = (props: HeaderModel) => {
  return (
    <Background>
      <Container maxWidth="lg">
      <AppBar />
        {props.children &&
          <>
            <Box width="100%" height="64px"/>
            {props.children}
          </>}
      </Container>
    </Background>
  );
};
