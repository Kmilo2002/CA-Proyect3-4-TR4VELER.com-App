import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'


const Pages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Pages