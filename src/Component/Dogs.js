import React, { Component } from 'react';
import axios from "axios"; 

export default class Dogs extends Component {
	state = { URLs: [] };

	fetchDogs = async () => {
        try {
            const { num } = this.props.match.params;
			const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
			this.setState({ URLs: res.data.message });
		} catch (err) {
			console.log(err);
			this.setState({ URLs: [] });
		}
	};

	componentDidMount() {
		this.fetchDogs();
	}
    render() {
        const { URLs } = this.state;
		return (
            <section>
                hi

				{/* <img src={url} alt="dog pic" /> */}
				
			</section>
		);
	}
}
