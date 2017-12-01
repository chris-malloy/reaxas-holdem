import React, { Component } from 'react';
import './stylesheets/App.css';

// Custom Components
import PokerBoard from './components/PokerBoard';

class App extends Component {
	render() {
		return (
			<div className="App col-sm-12">
				<h1>Welcome to Reaxas Holdem'</h1>
				<PokerBoard />
			</div>
		);
	}
}

export default App;
