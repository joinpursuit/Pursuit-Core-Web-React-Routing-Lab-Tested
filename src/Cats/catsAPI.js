import axios from "axios"

const getCat = async() =>{
    const  { data }  = await axios.get("https://api.thecatapi.com/v1/images/search")
return data[0].url
}
const getCats = async(num) =>{
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
    return data
}

const catsAPI = {
    getCat,
    getCats
}
export default catsAPI