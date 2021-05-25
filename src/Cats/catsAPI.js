import axios from 'axios'

const fetchCat = async () => {
   const { data } = await axios.get('https://api.thecatapi.com/v1/images/search')

   return data[0].url
}

const fetchMultiCats = async (num) => {
   const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${num}`)
   console.log(data)

   return data.map(catObj => catObj.url)
}


const catAPI = {
   fetchCat,
   fetchMultiCats
}

export default catAPI