import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [

    {
      id:'1',
      title:'My static site',
      summary:'Having a ‘About Me’ page on your website is crucial for your business so that',
      link:'https://unsplash.com/@i_enigma',
      image:'https://images.unsplash.com/photo-1679389195114-3e463bb5c0c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id:'2',
      title:'My blog page',
      summary:'Having a ‘About Me’ page on your website is crucial for your business so that ',
      link:'https://unsplash.com/@i_enigma',
      image:'https://images.unsplash.com/photo-1679389195114-3e463bb5c0c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      id:'3',
      title:'this project',
      summary:'Having a ‘About Me’ page on your website is crucial for your business so that you c',
      link:'https://unsplash.com/@i_enigma',
      image:'https://images.unsplash.com/photo-1679389195114-3e463bb5c0c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    }
  ]
  return (
    <>
    <div id='projects' className='container'>
      <h1>Projects</h1>
      <ul>
    <div className='cards'>
          {projects.map((project)=>(    
            <div className='card'>
            <li key={project.id}>
              <img className='projectImage' src={project.image} alt='project' ></img>
               <h3>{project.title}</h3>
               <p>{project.summary}</p>
               <a href={project.link}>
               <button>Go To Project</button>
               </a>
            </li>
           </div>
          ))}
      </div>
      </ul>
      </div>
    </>
  )}

export default Projects