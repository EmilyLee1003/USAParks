import React, { useEffect } from 'react'
import logo from './logo.svg'
import './Home.css'

function Home() {
  
  

  return (
    <div>
      <img src={logo} />
      <h1>Hello</h1>
      <button onClick={getUsers}>Click me</button>
    </div>
  )
}

export default Home
