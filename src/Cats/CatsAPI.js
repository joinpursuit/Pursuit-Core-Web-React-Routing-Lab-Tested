import axios from "axios"

const getCat = async () => {
    const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
    )
    return data[0].url
}
getCat()

const catsAPI = {
    getCat,
}

export default catsAPI