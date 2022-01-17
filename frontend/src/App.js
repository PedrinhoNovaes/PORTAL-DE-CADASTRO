import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import PessoaList from './PessoaList'
import PessoaForm from './PessoaForm'
import OcupacaoForm from './OcupacaoForm'

function App() {
  
  return (
    <ThemeProvider prefixes={{}}>
      <Container fluid>
        <Tabs striped bordered hover defaultActiveKey="lista" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="lista" title="Listagem">
            <PessoaList />
          </Tab>
          <Tab eventKey="pessoa" title="Cadastro Pessoas">
            <PessoaForm />
          </Tab>
          <Tab eventKey="ocupacao" title="Cadastro Area de Atuação">
            <OcupacaoForm />
          </Tab>
        </Tabs>
      </Container>
    </ThemeProvider>
  );
}

export default App;
