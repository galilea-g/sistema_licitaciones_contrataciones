import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Layout from './hoc/Layout/Layout';

class App extends Component{
  render(){
    return(
      <div >
        <Layout/>
      </div>
    )
  }
}

export default App;
