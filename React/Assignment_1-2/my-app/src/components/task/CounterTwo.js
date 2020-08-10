import React from 'react';
// import './counter.css';
import { isVowel } from '../../utils/Strings';
import { withCount } from '../hoc';

export class CounterTwo extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	// console.log(props);
	// }
	render() {
		// const style = isVowel(this.props.name[0]) ? { color: 'red', fontSize: '80px' } : { color: 'blue' };
		return (
			<div className="cards">
				<h1 className={isVowel(this.props.name[0]) ? 'red' : 'blue'}>{this.props.name}</h1>
				<h2>Count :{this.props.count}</h2>
				<div className="buttons">
					<button onClick={this.props.add}>+</button>
					<button onClick={this.props.sub}>-</button>
				</div>
			</div>
		);
	}
}

export default withCount(CounterTwo);
