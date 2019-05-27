/* base */
import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CookieNotice from 'app/components/utils/CookieNotice';
const ComponentBase = styled.div``;

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

const Landing: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ComponentBase>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <CookieNotice />
    </ComponentBase>
  );
};

export default Landing;
