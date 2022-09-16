import './App.css'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.js'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
