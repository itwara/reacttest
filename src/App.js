import React, { useState } from 'react'
import './App.css';
import Input from './components/input'
import LifeCircle from './views/lifeCircle' 
function App() {
  const changeInputValue = (dom) => {
    console.log(dom)
    setInputValue(dom.value)
  }
  //設置 state
  const [inputValue, setInputValue] = useState('itwara')

  const routeNm = 'life'
  let view = null
  switch(routeNm) {
    case 'bind': 
      view = (
        <div className="bind">
          <div className="tip">{inputValue}</div>
          <Input name={inputValue} change={changeInputValue}></Input>
          </div>
      )
      break
    case 'life':
      view = (<LifeCircle></LifeCircle>)
      break
    default:
      view = null
  }
  return (
    <div className="App">
      {view}
    </div>
  );
}

export default App;
