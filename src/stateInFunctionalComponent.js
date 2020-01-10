import React, {useState, useEffect } from 'react';
export default function StateInFunctionalComponent() {
    const [count, setCount] = useState(0)
    const [update, setUpdate] = useState(0)
    useEffect(()=>{
        document.title = `clicked ${count} times`;
    });
  return(
      <div>
       functionalComponent
       <button onClick={()=> setCount(count+1)}>
       Count {count} times clicked
       </button>
       <button onClick={()=> setUpdate(update+1)}>
       setUpdate {update} times clicked
       </button>
      </div>
  )
}