import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Logo from './Logo';
import Fading_div from './Fading_div';

Aos.init({disable: 'mobile'});

function Container_slides() {


    return (
        <>
            <Fading_div
                fadeside='fade-right'
                side='left'
                header='Take a look at our breeders'
                text='Currently we own 2 bearded dragons that are not for sale. They provide us both, very good company and opportunity to look at the world of domesticaded lizards in completely new angle via small beardies.'
                image={require('../../images/Breeders/Chilli_brumation.jpg')}
                alt='Chilli'
                link='../../breeders'
            >
            </Fading_div>
            <Fading_div
                fadeside='fade-left'
                side='right'
                header='Looking for a new friend?'
                text='Everytime new beardies are born, we take photos of them and recognize genetics. Then we provide all of theese informations in this tab so our customers can clearly see, who are they buying.'
                image={require('../../images/Breeders/babybeardeddragon.jpg')}
                alt='Saab'
                link='../../dragons-for-sale'
            >
            </Fading_div>
            <Fading_div
                fadeside='fade-right'
                side='left'
                header='Ideal conditions and delivery information'
                text="Let's take a look at ideal conditions which you, as a keeper, need to provide for your beardie to let him/her prosper. Here you can also read about the journey that your new bearded dragon has to walk through to get to his new enclousure in his new home."
                image={require('../../images/Gallery/terariums.jpg')}
                alt='Chilli'
                link='../../care-guide-and-transport'
            >
            </Fading_div>
        </>
    )
}

export default Container_slides