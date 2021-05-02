import React from "react";
import axios from "axios";

class Dogs extends React.Component {
  state = { urls: [] };

  fetchDogs = async () => {
    try {
       const {num} = this.props.match.params
      const res = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`);
      this.setState({ urls: res.data.message });
    } catch (error) {
      console.log(error);
      this.setState({ urls: [] });
    }
  };

  componentDidMount() {
    this.fetchDogs();
  }

  render() {
    const { urls } = this.state;
    return (
      <section>
        {urls.map(image =>{
                   return <img src={image} alt="dog pic"/>
               })} 
      </section>
    );
  }
}

export default Dogs;
