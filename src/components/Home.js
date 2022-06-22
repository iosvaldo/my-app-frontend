import React from 'react'
import logo from '../Images/greg-trowman-jsuWg7IXx1k-unsplash.jpg'




function Home() {
  return (
    <div class="container">
      <h1 class="main-title">Welcome to World Klass Kuts</h1>
      <img class="hero-image" src={logo} alt="Salon logo" />
    </div>
  )
}

export default Home