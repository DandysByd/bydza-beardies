import React, { useState } from 'react'
import './Styles/navbar.css';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
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
                <NavLink onClick={closeMenu} className='contact-link' exact activeClassName='is-active' to="/contact">Contact</NavLink>
                <NavLink onClick={closeMenu} exact className='img-logo' activeClassName='is-active' to="/"><img className='logo-img' src={require('./images/logo/whole_logo_big.png')}></img></NavLink>
            </ul>

            <ul className={active ?'second-ul-non-active':'second-ul' }>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/breeders">Our Breeders</NavLink>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/dragons-for-sale">Dragons For Sale</NavLink>
                <NavLink onClick={closeMenu} className='nav-link' exact activeClassName='is-active' to="/care-guide-and-transport">Care Guide & Transport</NavLink>
                <NavLink onClick={closeMenu} className='nav-link contact-nav' exact activeClassName='is-active' to="/contact">Contact</NavLink>
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
        {/* <Routes>
            <Route exact path="/" element={<AboutUs/>}/>
            <Route exact path="/breeders" element={<Breeders/>}/>
            <Route exact path="/dragons-for-sale" element={<Hatchlings/>}/>
            <Route exact path="/care-guide-and-transport" element={<Actualities/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes> */}
        </div>
        <Footer></Footer>
 </Router>
 </>
 )   
}
export default App;
