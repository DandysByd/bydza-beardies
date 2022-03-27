import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact_Hatchling(props) {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_vxcpafc', form.current, 'obL2iK5wwxqBV1j9b')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return (
        <div className='contact-form-div contact-div'> 
      <form className='form-contacts' ref={form} onSubmit={sendEmail}>
          <div className='email-text'>
        <input type="email" required className='email-input' name="from_name" placeholder='Your e-mail'/>
        <input readonly type="text" className='indication-input' name="indication" value={props.a} placeholder='Your e-mail'/>
        </div>
        <textarea name="message" placeholder='Aditional text (optional)'/>
        <input className='submit' type="submit" value="I am interested in buying this bearded dragon" />
{/*         <p name='indication'>{props.a}</p> */}
      </form>
      </div>
    );

  
}

export default Contact_Hatchling