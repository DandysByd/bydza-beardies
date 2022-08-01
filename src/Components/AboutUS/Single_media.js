import React from 'react'

function Single_media(props) {
  return (
    <div className='outer-media-div'>
        <a href={props.b} target="_blank">
          <div className='div-media-img'>
          <img className={props.d} id={props.e} onMouseEnter={props.c} onMouseLeave={props.c} src={require('../../images/Icons/' + props.a+'.png')} alt={props.a+'logo'}></img>
          </div>
          </a>
    </div>
  )
}

export default Single_media