import React from 'react';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FooterSM } from './FooterSM';
import { FooterMD } from './FooterMD';
import { FooterLG } from './FooterLG';

//Decided to split up the components per breakpoint for faster detection of faulty code.
export const Footer = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.up('md'));

  if(sm){ return <FooterSM />}
  if(md){ return <FooterMD />}
  if(lg){ return <FooterLG />}

  return <FooterLG />
};
