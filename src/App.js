import React from 'react'
import "./App.css";
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Center from './components/center/Center'

const App = () => {
  return (
    <div className='App'>
      <LeftBar />
      <Center />
      <RightBar />
    </div>
  )
}

export default App
