// import logo from './logo.svg';
// import './App.css';
// import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React,{useState} from 'react';
import About from './components/About';
function App() {
  const [mode, setmode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='dark'){
      setmode('light');
    }
    else{
      setmode('dark');
    }
  }
  return (
    <>      
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} title2="Home"/>
      {/* <div  className='container my-3'>
        <TextForm head="Enter your query"/>
      </div>       */}
      <div className="container my-3">
        <About/>
      </div>
    </>
  );
}

export default App;
