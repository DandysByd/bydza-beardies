import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Mail_form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_68cxd4n', form.current, 'obL2iK5wwxqBV1j9b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
      <div className='contact-form-div'> 
    <form className='form-contacts' ref={form} onSubmit={sendEmail}>
      <input type="email" required name="from_name" placeholder='e-mail'/>
      <textarea name="message" required placeholder='text message'/>
      <input className='submit' type="submit" value="Send" name='message' />
    </form>
    </div>
  );
};

export default Mail_form;     