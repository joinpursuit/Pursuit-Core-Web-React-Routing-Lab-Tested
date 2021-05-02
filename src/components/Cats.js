import React from 'react'
import axios from 'axios'

class Cats extends React.Component {
    state = {cats: []}

    fetchCats = async () => {
        try {
            const { num } = this.props.match.params
            const res = await axios.get(`https://api.thecatapi.com/v1/images/search/?limit=${num}`)
            console.log(res)
            this.setState({cats: res.data})
        } catch (error) {
            this.setState({cats: []})
        }
    }

    componentDidMount() {
        this.fetchCats()
    }

    render() {
        const {cats} = this.state
        return (
            <section>
                {cats.map(cat => {
                    console.log(cat)
                })}
            </section>
        )
    }
}

export default Cats;