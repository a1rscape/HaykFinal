import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Home from './components/Pages/Home.jsx'
import Properties from './components/Pages/Properties.jsx'
import PropertyDetails from './components/Pages/PropertyDetails.jsx'
import ContactUs from './components/Pages/ContactUs.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties-details" element={<PropertyDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  )
}

export default App