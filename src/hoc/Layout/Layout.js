import React, { Component } from 'react';

import './Layout.css';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../componentes/Navegacion/Toolbar';
import Licitaciones from '../../componentes/Licitaciones/Licitaciones';


class Layout  extends Component {
    render(){
        return(
            <Aux>
                <Toolbar/>
                <div className="Content">
                    <Licitaciones/>
                </div>
            </Aux>
        )
    }
}

export default Layout;
