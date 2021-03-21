import "./App.css"
import Validator from './Validator';
import SomeComponent from './SomeComponent'
import { Container } from '@material-ui/core';

function App() {

  return (
    <Container maxWidth="md">
      <Validator num="1">
        <SomeComponent num="1">
          <Validator num="2">

          </Validator>
        </SomeComponent>
        <SomeComponent num="2">
          <Validator num="3">
            <Validator num="4">

            </Validator>
          </Validator>
        </SomeComponent>
        <Validator num="5">

        </Validator>
      </Validator>
    </Container>
  )
}

export default App;
