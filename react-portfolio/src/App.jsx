import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portifolio from './components/portifolio/Portifolio'
import Contact from './components/contact/Contact'
import Footer from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portifolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App