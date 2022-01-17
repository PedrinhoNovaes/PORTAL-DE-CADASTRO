import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

function OcupacaoForm(props) {
  const [occupationArea, setOccupationArea] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setOccupationArea({ ...occupationArea, [name]: value })
  }

  const handleSubmit = async () => {
    await axios.post('http://localhost:8080/api/occupation-areas', occupationArea)
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrição</Form.Label>
          <Form.Control name="description" type="text" placeholder="Entre com a descrição" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </Form>
    </>
  )
}

export default OcupacaoForm