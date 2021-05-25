import React, { Component } from 'react'
import dogsAPI from './dogsAPI'

class DogRandom extends Component {
	state = {
		dogURL: '',
	}

	newDog = async () => {
		const dogURL = await dogsAPI.fetchDog()
		this.setState({ dogURL })
	}

	componentDidMount() {
		this.newDog()
	}

	render() {
		const { dogURL } = this.state
		return (
			<div>
				<h1>Dog Component</h1>
				<button onClick={this.newDog}>Get new dog</button>
				<img src={dogURL} alt='random dog' style={{ height: '250px' }} />
				<br />
			</div>
		)
	}
}

export default DogRandom
