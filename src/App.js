import React, { Component } from 'react';

import './App.css';
import ATable from './components/atable';

class App extends Component {


  componentDidMount() {
    fetch('http://localhost:3001/dishes')
    .then(response => response.json())
    .then(dishes => { 
      console.log(dishes)
      return fetch('http://localhost:3001/ingredients')
    })
    .then(r => r.json())
    .then(ingredients => console.log(ingredients))
  }
  
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
