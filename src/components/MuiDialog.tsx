import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material"
import { useState } from "react"

const MuiDialog = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={ () => setOpen(true) } >Open Dialog</Button>
            <Dialog aria-labelledby="dialog-title" aria-describedby="dialog-description" open={open} onClose={ () => setOpen(false) } >
                <DialogTitle id='dialog-title' >Submitted the test ?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description' >Are you sure you want to submit the test? You will not able to edit after submitting.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ () => setOpen(false) } >Cancel</Button>
                    <Button autoFocus onClick={ () => setOpen(false) } variant='contained' >Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog
