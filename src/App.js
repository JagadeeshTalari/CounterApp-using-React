import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [count, setCount] = useState(0);
  
  return(
    <div className="App">
    <h1>Counter Value - {count}</h1>
    <button className="button" onClick={() => setCount(0)}>Reset</button>
    <button className="button" onClick={() => count > 9 ? "" :setCount(count + 1)}>Increase</button>
    <button className="button" onClick={() => count < 1 ? "" :setCount(count - 1)}>Decrease</button>
    </div>
  )
}


export default App