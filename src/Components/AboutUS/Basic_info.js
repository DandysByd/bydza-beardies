import React from 'react'

function Basic_info() {
  return (
    <div className='basic-info'>
        <div className='article'>
          <h2 className='who-are-we-header'>Who are we</h2>
               <h5 className='basic-info-text'>
               We are loving keepers of bearded dragons, who began keeping beardies in early 2021 and right after absolutly fell in love with theese cute animals.
           </h5>
               <h5 className='basic-info-text'>
               Our passion grew over and I wanted to start breeding our first two beardies, which should produce new hypo zeros. 
               </h5>

               <h5 className='basic-info-text'>
               This website was created for both, showing off our new dragons and giving customers opportunity to buy a new friend.
               </h5>

               <h5 className='basic-info-text'>
               If u wish to stay updated on news from our company, make sure to follow us on our <a target='_blank' href='https://instagram.com/mr.bydza/'>Instagram</a>.
               </h5>
              <img className='basic-info-logo' src={require('../../images/logo/small_logo.png')}></img>
        </div>
    </div>
  )
}

export default Basic_info