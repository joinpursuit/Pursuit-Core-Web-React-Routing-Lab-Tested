import React, { Component } from 'react'
import axios from 'axios'


export default class extends Component {
constructor () {
    super()
    this.state = {
        dogURL: ''
    }
}

componentDidMount() {
   this.dogImages()
}

dogImages = async () => {
const dogpic = await axios.get('https://dog.ceo/api/breeds/image/random')
this.setState({
    dogURL: dogpic.data.message
})
}

    render() {
       
       const dogURL = this.state.dogURL
        return (
            <div>
              
            <h1>Puppy Selfy</h1>
            <button onClick={this.dogImages}>Click me to see images</button>
            <br/>
            <br/>
            <img src={dogURL} alt="puppypic"/>
            </div>
        )
    }
}
