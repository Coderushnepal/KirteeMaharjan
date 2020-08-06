import React from 'react';
import { withCount } from '../hoc';

function Child() {
	return <h2> this is child speaking</h2>;
}

export class Parent extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		return (
			<div className="parent">
				<h1 className="main">Hello I'm {this.props.name}</h1>
				<Child />
				{/* {this.prop.count ? (
					<div>
						<h2>Count : {this.state.count}</h2>
						<div className="buttons">
							buttons here
							<button onClick={this.handleIncrement}>+</button>
							<button onClick={this.handleDecrement}>-</button>
						</div>
					</div>
				) : (
					<h1>not enhanced</h1>
				)} */}
			</div>
		);
	}
}

const EnhancedParent = withCount(Parent);
export default EnhancedParent;
