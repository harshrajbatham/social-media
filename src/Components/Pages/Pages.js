import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Reset from './Reset';

const Pages = () => {
  return (
    <>
        <div>
        <Routes>
        <Route path="/" element={ <Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/reset" element={<Reset/>}/>
        </Routes>
            
        </div>
    </>
  )
}

export default Pages