import './index.css';

import { Outlet, NavLink} from "react-router-dom";
import logo from '../../assets/imagenes/logo.png'

import React, { useState } from 'react';

import {
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import DrawerComponent from "./DrawerComponent";
import DropDownMenu from "./DropDownMenu"


/* Manejo de la barra de navegacion del menu */

/**
*@name Nombre: Navigation Bar
*@author Autor RJM
*@date 24 Noviembre 2021
*@version 0.9

*@description Proposito: 
Manejar el menu del sistema como una barra de navegación.


En el componente NavBar dentro del NavigationBar se establece la estructura de la navegación. Si se desea que el item solo este en primer nivel basta con señalar el nombre y la liga al componente que activa
Si se desea un dropdown menu, el dropdown debe ir anidado en el item de la barra superior. 

Las rutas deben estar establecidas en el archivo index.js
Checa la condicion reactiva para activar el drawer
Este componente debe llamarse desde el componente principal App.
bms:
en el drawer se pueden abrir dos submenus de manera simultánea


*/ 


function NavigationBar() {
  const itemsDrop = [{ nombre: 'Edición' , liga:'/login'}, { nombre: 'Búsqueda', liga:'/catalogos' }];
  const itemsDos = [{ nombre: 'Búsqueda' , liga:'/catalogos'}, { nombre: 'Login', liga:'/login' }];
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /** ItemsDrop y Dos son ejemplos de como declarar los elementos del submenu */
return (
  <div>
  <Navbar className="">
  <img src={logo} alt="logo" className="logo" />
   {isMobile ? 
        <>
          <DrawerComponent />
        </>
     :<>
      <NavItem  className="navlinks" nombre="Login"liga="/login"/>
      <NavItem  className="navlinks" nombre="Catalogos" liga="/catalogos"/>
      <NavItem  className="navlinks" nombre="Licitaciones" liga="/catalogos"/>
      <DropDownMenu nombre ='Edición' ligasMenu={itemsDrop} />
      <DropDownMenu nombre ='Busqueda' ligasMenu={itemsDos} />
      </>
  }
    </Navbar>
    <Outlet />
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}



function NavItem(props) {
  const [open, setOpen] = useState(false);
/** Manejo de Items individuales del menu */

  return (
       <NavLink
            className="navlinks"
           to= {props.liga} 
            onClick={() => setOpen(!open)}          
              style={({isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 1rem",
                  color: isActive ? "green" : "black",
                  borderBottom: isActive ? '3px solid #5e7dca' : '3px solid white'
                };
              }}
        >

        {props.nombre}

      {open && props.children}
      </NavLink >

  );
}

export default NavigationBar;