import React, { useState } from 'react';

import BusquedaLicitaciones from './BusquedaLicitacion/BusquedaLicitacion';
import DialogComponent from '../UI/Dialog';
import ComponentProgress from '../UI/ComponentProgress';
import './Licitaciones.css';

/**
 * Component Main Licitaciones
 * 
 * @author Galilea Granados <galilea.granados@sesaj.org>
 */
const Licitaciones = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const f_closeDialog = () => {
        setDialogOpen(false);
    }

    const f_getDataRow = (idRow) => {
        setDialogOpen(true);
    }

    const f_editarLicitacion = () => {
        console.log("Usted va a editar el registro");
    }

    const configDialog = {
        openDialog: dialogOpen,
        fCloseModal: f_closeDialog,
        title: "Prueba de Dialog",
        extraButtons: [
            {
                text: "Editar prueba",
                action: f_editarLicitacion
            }
        ]
    }

    return (
        <div>
            <div className="licitaciones__title">
                <h1>LICITACIONES</h1>
            </div>
            <button onClick={f_getDataRow} >PRUEBAS</button>
            <DialogComponent {...configDialog}>
                <ComponentProgress key="1" type="line_label"/>
                <ComponentProgress key="2" type="circule_determinate_label"/>
                <ComponentProgress key="3" type="button_text"/>
            </DialogComponent>
            <BusquedaLicitaciones/>
        </div>
    )
}

export default Licitaciones;