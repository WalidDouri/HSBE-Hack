import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';
import Landing from'./pages/Landing'
import Login from'./pages/Login'
import Dashboard from'./pages/Dashboard'
import Questionnaire from'./pages/Questionnaire'
import Questionnaire2 from'./pages/Questionnaire2'
import Questionnaire3 from'./pages/Questionnaire3'
import Results from'./pages/Results'
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
        <Route path="/questionnaire2" element={<Questionnaire2 />}/>
        <Route path="/questionnaire3" element={<Questionnaire3 />}/>
        <Route path="/results" element={<Results />}/>

      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
