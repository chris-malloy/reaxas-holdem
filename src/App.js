import React, { Component } from 'react';
import './stylesheets/App.css';

// Custom Components
import Board from './Board';

class App extends Component {
	render() {
		return (
			<div className="col-sm-12 text-center">
				<h1>Welcome to Reaxas Holdem'</h1>
				<Board />
			</div>
		);
	}
}

export default App;
