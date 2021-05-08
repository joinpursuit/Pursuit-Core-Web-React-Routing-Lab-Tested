import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import DogRandom from "./DogRandom"
import DogRandomNum from "./DogRandomNum"
import DogBreed from "./DogBreed";

export class Dogs extends Component {
    dogUrls =  (props) => {
        const {num} = props.match.params;
        return <DogRandomNum num={num} />
    }

    dogBreed =  (props) => {
        const {breed} = props.match.params;
        return <DogBreed breed={breed} />
    }

    render() {
        return (
            <div>
                Dogs Component
                <Switch>
                    <Route path="/dog/:breed" render={this.dogBreed}></Route>
                    {/* <Route path="/dog/:breed" component={DogBreed}></Route> */}
                    <Route path="/dog/random/:num" render={this.dogUrls}></Route>
                    <Route path="/dog/random" component={DogRandom}></Route>
                </Switch>
            </div>
        )
    }
}

export default Dogs
