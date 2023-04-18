import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../HomePage/Home'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Welcome from '../Welcome/Welcome'
import Logout from '../Logout/Logout'
import UserProfile from '../UserProfile/UserProfile'
import ModifyUser from '../ModifyUser/ModifyUser'
import EraseUser from '../EraseUser/EraseUser'
import Loggings from '../Loggings/Loggings'
import LoggingRegister from '../LoggingRegister/LoggingRegister'
import LoggingsSearch from '../LoggingsSearch/LoggingsSearch'
import LoggingDetails from '../LoggingDetails/LoggingDetails'
import Payment from '../Payment/Payment'
import PaymentConfirm from '../PaymentConfirm/PaymentConfirm'
import ModifyLogging from '../ModifyLogging/ModifyLogging'
import EraseLogging from '../EraseLogging/EraseLogging'
import UserReservations from '../UserReservations/UserReservations'
import ReservationModify from '../ReservationModify/ReservationModify'
import ReservationCancel from '../ReservationCancel/ReservationCancel'
import CancelConfirm from '../CancelConfirm/CancelConfirm'
import Users from '../Users/Users'
import UsersDetails from '../UsersDetails/UsersDetails'


const Pages = () => {
  return (
  
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
            <Route path = '/welcome' element = {<Welcome />} />
            <Route path = '/profile' element = {<UserProfile />} />
            <Route path = '/modify_user' element = {<ModifyUser />} />
            <Route path = '/erase_user' element = {<EraseUser />} />
            <Route path = '/loggings' element = {<Loggings />} />
            <Route path = '/loggings_search' element = {<LoggingsSearch />} />
            <Route path = '/logging_register' element = {<LoggingRegister />} />
            <Route path = '/loggings_search/:loggingId' element = {<LoggingDetails />} />
            <Route path = '/payment' element = {<Payment/>}/>
            <Route path = '/payment_confirm' element = {<PaymentConfirm />} />
            <Route path = '/loggings_modify/:loggingId' element = {<ModifyLogging />} />
            <Route path = '/logging_delete/:loggingId' element = {<EraseLogging />} />
            <Route path = '/payment' element = {<Payment />} />
            <Route path = '/logout' element = {<Logout />} />
            <Route path = '/reservations' element = {<UserReservations />} />
            <Route path = '/reservations_modify' element = {<ReservationModify />} />
            <Route path = '/reservations_cancel' element = {<ReservationCancel />} />
            <Route path = '/cancel_confirm' element = {<CancelConfirm />} />
            <Route path = '/users' element = {<Users />} />
            <Route path = '/users/:usersId' element = {<UsersDetails />} /> 
        </Routes>
  )
}

export default Pages