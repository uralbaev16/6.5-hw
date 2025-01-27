import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'

function App() {
  const [show, setShow] = React.useState(false)
 
  return (
    <>
      <Header/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
