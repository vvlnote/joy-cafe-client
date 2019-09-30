import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';
import { fetchIngredients } from './actions/types'
import DishesContainer from './containers/DishesContainer';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom';
import Home from './containers/Home';
import Navigation from './components/Navigation';
import InventoryContainer from './containers/InventoryContainer';

class App extends Component {


  	componentDidMount() {
    	this.props.fetchIngredients();

  	}

	render() {

		return(
			<Router>
				<Navigation />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/Orders/:id" component={DishesContainer} />
					<Route path="/Inventory" component={InventoryContainer} />
				</Switch>
			</Router>
			)
	}
}

export default connect(null, {fetchIngredients})(App);