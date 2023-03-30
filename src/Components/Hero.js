import React from 'react'
import './Hero.css'

const Hero = () => {
 
  return (
    <div className='hero'>

        {/* <button className='heroButton' onClick={clickHandler}>View Resume</button> */}

        <nav className="menu">
         <ul className='ull'>
            <li className='lii'><a href="#about">About</a></li>
            <li className='lii'><a href="#projects">Project</a></li>
            <li className='lii'><a href="#contact">Contact</a></li>
         </ul>
        </nav>

        <div className='fullName'>
        {/* <h1>Siddharth</h1>
        <h1>Bhattacharjee</h1>
        <h6>FrontEnd Developer</h6> */}
        </div>
        <div className='image'>
            <h1 className='semi'>Siddharth</h1>
            <h1 className='colon'>Bhattacharjee</h1>
        </div>
       
    </div>
  )
}

export default Hero