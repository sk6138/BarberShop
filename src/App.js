import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginSignup from "./components/LoginSignup";
import Booking from "./components/Booking";
import BookingConfirmation from "./components/BookingConfirmation";
import UserProfile from "./components/UserProfile";
import RegisterForm from "./components/RegisterForm";
import ServicePage from "./pages/ServicePage";
import AboutusPage from "./pages/AboutusPage";
import LocationPage from "./pages/LocationPage";
import CancellationPolicyPage from "./pages/CancellationPolicyPage";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/appointments" element={<Booking/>} />
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/location" element={<LocationPage/>} />
        <Route path="/about" element={<AboutusPage/>} />
        <Route path="/policy" element={ <CancellationPolicyPage/>} />
        

        {/* 
        <Route path="/confirmation" element={<BookingConfirmation />} />
        
        <Route path="/login" component={LoginSignup} />
       
         */}
        
      </Routes>
    </Router>
    
  );
}

export default App;
