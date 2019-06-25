import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from './index';
import Providers from 'app/Providers';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const data = [
  [
    'Activity',
    [
      'Activity Status',
      'Activity periode',
      'Activity Scope',
      'Aid type',
      'Aid Type (category)',
      'Aid Type Vocabulary'
    ]
  ],
  [
    'Transaction',
    [
      'Budget identifier',
      'Budget identifier sector',
      'Budget identifier sector (catagory)',
      'Budget identifier',
      'Budget identifier sector',
      'Budget identifier sector (catagory)',
      'Budget identifier',
      'Budget identifier sector',
      'Budget identifier sector (catagory)'
    ]
  ]
];
const MyComponent: React.FC = () => {
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
        Button look into source of this story for implementation example
      </Button>
      <ClickAwayListener onClickAway={handleClose}>
        <Component data={data} anchorRef={anchorRef} open={open} />
      </ClickAwayListener>
    </Box>
  );
};

storiesOf('Navigation|Menus/', module).add('FilterMenu', () => (
  <Providers>
    <MyComponent />
  </Providers>
));
