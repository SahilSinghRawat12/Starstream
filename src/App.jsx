import { useContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import { AppContext } from './context/AppContext'

function App() {
 
  const {darkMode , setDarkMode ,toggleDarkMode  } = useContext(AppContext);
    
   
 

  return (
  <div className='min-h-screen bg-white dark:bg-zinc-950 dark:text-white'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} toggleDarkMode={toggleDarkMode}/>


      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>} />   
      </Routes>      
  </div>
  )
}

export default App
