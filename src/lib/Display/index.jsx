import React from "react";
import './Display.css';

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = { time: [0,0,0] };
	}

	changeTime(time) {
		this.setState({ time: time })
	}

	render() {
		return <span>{ this.state.time.join(":") }</span>
	}
}

export default Display;