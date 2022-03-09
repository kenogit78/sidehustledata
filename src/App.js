
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchPost().then(response => setResults(response) )
  }, [])
  

const fetchPost = async ()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  console.log(response)

  return response
}



  return (
    <div className="App">
      <h1> Side Hustle </h1>

      <Card results = {results} />
    </div>
  );
}

export default App;
