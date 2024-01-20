import React from 'react'
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoute from "../components/PublicRoute";
// import Header from "./components/header/Header";

import ApplyDoctor from "../pages/ApplyDoctor";
import Appointments from "../pages/Appointments";
import Bookingpage from "../pages/Bookingpage";
import Contact from "../pages/Contact";
import DoctorAppointments from "../pages/DoctorAppointments";
import Home from "../pages/Home";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import NotificationPage from "../pages/NotificationPage";
import Register from "../pages/Register";
import Services from "../pages/Services";
import Doctors from "../pages/admin/Doctors";
import Users from "../pages/admin/Users";
import Profile from "../pages/doctor/Profile";
import { Route,Routes } from "react-router-dom";
import Predict from '../pages/Predict';
import Webinar from '../pages/webinar/Webinar';
import FindADoc from '../pages/Doctors/Doctors';
function RouteApp() {
  return (
    <div>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
   
    {/* <Route path='/doctor/:id' element={<DoctorDetails/>}/>  */}
  
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/findadoctor' element={<FindADoc/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/predict/:param' element={<Predict/>}/>
    <Route path='/live' element={<Webinar/>}/>

   
            <Route
              path="/user-home"
              element={
                <ProtectedRoutes>
                  <Homepage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoutes>
                  <ApplyDoctor />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoutes>
                  <Doctors />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoutes>
                  <Bookingpage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <NotificationPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/login"
              element={
                
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoutes>
                  <Appointments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoutes>
                  <DoctorAppointments/>
                </ProtectedRoutes>
              }
            />
       
    
  </Routes>
    </div>
  )
}

export default RouteApp
