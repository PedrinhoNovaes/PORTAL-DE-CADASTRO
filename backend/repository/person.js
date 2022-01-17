async function save(person, client) {
  const { rows } = await client.query(
    `INSERT INTO person (name, surname, age, occupation_area_id)
    VALUES ($1, $2, $3, $4) RETURNING id`,
    [person.name, person.surname, person.age, person.occupationAreaId]
  )

  return rows
}

async function findAll(client) {
  const { rows } = await client.query(`SELECT * FROM person`)

  return rows.map(person => ({
    id: person.id,
    name: person.name,
    surname: person.surname,
    age: person.age,
    occupationAreaId: person.occupation_area_id,
    createdAt: person.created_at,
    updatedAt: person.updated_at,
  }))
}

async function findOne(personName, client) {
  const { rows } = await client.query(
    `SELECT * FROM person WHERE name = $1`,
    [personName]
  )

  return rows.map(person => ({
    id: person.id,
    name: person.name,
    surname: person.surname,
    age: person.age,
    occupationAreaId: person.occupation_area_id,
    createdAt: person.created_at,
    updatedAt: person.updated_at,
  }))
}

async function remove(personId, client) {
  await client.query(`DELETE FROM person WHERE id = $1`, [personId])
}

async function update(person, client) {
  await client.query(`
    UPDATE person SET name = $2, surname = $3, age = $4, occupation_area_id = $5
    WHERE id = $1`,
    [person.id, person.name, person.surname, person.age, person.occupationAreaId]
  )
}

module.exports = {
  save: save,
  findAll: findAll,
  findOne: findOne,
  remove: remove,
  update: update,
}