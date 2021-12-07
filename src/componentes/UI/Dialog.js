import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import './styles.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

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

const DialogComponent = (props) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
          <BootstrapDialog
            fullScreen={fullScreen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            open={props.openDialog}
            scroll="paper"
            fullWidth
            maxWidth="md"
          >
            <BootstrapDialogTitle id="responsive-dialog-title" onClose={props.closeModal}>
              {props.title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
              
              {props.children}

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>
                Editar
              </Button>
              <Button autoFocus>
                Cerrar
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </div>
    );
    
}

export default DialogComponent;