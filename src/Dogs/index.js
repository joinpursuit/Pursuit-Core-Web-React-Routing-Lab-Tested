import React from "react"
import { Switch, Route} from "react-router-dom"
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"

const renderDogRandomNum = ({ match }) => {
    return <DogRandomNum num={ match.params.num } />
}

function Dogs() {
    return (
        <div>
            <Switch>
                <Route path="/dog/random/:num" render={renderDogRandomNum} />
                <Route path="/dog/random" component={DogRandom} />
            </Switch>
        </div>
    )
}

export default Dogs
