import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Header from "./components/header/Header";

import ApplyDoctor from "./pages/ApplyDoctor";
import Appointments from "./pages/Appointments";
import Bookingpage from "./pages/Bookingpage";
import Contact from "./pages/Contact";
import DoctorAppointments from "./pages/DoctorAppointments";
import Home from "./pages/Home";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotificationPage from "./pages/NotificationPage";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Doctors from "./pages/admin/Doctors";
import Users from "./pages/admin/Users";
import Profile from "./pages/doctor/Profile";
import { Route,Routes } from "react-router-dom";
import RouteApp from './Routes/RouteApp'
import Footer  from "./components/footer/Footer";
function App() {
  return (
    <>
    <Header/>
   <RouteApp/>
   <Footer/>
    </>
  );
}

export default App;
