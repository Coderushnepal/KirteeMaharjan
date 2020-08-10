import React from 'react';
// import '../App.css';
import { Counter, User, Heading } from '../task';
import { EnhanceCounterTwo } from '../task';
import { Link } from 'react-router-dom';

const names = [
	'Neeta Sapkota',
	'Neha shiwakoti',
	'Srijana Khatiwada',
	'Smrity Dhakal',
	'Sami Chakradhar',
	'Kirtee Maharjan',
	'Trija Thebe',
	'Sindhu Aryal',
	'Kusum Ranjitkar',
	'Elisha Bista',
	'Rachana kafle',
	'Barsha Maharjan',
	'Pooja Gurung',
	'Bisikha Subedi',
	'Kritika Baral',
	'Srijana Thulung'
];
const samples = [ 'A', 'B' ];

export function Assignment1() {
	return (
		<div>
			<div className="link">
				<Link to="/"> Back to main page </Link>
			</div>
			<div>
				<Heading title={'Day One Task'} />
				<div className="main">
					{names.map((name, index) => <Counter key={name.concat(index)} name={name} />)}
				</div>
			</div>
		</div>
	);
}

export function Assignment2() {
	return (
		<div>
			<div className="link">
				<Link to="/"> Back to main page </Link>
			</div>
			<div>
				<Heading title={'Day Three Task'} />
				<div className="main">
					{samples.map((name, index) => <EnhanceCounterTwo key={name.concat(index)} name={name} />)}
				</div>
				<div className="main main3">
					{names.slice(3, 9).map((name, index) => <User key={name} name={name} />)}
				</div>
			</div>
		</div>
	);
}

const Main = () => (
	<div>
		<h1>Main page</h1>
		<ul>
			<li>
				<Link to="/assignment-1">Assignment 1</Link>
			</li>
			<li>
				<Link to="/assignment-2">Assignment 2</Link>
			</li>
		</ul>
	</div>
);

export default Main;
