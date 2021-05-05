import React from 'react'
import { Switch, Route } from "react-router-dom"
import CatRandom from "./CatRandom"

function Cats() {
    return (
        <div>
            <Switch>
                <Route path="/cat/random" component={CatRandom} />
            </Switch>
        </div>
    )
}

export default Cats
