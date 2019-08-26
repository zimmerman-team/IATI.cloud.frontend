import React from 'react';
import IconButton from 'app/components/inputs/buttons/IconButton';

import ListControls from 'app/components/datadisplay/Lists/ListControls';
import data from 'app/components/datadisplay/Lists/ListControls/mock';
import { Add } from '@material-ui/icons';
import { Popover } from '@material-ui/core';

export const AddFilterModule = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
    <IconButton
      icon={<Add/>}
      label="Add Filter"
      onClick={handleClick}>
    </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ListControls data={data}/>
      </Popover>
    </>
  );
};
