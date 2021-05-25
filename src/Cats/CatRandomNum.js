import React, { Component } from 'react'
import catsAPI from './catsAPI'

class CatRandomNum extends Component {
	state = {
		catURLs: [],
	}
	async componentDidMount() {
		const { num } = this.props
		const cats = await catsAPI.fetchMultiCats(num)
		this.setState({ catURLs: cats })
	}

	render() {
		const { num } = this.props
		const { catURLs } = this.state
		return (
			<div>
				<h1>{num}</h1>
				{catURLs.map((url, i) => (
					<img key={i} src={url} alt='random cat' style={{ height: '200px' }} />
				))}
			</div>
		)
	}
}

export default CatRandomNum
