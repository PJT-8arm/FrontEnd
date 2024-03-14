import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import LoginPage from './LoginPage';
import './components/signUp/signup.css';
import RegisterPage from './RegisterPage';
import Signup from './Signup';
import TestComponent from './TestComponent';

function App() {
    return (
        <Outlet />
    )
        
}

export default App;
