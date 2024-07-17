import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>First React App Installation</h1>
    <h4>What is React?</h4>
    <p>React’s primary role in an application is to handle the view layer of that application 
      just like the V in a model-view-controller (MVC) pattern by providing the best and most
       efficient rendering execution. Rather than dealing with the whole user interface as a 
       single unit, React.js encourages developers to separate these complex UIs into individual
        reusable components that form the building blocks of the whole UI. In doing so, the
         ReactJS framework combines the speed and efficiency of JavaScript with a more efficient
          method of manipulating the DOM to render web pages faster and create highly dynamic
           and responsive web applications. React is a free and open-source front-end JavaScript library for building user interfaces
            based on components by Facebook Inc. It is maintained by Meta and a community of individual
             developers and companies. React can be used to develop single-page, mobile, or server-rendered
              applications with frameworks like Next.js.
</p>
<ul>1. Mark Aron Lawas
</ul>
<ul>2. Rodel Celis
</ul>




    </div>
  )
}

export default App
