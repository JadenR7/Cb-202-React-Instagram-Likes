import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsernameHeader from './UsernameHeader'

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
  <UsernameHeader username ="Jaden.Richh"/>
  </>
  )

}
 

export default App
