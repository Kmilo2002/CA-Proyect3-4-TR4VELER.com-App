import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import ModifyUser from '../ModifyUser/ModifyUser'
import ConfirmationData from '../PaymentConfimationData/ConfirmationData'
import Register from '../Register/Register'
import UserProfile from '../UserProfile.jsx/UserProfile'
import EraseUser from '../EraseUser/EraseUser'



const Pages = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/profile' element = {<UserProfile />} />
            <Route path = '/modify_user' element = {<ModifyUser />} />
            <Route path = '/confirmReserv' element = {<ConfirmationData/>}/>
            <Route path = '/erase_user' element = {<EraseUser />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Pages