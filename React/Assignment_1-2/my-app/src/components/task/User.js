import React from 'react';
import './user.css';
import { withRedBull } from '../hoc';

export class User extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	// console.log(props);
	// }

	render() {
		return (
			<div className="user">
				<h2 className={this.props.wings ? 'transit' : ''}>{this.props.name}</h2>
				<button onClick={this.props.flyAway}>fly</button>
				{this.props.wings ? <p>I drank red bull. I can fly</p> : <p>no redbull</p>}
			</div>
		);
	}
}

export default withRedBull(User);
