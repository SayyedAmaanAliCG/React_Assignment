import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import Features from './components/Features';

function App() {
  const [data, setData] = useState(null);
  
 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='app-container'>
      {data ? (
        <Features data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
