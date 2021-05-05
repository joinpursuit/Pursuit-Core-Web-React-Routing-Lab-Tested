import axios from 'axios'

const getDog = async () => {
  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
  return data.message
}
const getDogs = async num => {
  const { data } = await axios.get(
    `https://dog.ceo/api/breeds/image/random/${num}`
  )
  return data.message
}

const getBreed = async breed => {
  const { data } = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  )
  return data.message
}

const dogsAPI = {
  getDog,
  getDogs,
  getBreed
}
export default dogsAPI
