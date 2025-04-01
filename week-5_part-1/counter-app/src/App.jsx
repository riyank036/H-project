//Hook
import { useState } from "react";


export default function App() {

  // state, components 
  const [count, setCount] = useState(0);

  function onClickHandler() {
  setCount(count + 1) 
  }
  

  return (
    <div>
     <button onClick={onClickHandler}>Counter {count}</button>
    </div>
  )
}
