import react from "react";
import './TopBar.css';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import logo from "./../../resources/heimdall.png"

import {Toolbar} from "@material-ui/core";
import React from "react";
import { ResidenceForm } from "../ResidenceForm/ResidenceForm";
import EventEmitter from "../../utils/EventEmitter";

export function TopBar() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const listener = EventEmitter.addListener('SubmitForm', () => {setOpen(false)});

    return (        
            <Toolbar className="topbar">
                <img className="logo" alt="logo" src={logo}/>
                <Button variant="contained" onClick={handleClickOpen}>
                    Add Residence
                </Button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Residence</DialogTitle>
                    <DialogContent>
                        <ResidenceForm></ResidenceForm>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>

            </Toolbar>            
    );
    

}



