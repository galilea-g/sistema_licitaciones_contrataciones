import React, { Component } from 'react';

import './Layout.css';
import Aux from '../Auxi/Auxi';
import Toolbar from '../../componentes/Navegacion/Toolbar';


class Layout  extends Component {
    render(){
        return(
            <Aux>
                <Toolbar/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
