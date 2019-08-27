import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Input from './components/input'
function App() {
  const changeInputValue = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }


  //設置 state
  const [inputValue, setInputValue] = useState('itwara')
  return (
    <div className="App">
      <div className="tip">{inputValue}</div>
      <Input name={inputValue} change={changeInputValue}></Input>
    </div>
  );
}

export default App;
