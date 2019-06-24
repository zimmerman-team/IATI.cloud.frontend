import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ListControls from 'app/components/datadisplay/Lists/ListControls';
import styled from 'styled-components';
import List from '@material-ui/core/List';

type Props = {
  data: object;
};

const FilterMenu: React.FC<Props> = props => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

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

  const BaseComponent = styled(props => <Popper {...props} />)`
  & [class*='MuiPaper-root'] {
    max-height: 614px;
    overflow: scroll;
  }
  ,
  & [class*='MuiList-root'] {
    padding: 0px;
  }
  ,
`;
  return (
    <div>
      <div>
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <BaseComponent
          open={open}
          anchorEl={anchorRef.current}
          keepMounted
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom'
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <ListControls data={props.data} />
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </BaseComponent>
      </div>
    </div>
  );
};

export default FilterMenu;
