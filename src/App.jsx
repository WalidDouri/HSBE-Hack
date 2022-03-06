import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Landing from'./pages/Landing'
import Login from'./pages/Login'
import Dashboard from'./pages/Dashboard'
import Questionnaire from'./pages/Questionnaire'
// import Header from'./pages/Header'
// import Footer from'./pages/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/questionnaire" element={<Questionnaire />}/>

      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
