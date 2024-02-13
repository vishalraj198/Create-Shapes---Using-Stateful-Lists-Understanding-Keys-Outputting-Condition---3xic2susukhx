import React,{ useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [shapes,setShapes]= useState([])
  const [selectedShape,setSelectedShape]=useState('Square')

  function handleClick(){
      setShapes([...shapes,selectedShape.toLowerCase()]);
  }
  return (
    <div id="main">
      <div id="shape-creator">
      <select onChange={(e)=>setSelectedShape(e.target.value)}>
        <option>Circle</option>
        <option>Square</option>
      </select>

        <button onClick={handleClick}>Add Shape</button>

      </div>

      <div id="shapes-holder">

      {shapes.map((shape,id) =>(
        <div className={shape}>{id}</div>
     ) )}
      </div>
    </div>
  )
}


export default App;
