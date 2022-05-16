import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import logo from '../assets/images/logo.png';
import hamburger from '../assets/images/hamburger.png';
import darkMoon from '../assets/images/dark.png';
import useLocalStorageState from 'use-local-storage-state'



function Navbar() {
    const [click, setclick] = useState(false);

    //const handleClick = () => setclick(!click);
    const closeMobileMenu = () => setclick(false);

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorageState('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Link to="/">
                            <img src={logo} alt='logo' />
                        </Link>
                    </div>
                    
                    <div className='secondary-nav-options'>
                        <div className='menu-icon'>
                            <img src={hamburger} alt='hamburger' />
                            <span>menu</span>
                        </div>

                        <div className='theme-switcher'>
                            <button onClick={switchTheme}>
                                
                                <img src={darkMoon} alt='mode icon' />
                            </button>
                            
                        </div>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                news
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                opinion
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                life
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                business
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                magazine
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                newsletter
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;
