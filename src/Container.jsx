import React from 'react';
import Display from "./lib/Display/index";
import TimeSelector from './lib/TimeSelector/index';

function Container() {
const timer = React.createRef();
	return (
		<div>
			<Display ref={ timer }/>
			<TimeSelector display={ timer }/>
		</div>
  );
}



export default Container;