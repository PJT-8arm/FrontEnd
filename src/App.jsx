import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecruitmentForm from './RecruitmentForm';
import RecruitmentDetail from './RecruitmentDetail'; // 임포트한 RecruitmentDetail 컴포넌트
import Navbar from './Navbar';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Ranking from './pages/Ranking';
import Chat from './pages/Chat';
import Mypage from './pages/Mypage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/appointment' element={<Appointment/>}></Route>
                <Route path='/ranking' element={<Ranking/>}></Route>
                <Route path='/chat' element={<Chat/>}></Route>
                <Route path='/mypage' element={<Mypage/>}></Route>
            </Routes>
            <Navbar />
        </Router>
    );
}

export default App;

