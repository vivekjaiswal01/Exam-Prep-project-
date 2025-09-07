
import './App.css'
import React from 'react'
import {BrowserRouter as Router,Routes ,Route} from 'react-router';
import Login from './pages/login';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Session from './pages/Session';
import Registration from './pages/Registration';


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Adminlogin' element={<AdminLogin/>} ></Route>
        <Route path='/AdminDashboard' element={<AdminDashboard/>}>
        <Route path='Session' element={<Session/>}></Route>
        </Route>
        
        <Route path='/Registration' element={<Registration/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

