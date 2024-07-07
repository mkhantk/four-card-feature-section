import { React, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container flex flex-col justify-center items-center min-h-screen'>
        <header>
          <h1>Reliable, efficient delivery</h1>
          <h2>Powered by Technology</h2>
          <p>Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful</p>        
        </header>
        
        
        <main>
          <div>
            <h3>Supervisor</h3>
            <p>Monitors activity to identify project roadblocks</p>
            <img src="./public/assets/icon-supervisor.svg" alt="supervisor-icon" />
          </div>
          <div>
            <h3>Team Builder</h3>
            <p>Scans our talent network to create the optimal team for your project</p>
            <img src="./public/assets/icon-team-builder.svg" alt="team-builder" />
          </div>
          <div>
            <h3>Karma</h3>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="./public/assets/icon-karma.svg" alt="karma-icon" />
          </div>
          <div>
            <h3>Calculator</h3>
            <p> Uses data from past projects to provide better delivery estimates</p>
            <img src="./public/assets/icon-calculator.svg" alt="calculator-icon" />
          </div>   
              
    
        </main>
        

        
        <footer>
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </p>
        </footer>
      </div>
      
    </>
  )
}

export default App
