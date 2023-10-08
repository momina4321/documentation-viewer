import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyForm from './Components/Form/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
return (
  <Router>
    <Routes>
      <Route path="/*" element={ <MyForm/> }/>

    </Routes>
  </Router>
);
}


export default App;
