import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss';


function Footer() {
    return (
        <>
            <footer id='footer' className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='widget menu-widget'>
                                <h6>News</h6>
                                <ul className='footer-nav'>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Featured News
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Latest News
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='widget menu-widget'>
                                <h6>Life</h6>
                                <ul className='footer-nav'>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Latest News
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Fashion
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Dining
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Recipies
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Art & Culture
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Travel
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Motoring!
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='widget menu-widget'>
                                <h6>business</h6>
                                <ul className='footer-nav'>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Open House
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            What does that even mean?
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Homegrown
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            How do I...
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Bag off
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/news" className="nav-links">
                                            Where to spend it
                                        </Link>
                                    </li>
                                     
                                </ul>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='widget subscribe-widget'>
                                <h6>Subscribe</h6>
                                <p>Get fresh updates about  the fashion, beauty, trends</p>
                                <form>
                                    <input type='email' name='email' id='email' placeholder='Enter your email below' required className='input-elem' />
                                    <input type='submit' name='Submit' id='Submit' value='Submit'  />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <ul className='bottom-nav'>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">Magazine</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">Contact</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">About</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">Press</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">sitemap</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/news" className="nav-links">TS + CS</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
