import React, { useEffect, useState } from 'react'

const Increment = () => {
    const [value,setValue] = useState(0);

    useEffect(()=>{   //Mounting
      console.log("This will show up when the component first load in function based component");
    })
    useEffect(()=>{
      console.log("Component updated");   //Updation

      return ()=>{
        console.log("Component or element removed");
      }
    },[value])
    const handleIncrement = () =>{
        setValue(value+1)
    }
    const handleZero = () =>{
        setValue(0)
    }
    
  return (
    <div>
      <h1>{value}</h1>
        <button onClick={()=>{handleIncrement()}}>CIncrement</button>
        <button onClick={()=>{handleZero()}}>Zero</button>
    </div>
  )
}

export default Increment
