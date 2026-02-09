import React from 'react'
import './App.css'
import Features from './components/Features'
import Programs from './components/Programs'
import Campus from './components/Campus'
import Scholarship from './components/Scholarship'
import Footer from './components/Footer'
import Hero from './components/Hero';
import Stats from './components/Stats'
import New from './components/New';
import usePageTracking from './components/UsePageTracking'
function App() {

  usePageTracking();

  return (
    <div>
        <Hero/>
        <Features/>
        <Programs/>
        <Stats/>
        <Campus/>
        <Scholarship/>
        <Footer/>
        <New/>
    </div>
  )
}

export default App
