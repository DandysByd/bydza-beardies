import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

function Fading_div(props) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='fading-div-wrapper'>
            <Link to={props.link}>
                <div data-aos={props.fadeside} className={'fading-div-' + props.side}>
                    <div className='image-wrapper'><img src={props.image} alt={props.alt}></img></div>
                    <div style={{ textDecoration: 'none' }} className='fading-div-text'>
                        <h1  className='slide-in-header'>{props.header}</h1>
                        <span>{props.text}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}
/* 704.4x500px */
export default Fading_div  