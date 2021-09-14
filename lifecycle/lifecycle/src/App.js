import { useState } from "react";
import Hooks from "./Hooks";
import Unmount from "./Unmount";


function App() {

  const[isVisible,setIsVisible]=useState(false);
  return (

    <div className="App">
      <Hooks/>
      {isVisible && <Unmount/> /*Koşullu Render*/} 

      <button onClick={()=>setIsVisible(!isVisible)}>Göster / Gizle</button>
    </div>
  );
}

export default App;
