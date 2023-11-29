import './App.css';
import { useState } from 'react';

const App = () => {

  const [sum, setSum] = useState("");
  
  const buttons = [
    "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9", "+", "-", 
    "x", "÷", "C", "=" ];

  const handleClick = (btnPress) => {
    // work out the sum
    // update the stateFunction setSum
    setSum(sum + btnPress);
  };

  return (
    <div className="calc">
      <h1>Calculator Demo</h1>
      <h3 className="display">SUM: {sum}</h3>
      <div>
        {buttons.map((button, index) => {
          return (
            <button key={index} className="buttonBox" onClick={()=>handleClick(button)}>{button}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;