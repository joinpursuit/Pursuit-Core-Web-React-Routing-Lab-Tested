import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CatRandom from './CatRandom'
import CatRandomNum from './CatRandomNum'

export default function Cats() {

    return (
        <div>
            Cats Component!
            <Switch>
                <Route exact path='/cat/random' component={CatRandom} />
                <Route path='/cat/random/:num' component={CatRandomNum} />
            </Switch>
        </div>
    )
}
