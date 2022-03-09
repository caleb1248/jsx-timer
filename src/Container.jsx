import React from 'react';
import Display from "./lib/Display/index";

const timer = React.createRef();

function Container() {
  return (
		<div>
			<Display ref={timer}/>
			<TimeSelector/>
		</div>
  );
}

function TimeSelector() {
	return (
		<button onClick = {
			() => {
				var h = window.prompt('enter hours'),
      		m = window.prompt('enter hours'),
      		s = window.prompt('enter hours');

    		if (h != null && m != null && s != null) {
		      timer.current.changeTime([
		        parseInt(h),
		        parseInt(m),
		        parseInt(s)
		      ]);
				}
			}
		} className = "material-icons-outlined" id="timeSelector">timer</button>
	)
}

export default Container;