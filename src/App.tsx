import EstiloGlobal, { Container } from './global'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.ts'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
