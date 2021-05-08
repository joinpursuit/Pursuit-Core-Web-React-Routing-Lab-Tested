import React, {Component} from 'react'
import { Route, Switch } from "react-router-dom";
import CatRandom from "./CatRandom";
import CatRandomNum from "./CatRandomNum";

class Cats extends  Component{
    catUrls =  (props) => {
        const {num} = props.match.params;
        return <CatRandomNum num={num} />
    }

    render(){
        return (
            <div>
                Cats Component 
                <Switch>
                    <Route path="/cat/random/:num" render={this.catUrls}></Route>
                    <Route path="/cat/random" component={CatRandom}></Route>
                </Switch>
            </div>
        )
    }
}

export default Cats
