/* @flow */

import CRUDStore from './flux-imm/CRUDStore';
import Logo from './components/Logo';
import React, {Component} from 'react';
import Whinepad from './components/Whinepad';
import schema from './schema';
import './App.css';

class App extends Component {
  render() {

    CRUDStore.init(schema);
    
    return (
      <div>
        <div className="app-header">
          <Logo/> Welcome to Whinepad!
        </div>
        <Whinepad />
      </div>
    );
  }
}

export default App;
