import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Header } from './Components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Header/> }></Route>
        <Route path='login' element= { <Login/> }> </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
