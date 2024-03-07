import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get('/api/hello') //원하는 url작성
            .then(response => {
                console.log(response);
                return response.data; 
            })
            .then(message => {
                setMessage(message);
                console.log('message',message);
            })
            .catch(message => {
                setMessage('실패');
            })
            ;
    }, [])

    return (
        <div>
            <h4>백엔드의 데이터 : {message}</h4>
        </div>
    )

}

export default App
