import '../styles/App.scss';

import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  //Global state to hold JSON data
  const [jsonData, setJsonData] = useState({});


  // Fetch data on component mount
  useEffect(() => {
    console.log("recargo la pagina useEffect 1");
    fetchData();
  }, []); // Empty dependency array means this runs once on mount


  console.log("recargo la pagina 1");
  // Function to fetch the JSON data
  const fetchData = async () => {
    try {
      const response = await fetch('/data/data.json'); // Adjust the path as necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setJsonData(data);
      console.log("recargo la pagina fetch");
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  };


  //HTML
  return (
    <div className='page darkmode'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects'
            element={<Projects
              jsonData={jsonData} />} />

          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>

      </main>
    </div>
  );
}
export default App;
