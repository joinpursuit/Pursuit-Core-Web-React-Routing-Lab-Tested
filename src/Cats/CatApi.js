import axios from 'axios'
// THIS IS CONSIDERED A MODULE. AS ANY OTHER FILE THAT YOU IMPORT INTO ANOTHER FILE IS A MODULE
// WE CALL catApi INTO OTHER FILES IN THIS APP, THEREFORE MAKING IT A MODULE

const getCat = async () => {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search`)
    console.log(data[0].url)
    return data[0].url
}

const getMultipleCats = async (numOfCats) => {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${numOfCats}`)
    return data
}

const catApi = {
    getCat,
    getMultipleCats
}

export default catApi

// We are making functions in this file, to export to another file.
    // One function will return an image url response from an API
    // We are exporting these two functions within a variable called catApi
        // The function is going to get invoked from CatRandom component, as a method property of catApi.getCat()
        // This invocation is going to return the url for the image, which we will store in a variable called catUrl
        // We are going to setState within this same function to set this response url to our this.state.url