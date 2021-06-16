import React from 'react'
import catApi from './CatApi'
// import {Route, Link} from 'react-router-dom'
// import CatRandomNum from './CatRandomNum'


class CatRandom extends React.Component {

    constructor() {
        super()

        this.state = {
            url: '',
            catsArr: [],
            numOfCats: 2
        }
    }

    catPic = async () => {
        const catPic = await catApi.getCat()
        this.setState({
            url: catPic
        })
    }
    numberOfCats = (e) => {
        const numOfCats = e.target.value
        this.setState({
            numOfCats
        })
    }
    
    async componentDidMount() {
        this.catPic()
    }

    render() {
        const { url } = this.state

        return (
            <div>
                <h1>CATRANDOM COMPONENT</h1>
                <img src={url} style={{height: '400px'}} alt="A Cat" />
                <br />
                {/* <label htmlFor="cats">Number of cats: </label><input onChange={this.numberOfCats} type="number" name="cats" /> */}
                <button onClick={this.catPic}>Get New Cat</button>
                {/* <Link to='/cat/random/:num'><button>Get More Cats</button></Link>
                <Route path='/cat/random/:num/' component={CatRandomNum} numOfCats={numOfCats} /> */}
            </div>
        )
    }
}

export default CatRandom

// If we create our own <Route />, it looks like this essentially:

// class ourRouter extends Component {
//     render() {
//         const { render } = this.props
//         // return render()      -  if we are creating our own router, it probably does something like this internally
//     }                           // and the issue with this is if we've passed down this component as a render prop, then we
// }                               // are trying to create a new instance of the component without that 'new' keyword.

