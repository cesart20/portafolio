import './App.css';
import Home from './pages/Home';
import Sidebar from "./components/Sidebar"
import "./index.css"

import About from './pages/About';
import Contact from './pages/Contact';
import Portafolio from './pages/Portafolio';
// import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';

import { useState } from "react";

function App() {

    const [activeMenu, setActiveMenu] = useState(false);

 
  return (
    <div className="App">
      <div className="appNavbar">
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}></Navbar>
      </div>
      <div className={activeMenu ? "appSidebar active" : "appSidebar"}>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}></Sidebar>
      </div>
      <div className="appContent">
        <Home />
        <About></About>
        <Portafolio></Portafolio>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
