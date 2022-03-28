import React from 'react'
import { useState } from 'react/cjs/react.development'
import Single_media from './Single_media'

function Socials() {

  const [clickes, setClickes] = useState(false)
  
  function click() {
    setClicked(!clickes);
    console.log(clickes)
  }


  return (
    <div className='socials-div'>
            <Single_media a='facebook_bw' b='https://www.facebook.com/groups/1278774522645944' d='media-img'></Single_media>
            <Single_media a='instagram_bw' b='https://www.instagram.com/bydza_beardies/' d='media-img'></Single_media>
            <Single_media e='whatsaaap' a={clickes ? 'whatsapp_bw_number' : 'whatsapp_bw'} c={click} d={clickes ? 'media-img-number' : 'media-img'}></Single_media>
            <Single_media a='twitter_bw' b='https://twitter.com/' d='media-img'></Single_media>
            <Single_media a='youtube_bw' b='https://youtube.com/' d='media-img'></Single_media>
    </div>
  )
}

export default Socials