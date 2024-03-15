import React from 'react';
import { Link } from 'react-router-dom'

function navbar({isLogined}) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/appointment">약속</Link>
                </li>
                <li>
                    <Link to="/ranking">랭킹</Link>
                </li>
                <li>
                    <Link to="/chat">채팅</Link>
                </li>
                <li>
                    {isLogined ? (<Link to="/mypage">마이페이지</Link>):(<Link to="/login">로그인</Link>)}
                </li>
            </ul>
        </div>
    );
}
export default navbar;