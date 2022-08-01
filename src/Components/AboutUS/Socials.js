import React from 'react'
import { useState } from 'react'
import Single_media from './Single_media'

function Socials() {

  const [clicked, setClicked] = useState(false)
  
  function click() {
    setClicked(!clicked);
    console.log(clicked)
  }


  return (
    <div className='socials-div'>
            <Single_media a='facebook_bw' b='https://www.facebook.com/groups/1278774522645944' d='media-img'></Single_media>
            <Single_media a='instagram_bw' b='https://www.instagram.com/bydza_beardies/' d='media-img'></Single_media>
            <Single_media e='whatsaaap' a={clicked ? 'whatsapp_bw_number' : 'whatsapp_bw'} c={click} d={clicked ? 'media-img-number' : 'media-img'}></Single_media>
            <Single_media a='twitter_bw' b='https://twitter.com/' d='media-img'></Single_media>
            <Single_media a='youtube_bw' b='https://youtube.com/' d='media-img'></Single_media>
    </div>
  )
}

export default Socials