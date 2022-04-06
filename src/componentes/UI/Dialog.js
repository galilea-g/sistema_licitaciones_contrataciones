
import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './styles.css';

// Dialog styles with bootsrap
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

// Dialog tittle 
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other} className="Dialog__title" >
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
};

/**
 * Component which show a Dialog that receives children to show
 * 
 * @param {openDialog} openDialog Boolen: State which controls action open of the modal
 * @param {fCloseModal} fCloseModal Funcition: Controls action close of the modal
 * @param {title} title String: Text of tittle
 * 
 * @visibleName DialogComponent 💬
 * @author Galilea Granados <galilea.granados@sesaj.org>
 * 
 */
const DialogComponent = (props) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
          <BootstrapDialog
            fullScreen={fullScreen}
            aria-labelledby="responsive-dialog-title"
            open={props.openDialog}
            scroll="paper"
            fullWidth
            maxWidth="md"
          >
            <BootstrapDialogTitle id="responsive-dialog-title" onClose={props.fCloseModal}>
              {props.title } - {props.idData}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              
              {props.children}

            </DialogContent>
            <DialogActions className="Dialog__actions">
              { props.extraButtons && props.extraButtons.map((newButton) => (
                <Button onClick={newButton.action}>
                  {newButton.text}
                </Button>
              ))
              }
              <Button key="dialog__buttonClose" onClick={props.fCloseModal} >
                Cerrar
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
    );
    
}

export default DialogComponent;

