import React, { useState } from 'react'
import './App.css';
import Input from './components/input'
import LifeCircle from './views/lifeCircle' 
import User from './views/user'

function App() {
  const changeInputValue = (dom) => {
    console.log(dom)
    setInputValue(dom.value)
  }
  //設置 state
  const [inputValue, setInputValue] = useState('itwara')

  let view = null
  const routeNm = 'life'
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
    case 'user':
      view = (<User></User>)
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
