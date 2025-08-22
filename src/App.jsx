import React, { useEffect, useState } from 'react'
import './App.css'
// import myText from "../assets/data.txt?raw";
import myText from "../src/assets/data.txt?raw";
import NavBar from './components/Nav';
import MainCol from './components/Main';
import About from './components/About';
import Footer from './components/Fotter';
import Test from './components/Test';
function App() {
  const [name, setNames] = useState([]);
  useEffect(()=>{
      const data = myText.split("\n").filter(Boolean);
    setNames(data);
        
      },[])


  return (
    <div className='scroll-smooth'>
    <NavBar />
    <MainCol data={name} />
    <Test />
    <About />
    <Footer />
    </div>
  )
}

export default App
