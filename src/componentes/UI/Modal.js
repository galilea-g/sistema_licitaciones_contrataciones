import React, { Component, useState } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

/**
 * Componente ModalComponent general para mostrar ventana emergente con contenido que le es enviado
 * El modal será manejado desde el componente padre que se encargá de enviarle la información directamente
 * 
 * @param {bool} openModal (bool) variable que mostrará el modal
 * @param {function} closeModal - (function) Se ejecutará al dar click en backdrop para cerrar modal
 * 
 * ```
 * ***Ejemplo de función para cerrar modal
 * const handler_cerrarInfoLicitacion = () => {
 *  setMostrarModal(false);
 * }
 * <ModalComponent closeModal={handler_cerrarInfoLicitacion}>
 * ```
 * 
 * @returns {Component} (Modal) componente React
 * 
 * 
 */
const ModalComponent = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        width: '80%'
    };
    
    const [open, setOpen] = useState(props.openModal);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        props.closeModal()
    };

    return (
        <Aux>
            <Modal
                open={props.openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {props.children}
                </Box>
            </Modal>
        </Aux>
    )
}

export default ModalComponent;