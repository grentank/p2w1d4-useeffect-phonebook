import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPhonesPage from './pages/ListPhonesPage'
import MainPage from './pages/MainPage'
import NavBar from './ui/NavBar'

export default function App({ allUsers }) {
  return (
    <div className='container'>
      <div className='row'>
        <NavBar />
      </div>
        <Routes>
          <Route path='/' element={<MainPage initAllUsers={allUsers} />} />
          <Route path='/:userId/phones' element={<ListPhonesPage />} />
        </Routes>
    </div>
  )
}
