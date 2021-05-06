import React from "react"
import { Switch, Route} from "react-router-dom"
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"
import DogBreed from "./DogBreed"

const renderDogRandomNum = ({ match }) => {
    return <DogRandomNum num={ match.params.num } />
}

const renderDogBreed = ({ match }) => {
    return <DogBreed  breed={ match.params.breed } />
}

function Dogs() {
    return (
        <div>
            <Switch>
                <Route exact path="/dog/random" component={DogRandom} />
                <Route path="/dog/random/:num" render={renderDogRandomNum} />
                <Route path="/dog/:breed" render={renderDogBreed}/>
            </Switch>
        </div>
    )
}

export default Dogs
