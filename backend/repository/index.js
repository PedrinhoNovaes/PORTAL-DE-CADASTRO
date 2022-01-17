const { Pool } = require('pg')

const client = new Pool({
  host: process.env.DATABASE || 'localhost',
  port: 5432,
  database: 'mgn',
  user: 'mgn',
  password: 'mgn246',
})

module.exports = {
  client: client,
  personRepository: require('./person'),
  occupationAreaRepository: require('./occupationArea')
}
