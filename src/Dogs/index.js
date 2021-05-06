import React from "react"
import { Switch, Route} from "react-router-dom"
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"

function Dogs() {
    return (
        <div>
            <Switch>
                <Route path="/dog/random/:num" />
                <Route path="/dog/random" component={DogRandom} />
            </Switch>
        </div>
    )
}

export default Dogs
