import React from 'react'
import {BrowserRouter , Routes, Route, Router} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SingIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from './components/privateRoute'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path ="/" element={<Home />}/>
    <Route path="/about" element={< About/>}/>
    <Route path="/signin" element={<SingIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    
    <Route element={<PrivateRoute/>} >
    <Route path="/profile" element={<Profile/>}/>
    </Route>
   
    </Routes>
    </BrowserRouter>

   
  )
}
