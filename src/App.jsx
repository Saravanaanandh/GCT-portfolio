import './App.css' 
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx' 
import Projects from './pages/Projects.jsx'

function App() { 

  return (
    <div className='min-h-dvh bg-black text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/projects' element={<Projects/>}/>
      </Routes>

    </div>
  )
}

export default App
