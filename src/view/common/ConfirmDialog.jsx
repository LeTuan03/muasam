import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react'

function ConfirmDialog(props) {
    let {
        open,
        handleClose,
        handleYesClick
    } = props;
    return (

        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            minWidth="xs"
            width="xs"
            fullWidth
        >
            <DialogTitle id="alert-dialog-title">Xác nhận thông tin</DialogTitle>
            <DialogContent>
                Bạn có muốn xác nhận xóa ?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} style={{ textTransform: "none" }} size='small' color="primary" variant='contained'>
                    Hủy
                </Button>
                <Button onClick={handleYesClick} style={{ textTransform: "none" }} size='small' color="secondary" variant='contained'>
                    Xác nhận
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
