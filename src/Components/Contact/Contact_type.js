import React from 'react'

function Contact_type(props) {
  return (
    <ul className='contact-card'>
        <li className='contact-type'>{props.type}</li>
        <li className='a'>{props.a}</li>
        <li className='b'>{props.b}</li>
        <li className='c'>{props.c}</li>
        <li className='d'>{props.d}</li>
    </ul>
  )
}

export default Contact_type