import { useState } from 'react'
import './App.css'
import Resume from './component/Resume'
import { Route, Routes } from 'react-router-dom'
import Corosal from './Resume-component/Corosal'
import ScrollTop from './Resume-component/ScrollTop'
import Preview from './Resume-component/Preview'

function App() {

  return (
    <>
    <ScrollTop/>
      <Routes>
        <Route path='/' element={<Resume/>}/>
        <Route path='/Corosal' element={<Corosal/>}/>
        <Route path='/Preview' element={<Preview/>}/>
      </Routes>
    </>
  )
}

export default App
