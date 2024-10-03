import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}   />
     <Route path='/login' element={<Login/>}   />
     <Route path='/signup' element={<Signup/>}   />
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
