import React, { Component } from 'react';

class Excel extends Component {
  // constructor() {
  //   this._renderTable = this.
  // }

  _renderToolbar() {() => console.log('toolbar')}

  _renderTable() {() => console.log('table')}

  render() {
    return (
      <div className='Excel'>
        {this._renderToolbar()}
        {this._renderTable()}
      </div>
    );
  }
}

export default Excel;