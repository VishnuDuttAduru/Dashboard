import React, { useState } from 'react'
import "./App.css";
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Center from './components/center/Center'

const App = () => {

const [isSidebarOpen,setIsSidebarOpen] = useState(true);

const togglesidebar =()=>{
  setIsSidebarOpen(!isSidebarOpen);
}


  return (
    <div className='App'>
      <LeftBar isOpen={isSidebarOpen}/>
      <Center togglesidebar={togglesidebar}/>
      <RightBar />
    </div>
  )
}

export default App
