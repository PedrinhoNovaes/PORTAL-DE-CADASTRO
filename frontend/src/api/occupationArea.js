const axios = require('axios')

const BACKEND = "http://localhost:8080"

const occupationAreas = async () => {
  const response = await axios.get(`${BACKEND}/api/occupation-areas`)
  return response.data
}

const createOccupationArea = async (occupationArea) => {
  const response = await axios.get(`${BACKEND}/api/occupation-areas`, occupationArea)

  return { ...occupationArea, id: response.data.id }
}

module.exports = { occupationAreas, createOccupationArea }
