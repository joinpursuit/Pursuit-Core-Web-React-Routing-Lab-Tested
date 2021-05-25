import React, { Component } from 'react'
import dogsAPI from './dogsAPI'

class DogRandomNum extends Component {
	state = {
		dogURLs: [],
	}

	async componentDidMount() {
		const { num } = this.props
		const dogs = await dogsAPI.fetchMultiDogs(num)
		this.setState({ dogURLs: dogs })
	}
	render() {
		const { num } = this.props
		const { dogURLs } = this.state
		return (
			<div>
				<h1>{num}</h1>
				{dogURLs.map((message, i) => (
					<img key={i} src={message} alt='random dog' style={{ height: '200px' }} />
				))}
			</div>
		)
	}
}

export default DogRandomNum
