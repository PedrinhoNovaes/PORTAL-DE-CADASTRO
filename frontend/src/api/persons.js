const axios = require('axios')

const BACKEND = "http://localhost:8080"

async function getPersons() {
  const response = await axios.get(`${BACKEND}/api/persons`)
  return response.data
}

async function getPerson(personId) {
  const response = await axios.get(`${BACKEND}/api/persons/${personId}`)
  return response.data
}

async function createPerson(person) {
  const response = await axios.post(`${BACKEND}/api/persons`, person)
  return response.data
}

async function removePerson(personId) {
  await axios.delete(`${BACKEND}/api/persons/${personId}`)
}

async function updatePerson(person) {
  const response = await axios.put(`${BACKEND}/api/persons/${person.id}`, person)
  return response.data
}

module.exports = { getPerson, getPersons, createPerson, removePerson, updatePerson }