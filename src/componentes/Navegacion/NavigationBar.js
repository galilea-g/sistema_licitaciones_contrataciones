import './index.css';

import { Outlet, NavLink} from "react-router-dom";
import logo from '../../assets/imagenes/logo.png'

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  useTheme,
  useMediaQuery,
  Grid
} from "@material-ui/core";
import DrawerComponent from "./DrawerComponent";
import DropDownMenu from "./DropDownMenu"


/* Manejo de la barra de navegacion del menu */

/*
Nombre: Navigation Bar
Autor RJM
Fecha: 24 Noviembre 2021

Proposito: 
Manejar el menu del sistema como una barra de navegación.
La barra ṕuede soportar iconos con nombres, aunque para esta version se eliminaron los iconos, igualmente puede manejar diferentes niveles de dropdown 

En el componente NavBar dentro del NavigationBar se establece la estructura de la navegación. Si se desea que el item solo este en primer nivel basta con señalar el nombre y la liga al componente que activa
Si se desea un dropdown menu, el dropdown debe ir anidado en el item de la barra superior. 

Las rutas deben estar establecidas en el archivo index.js

Este componente debe llamarse desde el componente principal App.

Mejoras futuras:
a) Hacer modular el dropdown menu para pasar nombres y ligas asociadas
b) inmediata: Reactivo con drawer


*/ 


function NavigationBar() {
  const itemsDrop = [{ nombre: 'Licitación' , liga:'/licitaciones'}, { nombre: 'Documentos', liga:'/login' }];
  const itemsDos = [{ nombre: 'Búsqueda' , liga:'/seleccion'}, { nombre: 'Login', liga:'/login' }];
  const itemsCatalogos = [{ nombre: 'Areas' , liga:'/areas'}, { nombre: 'Etapas', liga:'/etapas' }, { nombre: 'Particulares', liga:'/particulares' }, { nombre: 'Servidores', liga:'/servidores' }];
  const theme = useTheme();
  let isMobile = useMediaQuery(theme.breakpoints.down("sm"));

return (
  <div>
  <Navbar className="">
  <Grid container
  direction="row"
  justifyContent="space-between"
  alignItems="flex-start" spacing={2}>
    <Grid item xs={6}sm={6}  md={4}>
      <img src={logo} alt="logo" className="logo" />

    </Grid>
   <Grid item sm="auto"></Grid>
      
   {isMobile ? 
   
   <Grid item xs={1} sm={2} >

          <DrawerComponent />
        </Grid>
     :<Grid item sm={5} md={5}>
        <Navbar className='border-none'>
          <NavItem  className="navlinks" nombre="Login" liga="/login"/>
          <DropDownMenu nombre ='Catálogos'  ligasMenu={itemsCatalogos} />
          <DropDownMenu nombre ='Licitaciones'  ligasMenu={itemsDrop} />
          <DropDownMenu nombre ='Busqueda' ligasMenu={itemsDos} />
        </Navbar>
      </Grid>
  }
  </Grid>
    </Navbar>
    <Outlet />
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className={"navbar"+props.className}>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}



function NavItem(props) {
  const [open, setOpen] = useState(false);
/*
  Manejo de Items individuales del menu 
*/
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


