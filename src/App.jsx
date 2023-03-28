import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shops from './components/Shops/Shops'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Shops />
    </div>
  )
}

export default App
