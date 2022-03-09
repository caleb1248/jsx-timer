import React from "react";

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = [0,0,0];
	}

	render() {
		return <span>{ this.state.join(':') }</span>
	}
}

export default Timer;