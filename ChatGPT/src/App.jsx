import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/sidebar.jsx'
import Main from './components/main/main.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App
