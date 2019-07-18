import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

type SnackBarProps = {
  message?: string;
  onClose?: () => void;
  variant: keyof typeof variantIcon;
  open?: boolean;
  anchorOrigin?: object;
};

const useStyles = makeStyles(() => ({
  success: {
    backgroundColor: '#f25139',
  },
  error: {
    backgroundColor: '#46b275',
  },
  info: {
    backgroundColor: '#FFFFFF',
    color: 'black',
    '& svg': {
      color: 'blue',
    },
  },
  warning: {
    backgroundColor: '#f7ad1b',
  },
}));

const BaseSnackbar = styled(props => <Snackbar {...props} />)`
  & [class*='MuiSnackbarContent-root'] {
    padding: 8px 24px;
  }

  & [class*='MuiPaper-elevation6'] {
    box-shadow: none;
  }

  & [id*='client-snackbar'] {
    display: flex;
  }

  & [class*='MuiSvgIcon-root'] {
    margin-right: 16px;
  }
`;

const SnackBar = (props: SnackBarProps) => {
  const [open, setOpen] = React.useState(props.open);
  const { message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];
  const classes = useStyles();

  function handleClose(event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  return (
    <BaseSnackbar
      anchorOrigin={props.anchorOrigin}
      open={open}
      autoHideDuration={8000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[variant])}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar">
            <Icon />
            {message}
          </span>
        }
        {...other}
      />
    </BaseSnackbar>
  );
};
export default SnackBar;

SnackBar.defaultProps = {
  message:
    'New content is available and will be used when all tabs of this page are closed',
  variant: 'info',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};
