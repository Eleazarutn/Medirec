import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './SinglePagesOutComp/Login';
import { IndexDashboard } from './ComponentsIndex/IndexDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <IndexDashboard/> }></Route>
        <Route path='login' element= { <Login/> }> </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
