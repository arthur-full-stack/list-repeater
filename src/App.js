import React, { useState, useEffect } from 'react';
import List from '../src/components/List';
import './styles.css'
export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.npoint.io/86690d80ff3d455133f0");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me that list!</h1>
      </div>
      <List data={data} />
    </div>
  );
}

