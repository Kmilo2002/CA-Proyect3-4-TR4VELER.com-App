import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import ModifyUser from '../ModifyUser/ModifyUser'
import ConfirmationData from '../PaymentConfimationData/ConfirmationData'
import Register from '../Register/Register'
import UserProfile from '../UserProfile/UserProfile'
import EraseUser from '../EraseUser/EraseUser'
import Loggings from '../Loggings/Loggings'
import LoggingRegister from '../Logging/LoggingRegister'
import Loggings2 from '../Loggings/Loggings2'



const Pages = () => {
  return (
  
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/profile' element = {<UserProfile />} />
            <Route path = '/modify_user' element = {<ModifyUser />} />
            <Route path = '/confirmReserv' element = {<ConfirmationData/>}/>
            <Route path = '/erase_user' element = {<EraseUser />}/>
            <Route path = '/loggings' element = {<Loggings />} />
            <Route path = '/loggings2' element = {<Loggings2 />} />
            <Route path = '/logging_register' element = {<LoggingRegister />} />
        </Routes>
  )
}

export default Pages