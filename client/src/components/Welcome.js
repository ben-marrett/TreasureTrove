import React, { useState, useEffect } from 'react'
import treasureImage from '../images/treasure.jpg'

function Welcome() {
  return (
    <div className="Welcome">
      <h1>Welcome to Treasure Trove</h1>
      <img
        src={treasureImage}
        alt="Treasure Book"
        className="fade-image treasure-image"
      />
      <p>An app for storing valuable finds online.</p>
      <button className="button">Get Started</button>
    </div>
  )
}

export default Welcome;