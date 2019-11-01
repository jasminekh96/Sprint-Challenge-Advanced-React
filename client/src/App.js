import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.div`font-size: 1.5rem;`;
const Name = styled.h1`
	text-align: center;
	padding: 10px;
	color: #9370db;
	font-weight: bold;
`;
const Country = styled.h2`text-align: center;`;
const Searches = styled.p`text-align: center;`;
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
			<Container>
				<Navbar />
				{this.state.players.map((player) => (
					<div key={player.id}>
						<Name>Name: {player.name}</Name>
						<Country>Country: {player.country}</Country>
						<Searches>Searches: {player.searches}</Searches>
					</div>
				))}
			</Container>
		);
	}
}
export default App;
