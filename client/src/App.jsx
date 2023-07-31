
import './App.css'
import { Route,Routes, useLocation } from 'react-router-dom'
import { Landing,Home } from './views/index'

function App() {
  const location = useLocation()

  return (
    <>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
