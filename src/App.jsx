import React from 'react'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Education from './Components/Education'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='min-h-screen  p-6 bg-DarkNavy'>
    <div className='grid  grid-cols-2 grid-rows-4  gap-4'>
      <div  className="col-span-2 row-span-4">
        <About />

      </div>
      <Skills />
      <Contact />
      <Resume />
      <Education />
      
      <div  className="col-span-2 row-span-4">
        <Projects />

      </div>
    </div>
    </div>
  )
}

export default App