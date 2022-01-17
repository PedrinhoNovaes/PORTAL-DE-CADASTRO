import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

function PessoaForm() {
  const [person, setPerson] = useState({})
  const [occupationAreas, setOccupationAreas] = useState([
    { id: 1, description: 'engenharia' },
    { id: 2, description: 'mecânica' }
  ])

  useEffect(() => {
    const getOccupationAreas = async () => {
      try {
        const occupationAreas = await axios.get('http://localhost:8080/api/occupation-areas')
        setOccupationAreas(occupationAreas.data)
      } catch (error) {
        console.log(error)
      }
    }

    getOccupationAreas()
  }, [])

  const handleChange = ({ target }) => {
    const { name, value } = target
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = async (event) => {
    await axios.post('http://localhost:8080/api/persons', person)
    event.preventDefault()
  }

  return (
    <>
      <Form onSubmit={() => handleSubmit()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control name="name" type="text" placeholder="João" onChange={handleChange} />
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control name="surname" type="text" placeholder="da Silva" onChange={handleChange} />
          <Form.Label>Idade</Form.Label>
          <Form.Control name="age" type="number" placeholder="23" onChange={handleChange} />
          <Form.Label>Área de Atuação</Form.Label>
          <Form.Select name="occupationAreaId" aria-label="Default select example" onChange={handleChange}>
            <option>Selecione a área de atuação...</option>
            {occupationAreas.map(area => <option value={area.id}>{area.description}</option>)}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </>
  )
}

export default PessoaForm