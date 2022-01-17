const router = require('express').Router()
const { client, personRepository } = require('../repository')

router.get('/api/persons', async (request, response) => {
  console.info('listing people')
  const queryResult = await personRepository.findAll(client)
  response.json(queryResult)
})

router.get('/api/persons/:id', async (request, response) => {
  const { id } = request.params
  console.info('listing person')
  const queryResult = await personRepository.findOne(id, client)

  response.json(queryResult)
})

router.post('/api/persons', async (request, response) => {
  console.info('creating person')
  const person = request.body
  const queryResult = await personRepository.save(person, client)
  person.id = queryResult[0].id

  response.json(person)
})

router.put('/api/persons/:id', async (request, response) => {
  console.info('updating person')
  const person = request.body
  const personId = request.params.id
  const updatedPerson = { ...person, id: personId }
  await personRepository.update(updatedPerson, client)

  response.json(updatedPerson)
})

router.delete('/api/persons/:id', async (request, response) => {
  const personId = request.params.id
  await personRepository.remove(personId, client)

  response.end()
})

module.exports = router
