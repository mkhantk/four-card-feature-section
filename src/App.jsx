import { React, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container flex flex-col justify-center items-center min-h-screen min-w-full p-5 font-body gap-2'>
        <header className='flex flex-col justify-center items-center p-2 max-w-[550px]'>
          <h1 className='text-2xl md:text-3xl font-thin text-veryDarkBlue'>Reliable, efficient delivery</h1>
          <h2 className='text-2xl md:text-3xl font-semibold text-veryDarkBlue'>Powered by Technology</h2>
          <p className='text-md text-center my-7'>Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful</p>        
        </header>
        
        
        <main className='flex flex-col gap-5 m-5 md:flex-row md:items-center'>
          <div className='cards border-t-cyan-500'>
            <div>
              <h3>Supervisor</h3>
              <p>Monitors activity to identify project roadblocks</p>
            </div>
            
            <img src="./public/assets/icon-supervisor.svg" alt="supervisor-icon" />
          </div>
          <div className='flex flex-col gap-5'>
            <div className='cards border-t-red-500'>
              <div>
                <h3>Team Builder</h3>
                <p>Scans our talent network to create the optimal team for your project</p>
              </div>
              
              <img src="./public/assets/icon-team-builder.svg" alt="team-builder" />
            </div>
            <div className='cards border-t-orange-500'>
              <div>
                <h3>Karma</h3>
                <p>Regularly evaluates our talent to ensure quality</p>
              </div>
              
              <img src="./public/assets/icon-karma.svg" alt="karma-icon" />
            </div>
          </div>
          
          <div className='cards border-t-blue-500'>
            <div>
              <h3>Calculator</h3>
              <p> Uses data from past projects to provide better delivery estimates</p>
            </div>
            
            <img src="./public/assets/icon-calculator.svg" alt="calculator-icon" />
          </div>   
              
    
        </main>
        

        
        <footer>
          <p className="attribution text-sm ">
            Challenge by <a className='text-blue-400' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a className='text-blue-400' href="#">Min Khant Kyaw</a>.
          </p>
        </footer>
      </div>
      
    </>
  )
}

export default App
