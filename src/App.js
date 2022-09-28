import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [budget, setBudget] = useState('');
  const [toggle, setToggle] = useState(true);
  const handleChange = event => {
    setInput(event.target.value);

  };

  const handleClick = event => {
    event.preventDefault();
    setBudget(input);
  };

  const handleSample = () => {
    setToggle(!toggle)
  }
  return (
    <div style={{ marginLeft: 20 }}>
      <h4>Please enter your Budget</h4>
      <input
        type="text"
        id="input"
        name="input"
        onChange={handleChange}
        value={input}
      />
      <button onClick={handleClick}>Save</button>
      <h2>Budget:{budget}Rs</h2>
      <hr />
      <div >
        <img src={require('./images/ph1.png')} />
        <h3 style={{ display: 'flex', flexDirection: 'row' }}>Mango</h3>
        <div>
          <h4 style={{ marginLeft: 20, display: 'flex', flexDirection: 'row' }}>Price:100Rs</h4>
        </div>
      </div>
      <button disabled={!toggle} onClick={handleSample}>Add</button>
      <button disabled={toggle} onClick={handleSample}>Remove</button>

    </div>
  );
};

export default App;
