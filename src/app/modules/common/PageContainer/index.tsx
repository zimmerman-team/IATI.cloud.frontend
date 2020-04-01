/* base */
import React from 'react';
import Box from '@material-ui/core/Box';
import { Footer } from 'app/components/surfaces/Footer';

type PageContainerModel = {
  children: any;
  footer?: boolean;
};

// Component inspired by: https://codepen.io/cbracco/pen/zekgx
export const PageContainer = (props: PageContainerModel) => {
  return (
    <Box paddingBottom={props.footer ? '200px' : '0px'}>
      {props.children}
      {props.footer && <Footer />}
    </Box>
  );
};
