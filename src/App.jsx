import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from '.'
import ContactForm from './ContactForm'
import Helloworld from './Helloworld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactForm/>
      <Helloworld/>
    </>
  )
}

export default App
