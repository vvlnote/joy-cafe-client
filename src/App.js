import React, { Component } from 'react';

import './App.css';
import ATable from './components/atable';

class App extends Component {

  
  placeOrder(tableName) {
    console.log('placeOrder', tableName);
  }

  handleCheckOut(tableName) {
    console.log('checkOut', tableName);
  }

  initializeTables() {
    const tablesCount = 6;
    let array = [];
    for (let i = 0; i < tablesCount; i ++) {
      array.push(<ATable key={i} name={i+1} placeOrder={this.placeOrder} 
        handleCheckOut={this.handleCheckOut}/>);
    }
    return array;
  }
  render() {
    let tables = this.initializeTables();
    return (
      <div className="App">
        {tables}
      </div>
    );
  }
}

export default App;
