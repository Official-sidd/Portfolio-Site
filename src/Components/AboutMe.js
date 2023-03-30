import React from 'react'
import images from '../Images/potrait2.jpg'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <>
    <div className='background'>
    <div id='about' className='AboutMe'>
      <div className='AboutContent'>
            <h1>About Me</h1>
            <p>Having a ‘About Me’ page on your website is crucial for your business so that you can create a good first impression and build strong connections with your readers. An ‘About Me’ page should convey who you are, what your values and principles are, how you got to where you are, and why your product or service is important to you. If writing an ‘About Me’ page seems daunting, you can use an about us template to help you out.</p>
        </div>
        <div className='AboutContent'>
            <img src={images} height='350px' width='250px' alt='myimage'></img>
        </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe