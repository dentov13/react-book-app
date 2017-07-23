import Logo from './components/Logo';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';
import './App.css';

class App extends Component {
  render() {
    let data = JSON.parse(localStorage.getItem('data'));

    // default example data, read from the schema
    if (!data) {
      data = {};
      schema.forEach((item) => data[item.id] = item.sample);
      data = [data];
    }

    return (
      <div>
        <div className="app-header">
          <Logo/> Welcome to Whinepad!
        </div>
        <Whinepad schema={schema} initialData={data} />
      </div>
    );
  }
}

export default App;
