import axios from 'axios'
import { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function ListarPessoas() {
  const [items, setItems] = useState([
    { id: 1, name: 'vitor', surname: 'cassiano', age: 34, occupationAreaId: 'desenvolvedor' },
    { id: 2, name: 'pedro', surname: 'fernando', age: 32, occupationAreaId: 'engenheiro' }
  ])

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/persons')
        setItems(response.data)
      } catch (error) {
        setItems([{ id: 1, name: 'fake', surname: 'user', age: 34, occupationArea: 'desenvolvedor' }])
        console.log(error)
      }
    }

    getItems()
  }, [])

  const removeHandler = async (personId) => {
    try {
      await axios.delete('http://localhost:8080/api/persons/' + personId)
    } catch (error) {
      console.log(error)
    }
  }

  // const updateHandler = async (person) => {
  //   await updatePerson(person)
  // }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Sobrenome</th>
          <th>Idade</th>
          <th>Área de Atuação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.age}</td>
            <td>{item.occupationAreaId}</td>
            <td>
              <ButtonGroup aria-label="manage">
                <Button variant="primary" onClick={{}}>Atualizar</Button>
                <Button variant="danger" onClick={() => removeHandler(item.id)}>Excluir</Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ListarPessoas