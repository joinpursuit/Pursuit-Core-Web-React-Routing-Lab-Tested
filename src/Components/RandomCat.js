import { Component } from "react"
import axios from "axios"

class RandomCat extends Component {
    state = { urlImage: [] };
  
    fecthCat = async () => {
      try {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search?api_key=83ba6aaf-234d-4e1a-990a-e77f82c6cdf8");
        this.setState({urlImage: res.data})
      } catch (error) {
        console.log(error);
        this.setState({ urlImage: [] });
      }
    };
    componentDidMount(){
        this.fecthCat()
    }
  
  
    render() {
        const {urlImage} = this.state
        const fecthCat = this.fecthCat
  
      return <section>
          <h1> Random Cat</h1>
          <button onClick={fecthCat}>Random Cat</button>
          {urlImage.map(image => {
              return <img src={image.url} alt="CatPics"/>
          })}
          
      </section>;
    }
  }
  
  export default RandomCat;