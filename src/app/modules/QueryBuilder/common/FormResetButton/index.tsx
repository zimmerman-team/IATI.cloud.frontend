import ReplayIcon from '@material-ui/icons/Replay';
import { Grid } from '@material-ui/core';
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

interface FormResetButtonProps {
  handleClick?: any;
}

export const FormResetButton = (props: FormResetButtonProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
        // fullScreen
      >
        <DialogContent>
          <DialogTitle
            css={`
              && {
                h2 {
                  font-style: normal;
                  font-weight: 600;
                  font-size: 20px;
                  line-height: 30px;
                  text-align: center;
                  color: #222222;
                }
              }
            `}
            id="alert-dialog-title"
          >
            Are you sure want to reset your query?
          </DialogTitle>

          <DialogActions
            css={`
              && {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            `}
          >
            <Button
              css={`
                && {
                  width: 132px;
                  height: 48px;
                  background: white;
                  border-radius: 2px;
                  span {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 1.25397px;
                    color: black;
                    text-transform: capitalize;
                  }
                }
              `}
              onClick={handleClose}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              css={`
                && {
                  width: 132px;
                  height: 48px;
                  background: #ed6060;
                  border-radius: 2px;
                  span {
                    font-family: Inter;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 24px;
                    letter-spacing: 1.25397px;
                    color: white;
                    text-transform: capitalize;
                  }
                }
              `}
              onClick={() => window.location.reload(false)}
              color="primary"
              autoFocus
            >
              Reset
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Grid
        item
        xs={4}
        md={2}
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 132px;
          height: 48px;
          background-color: #f0f3f7;
          cursor: pointer;
          user-select: none;
          margin-right: 20px !important;
        `}
        // onClick={() => setOpen(true)}
        onClick={handleClickOpen}
      >
        <span
          css={`
            color: #165163;
            margin-right: 10px;
          `}
        >
          Reset
        </span>
        <ReplayIcon
          css={`
            color: #165163;
            transform: scaleX(-1);
          `}
        />
      </Grid>
    </>
  );
};
