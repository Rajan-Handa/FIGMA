import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Features from './components/Features'
import Programs from './components/Programs'
import Campus from './components/Campus'
import Scholarship from './components/Scholarship'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Features />
      <Programs />
      <Stats />
      <Campus />
      <Scholarship />
      <Footer />
    </BrowserRouter>
  )
}

export default App
