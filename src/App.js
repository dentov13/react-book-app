import React, { Component } from 'react';
import Logo from './components/Logo.jsx';
import Excel from './components/Excel.jsx';
import './App.css';

class App extends Component {
  render() {
    var headers = localStorage.getItem('headers');
    var data = localStorage.getItem('data'); 

    if (!headers) {
      headers = ['Title', 'Year', 'Rating', 'Comments'];
      data = [['Test', '2015', '3', 'meh']];
    }

    return (
      <div className="App">
        <Logo />
        <h2>Welcome to Whinepad</h2>
        <Excel headers={headers} initialData={data} />
      </div>
    );
  }
}

export default App;
