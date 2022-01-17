const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const { person, occupationArea } = require('./routes')

const startServer = async () => {
  const app = express();

  app.use(cors())
  app.use(bodyParser.json({}))

  app.use(person)
  app.use(occupationArea)

  app.listen(3000, console.log('The server is running...'))
}

startServer();
