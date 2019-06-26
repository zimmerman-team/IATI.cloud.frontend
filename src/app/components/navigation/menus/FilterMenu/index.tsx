import React from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ListControls from 'app/components/datadisplay/Lists/ListControls';
import styled from 'styled-components';

type Props = {
  data: any;
  anchorRef?: any;
  open: boolean;
};

const BaseComponent = styled(props => <Popper {...props} />)`
  z-index: 1;

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

const FilterMenu: React.FC<Props> = props => {
  return (
    <BaseComponent
      open={props.open}
      anchorEl={props.anchorRef ? props.anchorRef.current : null}
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
            <ListControls data={props.data} />
          </Paper>
        </Grow>
      )}
    </BaseComponent>
  );
};

export default FilterMenu;
