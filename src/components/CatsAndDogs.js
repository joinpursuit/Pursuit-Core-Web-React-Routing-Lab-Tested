import React from 'react'
import axios from 'axios'

class CatsAndDogs extends React.Component {
    state = {catsAndDogs: []}

    fetchCatsAndDogs = async () => {
        try {
            let randDogNum = Math.floor(Math.random() * 10);
            let randCatNum = Math.floor(Math.random() * 10);
            const res1 = await axios.get(`https://api.thecatapi.com/v1/images/search/?limit=${randCatNum}`);
            const res2 = await axios.get(`https://dog.ceo/api/breeds/image/random/${randDogNum}`)
            let catResults = res1.data.map(cat => {
                return cat.url
            })
            this.setState({catsAndDogs: [... catResults, ...res2.data.message]})
            console.log(this.state.catsAndDogs)
        } catch (error) {
            this.setState({catsAndDogs: []})
        }
    }

    componentDidMount() {
        this.fetchCatsAndDogs()
    }



    render() {
        const { catsAndDogs } = this.state
        return (
            <section>
                {catsAndDogs.map(pets => {
                    return <img src={pets} />
                })}
            </section>
        )
    }
}

export default CatsAndDogs;