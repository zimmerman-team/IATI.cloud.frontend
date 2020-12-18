import React, { ChangeEvent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Base from '@material-ui/core/Switch';

type Props = {
  id: string;
  value?: any;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

/* todo: refactor to styled component */
const AntSwitch = withStyles(theme => ({
  root: {
    width: 36,
    height: 20,
    padding: 0,
    display: 'flex',
    overflow: 'initial',
    margin: 9,
  },
  switchBase: {
    padding: 4,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    borderRadius: 12,
    opacity: 1,
    backgroundColor: theme.palette.grey[500],
  },
  checked: {},
}))(Base);

export const Switch = (props: Props) => {
  return <AntSwitch {...props} />;
};
