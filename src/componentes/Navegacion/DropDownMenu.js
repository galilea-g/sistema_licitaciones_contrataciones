import './index.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {NavLink} from "react-router-dom";

export default function DropDownMenu(ligasMenuProp) {

  return (
    <PopupState variant="popover" popupId="demo-popup-menu" >
      {(popupState) => (
        <React.Fragment>
          <a  {...bindTrigger(popupState)} className="navlinks">
          {ligasMenuProp.nombre}
          </a>
          <Menu {...bindMenu(popupState)}>

          {ligasMenuProp.ligasMenu.map((item) => 
          <NavLink className="navlinks" to={item.liga} onClick={popupState.close} > {item.nombre}</NavLink>)}

          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
