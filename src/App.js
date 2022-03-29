import React, { useState } from 'react'
import './Styles/navbar.css';
import {BrowserRouter as Router, Routes, Route, NavLink, HashRouter} from 'react-router-dom'
import AboutUs from './Sites/AboutUs';
import Breeders from './Sites/Breeders';
import Hatchlings from './Sites/Hatchlings';
import Actualities from './Sites/Articles';
import Contact from './Sites/Contact';
import Footer from './Components/Footer';

import './Styles/main_css.css'
import Amn from './Amn';

function App() {
    
    const [active,setActive] = useState(true);

    const toggleNav = () =>{
        setActive(!active)
    }

    const closeMenu = () =>{
        setActive(true)
        window.scrollTo(0,0)
    }
    
    return (   
    <>
<Router >
        <nav id='navbar'>
                <ul className='first-ul'>
                <NavLink onClick={closeMenu} className='contact-link' exact activeClassName='is-active' to="/bydza-beardies/contact">Contact</NavLink>
                <NavLink onClick={closeMenu} exact className='img-logo' activeClassName='is-active' to="/bydza-beardies/"><img className='logo-img' src={require('./images/logo/whole_logo_big.png')}></img></NavLink>
            </ul>

            <ul className={active ?'second-ul-non-active':'second-ul' }>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/bydza-beardies/breeders">Our Breeders</NavLink>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/bydza-beardies/dragons-for-sale">Dragons For Sale</NavLink>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/bydza-beardies/care-guide-and-more">Care Guide & Transport</NavLink>
                <NavLink onClick={closeMenu} className='nav-link contact-nav' exact activeClassName='is-active' to="/bydza-beardies/contact">Contact</NavLink>
            </ul>
            <div onClick={toggleNav} className={active ? 'burger': 'burger-active'}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>

    <div className='everything-div'>

         <div className='spacing'>
         </div>
        <Routes>
            <Route exact path="/bydza-beardies" element={<AboutUs/>}/>
            <Route path="/bydza-beardies/breeders" element={<Breeders/>}/>
            <Route path="/bydza-beardies/dragons-for-sale" element={<Hatchlings/>}/>
            <Route path="/bydza-beardies/care-guide-and-more" element={<Actualities/>}/>
            <Route path="/bydza-beardies/contact" element={<Contact/>}/>
            <Route path="/bydza-beardies/amn" element={<Amn/>}/>
        </Routes>
        </div>
        <Footer></Footer>
 </Router>
 </>
 )   
}
export default App;
