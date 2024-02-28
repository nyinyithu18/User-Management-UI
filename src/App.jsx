import React from 'react'
import SidebarPage from './components/SidebarPage'
import UserList from './components/users/UserList'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex'>
      <SidebarPage/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userList' element={<UserList/>} />
      </Routes>

    </div>
  )
}

export default App