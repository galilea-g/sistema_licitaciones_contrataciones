import './index.css';

import { Outlet, NavLink} from "react-router-dom";
import logo from '../../assets/imagenes/logo.png'

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BorderBottom } from '@material-ui/icons';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

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
  return (
    <div >
    <Navbar className="">
        <img src={logo} alt="logo" className="logo" />
      <NavItem  className="navlinks" nombre="Login"     liga="/login"/>
      <NavItem  className="navlinks" nombre="Catalogos"  liga = "/catalogos"/>

      <NavItem nombre="Documentos" liga=""  className="link-dropdown">
        <DropdownMenu></DropdownMenu>
      </NavItem>
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
  console.log("props",props);
  console.log("liga", props.liga)
  console.log("liga", typeof (props.liga))

  return (
    <li>
           <NavLink
            className="navlink"

           to= {props.liga !== ""?props.liga :""} 
           

            onClick={() => setOpen(!open)}
          
              style={({ 
                isActive }) => {
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
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight*0.80;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <NavLink to="/about" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {props.children}
        {props.nombre}
        <span className="icon-right">{props.rightIcon}</span>
      </NavLink>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
        <ul>
          <li><DropdownItem nombre="Edición" /> 
          </li>

           <li />
          <li><DropdownItem nombre="Búsqueda"   /> </li>
          </ul>

        </div>
      </CSSTransition>

    </div>
  );
}

export default NavigationBar;
