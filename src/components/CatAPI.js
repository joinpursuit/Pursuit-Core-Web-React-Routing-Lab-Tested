import axios from "axios"

const getCat = async () => {
    const { data } = await axios.get("https://api.thecatapi.com/v1/images/search")
    return data[0].url
}
const getMultipleCats = async (num) => {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
    return data.map(catObj => catObj.url)
}

const catsAPI = {
    getCat,
    getMultipleCats
}
export default catsAPI
