import React from 'react'
import Basic_info from '../Components/AboutUS/Basic_info';
import Fotogallery from '../Components/Photogallery/Fotogallery';
import Logo from '../Components/AboutUS/Logo';
import Socials from '../Components/AboutUS/Socials';
import '../Styles/aboutUs.css'
import Map from '../Components/Contact/Map'
import Container_slides from '../Components/AboutUS/Container_slides';

function AboutUs() {

    return (
        <>
            <div className='main-divs'>
                <div className='left-div'>
                    <Basic_info></Basic_info>
                </div>
                <div className='right-div'>
                    <Fotogallery></Fotogallery>
                </div>
            </div>
            <Container_slides></Container_slides>
        </>
    )
}
export default AboutUs;