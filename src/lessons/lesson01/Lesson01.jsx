// ! How to create react component?

// 1. File name should start with Capital letter. 
// 2. Should be .jsx
// 3. Inside should be function with return (Verskta)
// 4. Function name should be name of file (with Capital letter)
// 5. Function export from file

import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'


    function Lesson01() {
        return(
            <>
              
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Apple + Pen = ApplePen</h1>
      
      <p className="read-the-docs">
        This react project made by Vite project
      </p>
    </>
        
            
            
        )
    }

    export default Lesson01
