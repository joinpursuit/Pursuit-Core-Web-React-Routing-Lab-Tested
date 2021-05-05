import React from 'react'
import { Link, Route, Switch } from "react-router-dom"
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"
import DogBreed from "./DogBreed"

export default function Dog() {
    const Home = () =>  <div> <Link to="/dog/random">dog random</Link> </div>
    const renderDogRandomNum = (p) => <DogRandomNum num={p.match.params.num} />
    const renderDogBreed = (p) => <DogBreed breed={p.match.params.breed} />
    return (
        <div>
            <Switch>
                <Route path="/dog/random/:num" render={renderDogRandomNum} />
                <Route path="/dog/random" component={DogRandom} />
                <Route path="/dog/:breed" render={renderDogBreed} />
                <Route path="/dog" render={Home} />
            </Switch>
        </div>
    )
}
