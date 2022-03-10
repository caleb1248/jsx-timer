import './TimeSelector.css';
export default class TimeSelector extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button onClick = {
				() => {
					var h = window.prompt('enter hours'),
	      		m = window.prompt('enter hours'),
	      		s = window.prompt('enter hours');
	
	    		if (h != null && m != null && s != null) {
			      this.props.display.current.changeTime([
			        parseInt(h),
			        parseInt(m),
			        parseInt(s)
			      ]);
					}
				}
			} className = "material-icons-outlined" id="timeSelector">timer</button>
		)
	}
}