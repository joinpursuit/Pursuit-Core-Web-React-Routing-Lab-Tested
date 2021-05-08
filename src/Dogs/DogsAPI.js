import axios from "axios";

const getDog = async () => {
    const {data} = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    return data.message
}

const DogsAPI = {getDog}

export default DogsAPI;