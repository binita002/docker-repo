import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (age > 18) {
      setResult('Adult');
    } else {
      setResult('Not Adult');
    }
  };

  return (
    <div className="App">
      <h1>Age Checker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={handleAgeChange} />
        </div>
        <button type="submit">Check</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
}

export default App;