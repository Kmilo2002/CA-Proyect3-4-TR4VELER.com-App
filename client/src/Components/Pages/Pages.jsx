import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import ModifyUser from '../ModifyUser/ModifyUser'
import ConfirmationData from '../Payment/Payment'
import Register from '../Register/Register'
import UserProfile from '../UserProfile/UserProfile'
import EraseUser from '../EraseUser/EraseUser'
import Loggings from '../Loggings/Loggings'
import LoggingRegister from '../LoggingRegister/LoggingRegister'
import LoggingsSearch from '../LoggingsSearch/LoggingsSearch'
import LoggingDetails from '../LoggingDetails/LoggingDetails'
import Payment from '../Payment/Payment'
import Logout from '../Logout/Logout'
import Welcome from '../Welcome/Welcome'
import ModifyLogging from '../ModifyLogging/ModifyLogging'
import EraseLogging from '../EraseLogging/EraseLogging'


const Pages = () => {
  return (
  
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/welcome' element = {<Welcome />} />
            <Route path = '/profile' element = {<UserProfile />} />
            <Route path = '/modify_user' element = {<ModifyUser />} />
            <Route path = '/confirmReserv' element = {<ConfirmationData/>}/>
            <Route path = '/erase_user' element = {<EraseUser />} />
            <Route path = '/loggings' element = {<Loggings />} />
            <Route path = '/loggings_search' element = {<LoggingsSearch />} />
            <Route path = '/logging_register' element = {<LoggingRegister />} />
            <Route path = '/loggings/:loggingId' element = {<LoggingDetails />} />
            <Route path = '/loggings_modify/:loggingId' element = {<ModifyLogging />} />
            <Route path = '/logging_delete/:loggingId' element = {<EraseLogging />} />
            <Route path = '/payment' element = {<Payment />} />
            <Route path = '/logout' element = {<Logout />} />
        </Routes>
  )
}

export default Pages