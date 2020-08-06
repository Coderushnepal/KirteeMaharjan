import React from 'react';
import { isVowel } from '../../utils/Strings';
import './counter.css';

export default class Counter extends React.Component {
	constructor(props) {
		super(props);
		// console.log(props);
		this.state = {
			value: 0
		};
	}

	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	render() {
		// const style = isVowel(this.props.name[0]) ? { color: 'red', fontSize: '80px' } : { color: 'blue' };
		return (
			<div className="cards">
				<h1
					className={
						'name ' + (isVowel(this.props.name[0]) ? 'red' : 'blue')
					} /* style={{
						color: isVowel(this.props.name[0]) ? 'red' : 'blue',
						fontSize: '80px';
					} }*/
				>
					{this.props.name}
				</h1>
				<h2>Count : {this.state.value}</h2>
				<div className="buttons">
					<button onClick={this.handleIncrement}>+</button>
					<button onClick={this.handleDecrement}>-</button>
				</div>
			</div>
		);
	}
}
