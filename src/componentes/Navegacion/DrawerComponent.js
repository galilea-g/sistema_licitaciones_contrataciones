import React, { useState } from "react";
import  {Drawer} from "@material-ui/core";

import ListItem from "@material-ui/core/ListItem";
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/**
 *@name DRAWERCOMPONENT
 *@author Raul Jacinto
 *@description Manejo del menu para garantizar su comportamiento reactivo. se llama dentro de la NavBar
 *@date 26 enero 2022
 *@version 0.9
 */

import './index.css';

import {NavLink} from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

/**
@Component DRAWER
@Description: Maneja el drawer (cajonera) que se activa cuando se detecta una pantalla de tamaño reducido
             Maneja menús y submenus de la cajonera que deben ser iguales a los del dropdown menu
@Params: por el momento ninguno

Autor RJM
Fecha 25 enero 2022

*/
function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const itemsDrop = [[ 'Edición' , '/login'], [ 'Búsqueda', '/catalogos' ]];
  const itemsDos = [[ 'Búsqueda' ,'/catalogos'], [  'Login', '/login' ]];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleExit = () =>  {
    setExpanded(false);
    setOpenDrawer(false)
  };

  return (
  <div style={{width:'600px'}}>
  <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
  <ListItem>
    <NavLink onClick={()=>handleExit()} to= "/login" className="navlinks-drawer">
                  Login
    </NavLink >
  </ListItem>

  <ListItem>
      <NavLink onClick={()=>handleExit()} to= "/catalogos" className="navlinks-drawer" >         
        Otra cosa
      </NavLink >
  </ListItem>
  <ListItem>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}style={{boxShadow: 'none'}} >
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
       <Typography style={{fontSize: '18px', padding:'0px 10px'}} className="navlinks-drawer">Accordion 2</Typography>
        </AccordionSummary>
      <AccordionDetails>
         <ListItem>
          <NavLink onClick={()=>handleExit()} to= "/catalogos" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
           <ListItem> 
                <NavLink onClick={()=>handleExit()} to= "/catalogos" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
          <ListItem>
                <NavLink onClick={()=>handleExit()} to= "/login" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
      </AccordionDetails>
  </Accordion>
  </ListItem>
    <ListItem>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{boxShadow: 'none'}}>

          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
       <Typography style={{fontSize: '18px', padding:'0px 10px'}}className="navlinks-drawer">Accordion 2</Typography>


        </AccordionSummary>
        <AccordionDetails>
         <ListItem>
          <NavLink onClick={()=>handleExit()} to= "/catalogos" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
           <ListItem> 
                <NavLink onClick={()=>handleExit()} to= "/catalogos" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
          <ListItem>
                <NavLink onClick={()=>handleExit()} to= "/login" className="navlinks-drawer-sm">         
            Otra cosa
          </NavLink >
          </ListItem>
      </AccordionDetails>
  </Accordion>
  </ListItem>
  </Drawer>
  <IconButton onClick={() => setOpenDrawer(!openDrawer)} className="icon-menu">
    <MenuIcon />
  </IconButton>
  </div>
  );
}

export default DrawerComponent;
