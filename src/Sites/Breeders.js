import React from 'react';
import { Link } from 'react-router-dom';
import Breeder_card from '../Components/Breeder_card';
import '../Styles/breeders.css'


function Breeders() {
  return (  
    <>
    <h3 id='info'>Theese are our future parents, their offsprings can be seen in<Link className='dragons-for-sale-redirect' to="/dragons-for-sale"> Dragons For Sale </Link>card.</h3>
        
      <div id='main'>
        <Breeder_card/>
      </div>
      </>
    
  )
  
}

export default Breeders;
