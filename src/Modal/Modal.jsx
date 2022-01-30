import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CustomizedProgressBars from "./stat";
import { useStyles } from "./ModalStyle";

export default function CustomizedDialogs(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    let classes = useStyles();
    return (
        <>
            <Button 
                className={classes.click} 
                variant="outlined" 
                color="primary" 
                onClick={handleClickOpen}
                style={{background:props.bColor, boxShadow: `0.5px 0.5px 15px 1px ${props.bColor}`}}    
            >
                Click to view stat
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <MuiDialogTitle id="customized-dialog-title" className={classes.heading}>
                    {props.name}
                </MuiDialogTitle>
                <div className={classes.content}>
                    <DialogContent dividers className={classes.left}>
                        <Typography gutterBottom>
                            <img src={props.image} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Typography>
                    </DialogContent>
                    <DialogContent dividers className={classes.right}>
                        <Typography gutterBottom>
                            <CustomizedProgressBars
                                stats={props.stats}
                            />
                        </Typography>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    );
}
