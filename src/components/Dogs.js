import React from 'react'
import axios from 'axios'

class Dogs extends React.Component {
    state = {dogs: []}

    fetchMultipleDogs = async () => {
        try {
            const { num } = this.props.match.params
            const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
            console.log(res.data.message)
            this.setState({dogs: res.data.message})
        } catch (error) {
            this.setState({dogs: []})
        }
    }

    componentDidMount() {
        this.fetchMultipleDogs();
    }

    render() {
        const { dogs } = this.state
        return (
            <section>
                {dogs.map(dog => {
                    return <img src={dog} alt="randomDogPics" />
                })}
            </section>
        )
    }
}

export default Dogs;