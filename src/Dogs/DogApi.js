import axios from 'axios'


const getRandomDog = async () => {
    const response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then(response => {return response.data.message})
    return response
}

const getMultipleDogs = async (numOfDogs) => {
    const dogsArr = await axios.get(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response => {return response.data.message})
    return dogsArr
}

const dogApi = {
    getRandomDog,
    getMultipleDogs
}

export default dogApi