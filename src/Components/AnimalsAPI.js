import axios from 'axios'

const getDogURL = async () => {
	let dog = await axios.get(`https://dog.ceo/api/breeds/image/random`)
	return dog.data
}

export default {
	getDogURL,
}
