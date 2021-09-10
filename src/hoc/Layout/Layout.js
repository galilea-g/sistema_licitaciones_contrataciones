import React, { Component } from 'react';

import './Layout.css';
import Aux from '../Aux/Aux';
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