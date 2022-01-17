const router = require('express').Router()
const { client, occupationAreaRepository } = require('../repository')

router.get('/api/occupation-areas', async (request, response) => {
  const queryResult = await occupationAreaRepository.findAll(client)
  response.json(queryResult)
})

router.get('/api/occupation-areas/:id', async (request, response) => {
  const { id } = request.params
  const person = memo.find(person => person.id === id)

  response.json(person)
})

router.post('/api/occupation-areas', async (request, response) => {
  const { body } = request
  const queryResult = await occupationAreaRepository.save(body, client)
  body.id = queryResult[0].id

  response.json(body)
})

// router.delete('/api/person/:id', async (request, response) => { })
// router.put('/api/person/:id', async (request, response) => { })

module.exports = router
