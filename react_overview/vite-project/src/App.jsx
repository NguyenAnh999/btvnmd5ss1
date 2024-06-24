import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListCourse from './components/bai1/ListCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListCourse/>
    </>
  )
}

export default App
