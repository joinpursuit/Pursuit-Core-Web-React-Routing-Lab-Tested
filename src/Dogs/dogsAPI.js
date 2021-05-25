import axios from 'axios'

const fetchDog = async () => {
	const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')

	return data.message
}

const fetchMultiDogs = async (num) => {
	const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)

	return data.message.map((dogObj) => dogObj)
}

const fetchDogBreed = async (breed) => {
	const { data } = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)

	return data.message
}

const dogsAPI = {
	fetchDog,
	fetchMultiDogs,
	fetchDogBreed,
}
export default dogsAPI
