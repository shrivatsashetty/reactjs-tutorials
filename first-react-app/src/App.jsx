import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import "./App.css"

function App() {
  return (
    <div>
      <Navbar/>
      {/* adding inline styles as JavaScript object */}
      <div className="cards flex" style={{justifyContent: "space-around"}}>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" desc="Hello, this is last card" />
      </div>
      <Footer/>
    </div>
  )
}

export default App

