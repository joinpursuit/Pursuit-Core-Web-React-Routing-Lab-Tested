import React, { Component } from 'react'
import AnimalsAPI from './AnimalsAPI'
import RandomDog from './RandomDog'

export default class Animals extends Component {
   constructor() {
      super() 

      this.state = {
         dogURL: '',
         catURL: ''
      }
   }

   async componentDidMount() {
      const url = AnimalsAPI.getDogURL()
      this.setState({
         dogURL: (await url).message
      })
   }
   render() {
      const { dogURL } = this.state
      return (
         <div>
            <h1>Dog!</h1>
            <RandomDog dogURL={dogURL}/>
         </div>
      )
   }
}
