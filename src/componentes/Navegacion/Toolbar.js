import React from 'react';

import './Toolbar.css';
import Logo from '../UI/Logo';
import NavigationItems from '../Navegacion/NavegationItems';


const toolbar = (props) => (
    <header className="Header">
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">
                    <Logo height="5.5rem"/>
                </a>
                <NavigationItems/>
            </div>
        </nav>
    </header>
);

export default toolbar;