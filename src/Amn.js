import { render } from '@testing-library/react';
import './Styles/admin.css'
import React, { useEffect, useState } from "react";
import Axios from 'axios'

function Amn() {

  const [morph, setMorph] = useState('')
  const [price, setPrice] = useState(0)
  const [birthday, setBirthday] = useState('')
  const [sex, setSex] = useState('')
  const [indication, setIndication] = useState('')
  const [photo, setPhoto] = useState('')

  const addToList = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:8000/insert', {morph:morph,price:price,birthday:birthday,sex:sex, indication:indication})
  }
  

  return (
    <div className='main-div'>

    <div className='whole-div'>
      <div className='form-div'>
        <form  method="post">

            <input onChange={(event) => {setIndication(event.target.value)}} name='indication' type='text' placeholder='indication'></input>
            <input onChange={(event) => {setMorph(event.target.value)}} name='morph' type='text' placeholder='morph'></input>
            <input onChange={(event) => {setPrice(event.target.value)}}  name='price'  type='number' placeholder='price'></input>
            <input onChange={(event) => {setSex(event.target.value)}} name='sex' type='text' placeholder='sex'></input>
            <input onChange={(event) => {setBirthday(event.target.value)}} name='birthday' type='date' placeholder='birthday'></input>
         {/*    <input onChange={(event) => {setPhoto(event.target.value)}} value='Upload' name='photo' type='file'></input> */}

            <button onClick={addToList}>Submit</button>
        </form>
      </div>
    </div>  
    </div>
  )
}

export default Amn