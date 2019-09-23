import React, { Component } from 'react';

class ATable extends Component {

	state = {
		checkOut: false
	}

	aTableStyle = {
		postion: 'relative',
		left: 'auto',
		display: 'inline-block',
		border: 'double',
	};

	handleOnClick = (e) => {
		this.props.placeOrder(this.props.name);
		this.setState({checkOut: true})
	}

	render() {
		return (
			<div style={this.aTableStyle}>
				<h3>Table {this.props.name}</h3>
				<button onClick={this.handleOnClick}>Order</button>
				<button disabled={!this.state.checkOut} onClick={(e) => this.props.handleCheckOut(this.props.name)}>Check Out</button>
			</div>

			)
	}
}

export default ATable;