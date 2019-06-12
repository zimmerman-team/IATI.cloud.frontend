import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

type Props = {
  triggerEvent?: CustomEvent<any>;
  message: string;
};

const ZimmerSnackbar = styled(props => <Snackbar {...props} />)``;

const SnackBar: React.FC<Props> = props => {
  const [open, setOpen] = React.useState(true);

  function handleClose(
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  }

  return (
    <ZimmerSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={open}
      autoHideDuration={1000000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id'
      }}
      message={<span id="message-id">{props.message}</span>}
      action={[
        <IconButton aria-label="Close" onClick={handleClose} color="inherit">
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default SnackBar;
