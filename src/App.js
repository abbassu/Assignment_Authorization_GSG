import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter, Route,  Routes,Outlet ,createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom"
import Navbar from './component/navbar/navbar';
import "bootstrap";
import About from './component/about/about';
import Signup from './component/signup/signup';
import Layout from './component/layout/layout';
import Login from './component/login/login';
import Resetpass from './component/reserpassword/reset';
import Board from './component/board/board';
function App() {

  useEffect(()=>{
    localStorage.clear()
  },[])
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/reset' element={<Resetpass />} />
        <Route path='/board' element={<Board />} />

      </Route>
    )
  );

    return (
      <div>
        <RouterProvider router={router} />
      </div>
    )
  }
export default App;
