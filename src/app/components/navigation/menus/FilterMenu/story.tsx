import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import data from './mock';

const MyStoryComponent = () => {
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event: React.MouseEvent<EventTarget>) {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  }

  return (
    <Box>
      <Button
        ref={React.useRef<HTMLButtonElement>(null)}
        aria-controls="menu-list-grow"
        aria-haspopup="true"
        onClick={() => handleToggle()}
      >
        Toggle buttons
      </Button>
      <ClickAwayListener onClickAway={handleClose}>
        <Component data={data} anchorRef={anchorRef} open={open} />
      </ClickAwayListener>
    </Box>
  );
};

storiesOf('Navigation|Menus/', module).add('FilterMenu', () => (
  <Providers>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <MyStoryComponent />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Component data={data} open />
      </Grid>
    </Grid>
  </Providers>
));
