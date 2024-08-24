import NavBar from './components/NavBar'
import './App.css'
import { useState } from 'react'

import { Outlet } from 'react-router-dom'

function App() {
  const [login, setLogin] = useState(false); // for login and sign up purposes

  return (
    <>
      <NavBar/>
      <div style={{marginTop: '77px'}}><Outlet/></div>
    </>
  )
}

export default App
