import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage'


function App() {


  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<a href="./login">  Hola </a>} />
          <Route path="/login" element={<LoginPage />} />
      
          </Routes>
          </BrowserRouter>
    
    </>
  )
}

export default App
