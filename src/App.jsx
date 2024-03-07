import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    let what = axios.get('/api/hello')
      .then(res => {
        console.log("successfully accessed")
      })
      .then(data => console.log(data))
      .catch(() => console.log('not found'))
  });
}

export default App
