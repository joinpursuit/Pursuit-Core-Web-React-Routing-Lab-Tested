import React from "react";
import axios from "axios";

class Cats extends React.Component {
  state = { urls: [] };

  fetchCats = async () => {
    try {
        const {num} = this.props.match.params
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`);
      debugger
        this.setState({ urls: res.data});
    } catch (error) {
      console.log(error);
      this.setState({ urls: [] });
    }
  };

  componentDidMount() {
    this.fetchCats();
  }

  render() {
    const { urls } = this.state;
    return (
      <section>
         {urls.map(image =>{
                   return <img src={image.url} alt="cat pic"/>
               })} 
       
      </section>
    );
  }
}

export default Cats;
