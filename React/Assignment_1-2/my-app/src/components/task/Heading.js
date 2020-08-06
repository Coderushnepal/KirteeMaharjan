import React, { Component } from 'react';

export default class Heading extends Component {
	render() {
		const style = {
			textAlign: 'center',
			margin: '15px 0px 20px',
			padding: '10px 0px',
			border: '3px solid green'
		};
		return <h1 style={style}>{this.props.title}</h1>;
	}
}
