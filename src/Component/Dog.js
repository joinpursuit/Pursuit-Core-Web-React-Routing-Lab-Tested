import React, { Component } from "react";
import axios from "axios";

export default class Dog extends Component {
	state = { url: "" };

	fetchDog = async () => {
		try {
			const res = await axios.get("https://dog.ceo/api/breeds/image/random");
			this.setState({ url: res.data.message });
		} catch (err) {
			console.log(err);
			this.setState({ url: "" });
		}
	};

	componentDidMount() {
		this.fetchDog();
	}
	render() {
		const { url } = this.state;
		return (
			<section>
                <img src={url} alt="dog pic" />
                <button>Get New Dog</button>
			</section>
		);
	}
}
