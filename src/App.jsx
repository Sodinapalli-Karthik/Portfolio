import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import { Testinomials } from './components/Testinomials/Testinomials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testinomials/> */}
    <Contact/>
    <Footer/>


    </>
  )
}

export default App