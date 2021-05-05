import axios from "axios"

const getDog = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random")
    return data.message
}
const getMultipleDogs = async (num) => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
    return data.message
}
const getBreedDog = async (breedName) => {
    const { data } = await axios(`https://dog.ceo/api/breed/${breedName}/images/random`)
    return data.message
}

const dogsAPI = {
    getDog,
    getMultipleDogs,
    getBreedDog
}
export default dogsAPI
