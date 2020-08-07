import React from 'react';
import '../App.css';
import { Counter, User, Heading } from '../task';
import { EnhanceCounterTwo } from '../task';

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

const Assignment_1 = () => (
	<div>
		<Heading title={'Day One Task'} />
		<div className="main">{names.map((name, index) => <Counter key={name.concat(index)} name={name} />)}</div>
	</div>
);

const Assignment_2 = () => (
	<div>
		Heading title={'Day Three Task'} />
		<div className="main">
			{samples.map((name, index) => <EnhanceCounterTwo key={name.concat(index)} name={name} />)}
		</div>
		<div className="main main3">{names.slice(3, 9).map((name, index) => <User key={name} name={name} />)}</div>
	</div>
);

const Main = () => (
	<div className="main">
		<h1>Main page</h1>
		<ul>
			<li>
				<Link to="/">Assignment_1</Link>
			</li>
		</ul>
		<ul>
			<li>
				<Link to="/">Assignment_2</Link>
			</li>
		</ul>
	</div>
);

export default Main;
