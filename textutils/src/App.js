// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-"+cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383838';
      document.body.style.color = '#ffffff';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/"
            element = { <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} /> } />
            <Route path="/about"
            element = { <About mode={mode} /> } />
          </Routes>
        </div>
        
        
    </>
  );
}

export default App;
