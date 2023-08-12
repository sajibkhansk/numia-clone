import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Logos from './Component/Logos'
import Infrastructure from './Component/Infrastructure'
import Products from './Component/Products'
import Allproducts from './Component/Allproducts'
import AllLogo from './Component/AllLogo'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar></Navbar>
      <Hero></Hero>
      <Logos></Logos>
      <Infrastructure></Infrastructure>
      <Products></Products>
      <Allproducts></Allproducts>
      <AllLogo></AllLogo>
      <Footer></Footer>
    </div>
  )
}

export default App
