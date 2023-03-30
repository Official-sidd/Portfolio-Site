import React from 'react'
import './Resume.css'

const Resume = () => {
 
  return (
    <div className='full'>
    <div className='resume' id='resume'>
    <div className='resumeChild'>
      <div className='resumeWords'>
        <h1>Skills</h1>
        <br></br>
        <p>Having a ‘About Me’ page on your website is crucial for your business so that you can create a good first impression and build strong connections with your readers. An ‘About Me’ page should convey who you are</p>
    </div>
    </div>
    <div className='resumeChild'>
        <a href="React\Portfolio\portfolio\src\Resume\Siddharth_Bhattacharjee.pdf" download="">Download</a>

        <button className='button'>&#8681; Download Resume</button>
        </div>
    </div>
    </div>
  )
}

export default Resume