import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul id="nav-mobile" class="right NavigationItems">
        <NavigationItem link="/" active>Inicio</NavigationItem>
        <NavigationItem link="/">Personalizacion</NavigationItem>
        <NavigationItem link="/">Licitaciones</NavigationItem>
        <NavigationItem link="/">Carga de datos</NavigationItem>
    </ul>
);

export default navigationItems;