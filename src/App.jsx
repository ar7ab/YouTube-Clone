import React, { useState, useEffect } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import PlayingVideo from './components/PlayingVideo';


export const ToggleSidebarContext = React.createContext(false);

const App = () => {

  const [sidebarToggle, setSidebarToggle] = useState(() => {

    const savedState = localStorage.getItem('sidebarToggle');
    return savedState ? JSON.parse(savedState) : true;
  });

  useEffect(() => {

    localStorage.setItem('sidebarToggle', JSON.stringify(sidebarToggle));
  }, [sidebarToggle]);

  return (
    <ToggleSidebarContext.Provider value={[sidebarToggle, setSidebarToggle]}>
      <div className="app font-roboto">
        <Navbar />
        <Routes basename="/YouTube-Clone/">
          <Route path='/' exact element={<Home />} />
          <Route path='/search/:searchQuery' element={<Search />} />
          <Route path='/video/:id' element={<PlayingVideo />} />
        </Routes>
      </div>
    </ToggleSidebarContext.Provider>
  );
};

export default App;
