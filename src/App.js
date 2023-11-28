// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';





// import React from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("  Light mode has been enabled", "success");
      document.title = 'React js-Word Counter';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="ReactJs" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my=5">
          <Routes>
            <Route path='/' element={<TextForm showAlert={showAlert} heading="Try React js- Word Counter,Text Bold,Converted To Uppercase or Lowercase" mode={mode} />} />


            <Route path='/about' element={<About mode={mode} />} />



          </Routes>


        </div>
      </BrowserRouter>

    </>
  );
}


export default App;






