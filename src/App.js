import './styles/App.css'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.js'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
