import React from 'react'
import { Route, Switch} from 'react-router-dom'
import DogRandom from './DogRandom'
import DogRandomNum from './DogRandomNum'
import DogBreed from './DogBreed'


export default function Dogs() {


    return (
        <div>
            <Switch>
                <Route exact path='/dog/random' component={DogRandom} />
                <Route path='/dog/random/:num' component={DogRandomNum} />
                <Route path='/dog/:breed' component={DogBreed} />
            </Switch>
        </div>
    )
}
