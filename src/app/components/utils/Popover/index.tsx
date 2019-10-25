import React from 'react';
import { IconButton } from 'app/components/inputs/buttons/IconButton';

import { ListControls } from 'app/components/datadisplay/Lists/ListControls';
import { Add } from '@material-ui/icons';
import { Popover } from '@material-ui/core';

export const AddFilterModule = props => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

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
      <IconButton icon={<Add />} label="Add Filter" onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ListControls
          data={props.data}
          onCheckChange={props.onCheckChange}
          addedFilterOptions={props.addedFilterOptions}
        />
      </Popover>
    </>
  );
};
