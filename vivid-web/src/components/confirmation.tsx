import * as React from 'react';
import { Dialog, DialogContent, Typography, Button, DialogActions, DialogContentText, DialogTitle } from '@material-ui/core';
import { defineBoundAction } from 'mobx/lib/internal';

export interface ConfirmationProps {
    onConfirm(): void;
    onCancel(): void;
    open: boolean;
    confirmLabel?: string;
    message?: string;
    title?: string;
}

const Confirmation = ({ onConfirm, onCancel, open, confirmLabel, message, title }: ConfirmationProps) => {
    return (<Dialog open={open} maxWidth="md" fullWidth onClose={() => onCancel()}>
        <DialogTitle>
            {title ? title : "Confirmation"}
            <DialogContentText>
                {message ? message : "Are You Sure?"}
            </DialogContentText>
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => onCancel()} color="secondary">
                Cancel
          </Button>
            <Button onClick={() => onConfirm()} color="primary" variant="contained">
                {confirmLabel ? confirmLabel : "Save"}
            </Button>
        </DialogActions>
    </Dialog>)
}


export default Confirmation;