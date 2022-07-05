import React, {useState, useEffect, useContext } from 'react';
import './App.css';
// import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { themeContext } from './Context';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import LoadingBar from 'react-top-loading-bar';


function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [prog, setProg] = useState(20);
  // setTimeout(() => {
  //   setProg(100); 
  // }, 400);

  useEffect(() => {
    setTimeout(() => {
      setProg(70)
    }, 300);

    setTimeout(() => {
      setProg(100)
    }, 500);

  }, [])

  return (
    <Router>
      <div className="App"
        style={{
          background: darkMode? 'black':'',
          color: darkMode? 'white':''
        }}>
      
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={prog}
        />
          <Routes>
            <Route path='/' element={(<Home/>)}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
