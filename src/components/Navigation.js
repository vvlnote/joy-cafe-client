import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navigation extends Component {

	link = {
		width: '100px',
		padding: '12px',
		margin: '0 6px 3px',
		background: 'green',
		textDecoration: "none",
		display: 'inline-block',
	}
	render() {

		return (
			<div>
				<NavLink
					to='/'
					exact
					style={this.link}
					activeStyle={{
						background: 'blue',
						color: 'white'
					}}
					>Home
				</NavLink>
				
				<NavLink
					to='/Inventory'
					exact
					style={this.link}
					activeStyle={{
						background: 'blue',
						color: 'white'
					}}
					>Inventory
				</NavLink>
			</div>
			)
	}
}

export default Navigation;