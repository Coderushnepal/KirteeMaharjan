import React from 'react';
import './App.css';
import { Counter, User, Heading } from './task';
import { EnhanceCounterTwo } from './task';
// import Enhance, { Parent } from './sample/Parent';

function App() {
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

	return (
		<div className="main-container">
			<Heading title={'Day One Task'} />
			<div className="main">{names.map((name, index) => <Counter key={name.concat(index)} name={name} />)}</div>
			<Heading title={'Day Three Task'} />
			<div className="main">
				{samples.map((name, index) => <EnhanceCounterTwo key={name.concat(index)} name={name} />)}
			</div>
			<div className="main main3">{names.slice(3, 9).map((name, index) => <User key={name} name={name} />)}</div>
		</div>
	);
}

export default App;
