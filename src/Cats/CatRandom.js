import React, { Component } from 'react'
import catsAPI from './catsAPI'

class CatRandom extends Component {
	state = {
		catURL: '',
	}

	newCat = async () => {
		const catURL = await catsAPI.fetchCat()
		this.setState({ catURL })
	}

	componentDidMount() {
		this.newCat()
	}

	render() {
		const { catURL } = this.state
		return (
			<div>
				<h1>Cat Random Component</h1>
				<button onClick={this.newCat}>Get new cat</button>
				<br />
				<img src={catURL} alt='a random cat' style={{ height: '250px', width: '300px' }} />
			</div>
		)
	}
}

export default CatRandom
