// @ts-nocheck
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { css } from "styled-components/macro";

interface ResetDialogParams {
  message?: string;
  cancelButtonText?: string;
  resetButonText?: string;
}

export const ResetDialog = (props: ResetDialogParams) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Are you sure want to reset your query?
      </DialogTitle>
      {/* <DialogContent>
        
      </DialogContent> */}
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};


