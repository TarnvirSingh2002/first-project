// import logo from './logo.svg';
// import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import React, {useState}from 'react';
import { BrowserRouter as Router, Route, Link}  from "react-router-dom";
import{Switch} from "react-router-dom";
function App() {
  const [mode, setmode]=useState('light');
  const [alert,setAlert]=useState("");
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      ty:type,
    });
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("light mode is on","success");
      document.title="Text Utils(Light mode)";
      // setInterval(() => {
      //   document.title="very " 
      // }, 2000);
      // setInterval(() => {
      //   document.title=" not very " 
      // }, 1500);      
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor="#343a40";
      showalert("dark mode is on","success");
      document.title="Text Utils(Dark mode)";
    }
  }
  setTimeout(()=>{
    setAlert(null);
  },3000)
  return (
    <>
    <Router>
      <Navbar title="TextUtils"  mode={mode} tM={toggleMode} title2="Home"/> 
      <Alert alert={alert}/> 
      <div  className='container my-3'>
        <Switch>
          <Route path="/About">
            <About/>
          </Route>  
          <Route path="/">
            <TextForm head="Enter your query" mode={mode} showalert={showalert}/>
          </Route>  
          </Switch>      
      </div>
      </Router>
    </>
  );
}

export default App;