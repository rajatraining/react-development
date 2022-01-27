import { useState } from "react";
import ReactDOM from 'react-dom';

function FormSampleFunction() {

  // useState -->
  // useEffect
  // useContext
  
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <div>
      {name}

      </div>
     
    </form>
  )
}

export default FormSampleFunction;