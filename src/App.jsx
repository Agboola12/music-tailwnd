import React from 'react'
import { Route, Routes } from 'react-router'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import HeadPhone from './components/HeadPhone';
import Speaker from './components/Speaker';
import EarPhone from './components/EarPhone';
import HeadPhoneDetails from './components/HeadPhoneDetails';
import EarPhoneDetails from './components/EarPhoneDetails';
import SpeakerDetails from './components/SpeakerDetails';
import CheckOut from './components/CheckOut';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphone" element={<HeadPhone />} />
      <Route path="/speaker" element={<Speaker />} />
      <Route path="/earphone" element={<EarPhone />} />
      <Route path="/headdetails" element={<HeadPhoneDetails />} />
      <Route path="/eardetails" element={<EarPhoneDetails />} />
      <Route path="/speakdetails" element={<SpeakerDetails />} />
      <Route path="/checkout" element={<CheckOut />} />


      </Routes>
      </Router>
  )
}

export default App