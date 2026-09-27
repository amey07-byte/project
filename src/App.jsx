import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

      let [Counter,setcount] = useState(0);
      let [error,seterror]=useState("");
      const addvalue =()=>{
        setcount(Counter+1);
        seterror("")
      }

      const redvalue=()=>{
      if(Counter>0){
      setcount(Counter-1);
      
      }
      else{
          seterror("NOTE: Value cannot Become less than Zero");
      }
      }

  return (
    <>
        <h1>Counter Project</h1>

        <div>
         value:{Counter}
         
        
        </div>

        <button onClick={addvalue}>INCREASE : {Counter}</button>  
        <button onClick={redvalue}>DECREASE : {Counter}</button>
        <br />

         <h4>{error}</h4>  
    </>
  )
}

export default App
