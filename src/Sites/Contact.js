import React from 'react';
import Contact_type from '../Components/Contact/Contact_type';
import Map from '../Components/Contact/Map';
import Social_media from '../Components/Contact/Social_media';
import Mail_form from '../Components/Mail_form';
import '../Styles/contact.css'

function Contact() {
  return (
    <>
  <div id='main'>
    <div className='contacts'>
      <Contact_type type='Where to find us' a='Železničního pluku 2189' b='Pardubice 530 02' c='Czech republic'/>
      <Contact_type type='Contacts' a='bydzak@gmail.com' b='+420 773 608 263'></Contact_type>
    </div>
    <div className='contact-form'>
      <h3>Have question? Contact us</h3>
    <Mail_form></Mail_form>
    </div>
    </div>
       <div className='map-container'>
    <Map></Map>
    </div>
    </>
  )
}

export default Contact;
