import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
	state = {
		players : [],
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/players')
			.then((res) => {
				this.setState({
					players : res.data,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				{this.state.players.map((player) => (
					<div key={player.id}>
						<h2>{player.name}</h2>
						<h3>{player.country}</h3>
						<p>{player.searches}</p>
					</div>
				))}
			</div>
		);
	}
}
export default App;
