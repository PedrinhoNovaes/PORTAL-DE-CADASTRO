async function save(occupationArea, client) {
  const { rows } = await client.query(
    `INSERT INTO occupation_area (description) VALUES ($1) RETURNING id`,
    [occupationArea.description]
  )

  return rows
}

async function findAll(client) {
  const { rows } = await client.query(`SELECT * FROM occupation_area`)
  return rows
}

// async function findOne(occupationAreaName, client) {}
// async function remove(occupationAreaId, client) {}

module.exports = {
  save: save,
  findAll: findAll,
}
