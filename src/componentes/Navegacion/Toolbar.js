import React from 'react';

import './Toolbar.css';
import Logo from '../UI/Logo';
import NavigationItems from '../Navegacion/NavegationItems';


const toolbar = (props) => (
    <header className="Toolbar">
        <div className="Logo">
            <Logo/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;