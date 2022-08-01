import React from 'react'
import Single_media from './AboutUS/Single_media'
import Socials from './AboutUS/Socials'
import '../Styles/footer.css'

function Footer() {

  var currentYear = new Date().getFullYear();
 
  return (
    <div className='footer-div'>
            <Socials></Socials>
          <div className='copyright'>
            <h1>© {currentYear} Bydza Beardies, All rights reserved</h1>
            <h4>This site was created by Daniel Bydžovský - owner of BydzaBeardies</h4>
          </div>
    </div>
  )
}

export default Footer