import React from 'react';
import Timer from "./lib/Display/index"
import './App.css';

function App() {
	var timer = new Timer();
  return (
		<div>{ timer.render() }</div>
  );
}

export default App;