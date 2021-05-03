import axios from "axios";
import { Component } from "react";


class MultipleRandomDogs extends Component {
  state = { imageUrls: [] }

  getMultipleDoggies = async () => {
    try {
        const {num} = this.props.match.params;
        const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
        this.setState({ imageUrls: res.data.message })
    } catch (error) {
        console.log(error);
    }
  }
    
  componentDidMount() {
      this.getMultipleDoggies();
  }
  
  render() {
      const {imageUrls} = this.state;
        return(
            <div>
                {imageUrls.map(url => {
                    return <img src={url} alt="Dog pic" key={url.id}/>
                })}
            </div>
        )
    }

}

export default MultipleRandomDogs;