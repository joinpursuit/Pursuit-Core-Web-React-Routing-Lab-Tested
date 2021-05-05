import React, { Component } from 'react'
import { Link, Route, Switch } from "react-router-dom"
import CatRandom from "./CatRandom"
import CatRandomNum from "./CatRandomNum"

export default class Cat extends Component {
    constructor() {
        super()
        this.state = {}
    }
    Home = () =>  <div> <Link to="/cat/random">cat random</Link> </div>
    renderCatRandomNum = (p) => <CatRandomNum num={p.match.params.num} />
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/cat/random/:num" render={this.renderCatRandomNum} />
                    <Route path="/cat/random" component={CatRandom} />
                    <Route path="/cat" render={this.Home} />
                </Switch>
            </div>
        )
    }
}
