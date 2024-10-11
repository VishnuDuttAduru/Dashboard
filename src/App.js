import React, { useState, useContext } from 'react'
import "./App.css";
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Center from './components/center/Center'
import { themeContext } from './Context.jsx';

const App = () => {

  const { state } = useContext(themeContext);
  const darkMode = state?.darkMode;

const [isSidebarOpen,setIsSidebarOpen] = useState(true);


const togglesidebar =()=>{
  setIsSidebarOpen(!isSidebarOpen);
}

  return (
    <div 
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white", 
        color: darkMode && "white"
      }}
    >
      <LeftBar isOpen={isSidebarOpen} />
      <Center togglesidebar={togglesidebar} />
      <RightBar />
    </div>
  )
}

export default App
