import React from 'react';
import Navbar from './components/navbar';
import Home from './components/pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state'

import './App.scss';



function App() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorageState('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className='app' data-theme={theme}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home/>} />
                    
                </Routes>
            </Router>
        </div>
    );
}

export default App;
