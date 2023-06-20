import './App.css'
import { Container } from "./components/container"
import { Content } from './components/content'
import { Header } from './components/header'
import { Menu } from "./components/menu"

function App() {
  return (
    <Container>
      <Menu />
      <div className="flex flex-col w-full md:space-y-4">
        <Header />
        <Content />
      </div>
    </Container>
  )
}

export default App
