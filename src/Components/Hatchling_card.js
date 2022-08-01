import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact_Hatchling from './Contact_Hatchling';
import Mail_form from './Mail_form';
import dragons_for_sale from '../database/dragons_for_sale';

function Breeder_card() {


    
    /*
    const [dragons, setDragons] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8000/read').then((response)=>{
            setDragons(response.data)
        })
    }, [])
 */
    const [beardieId, setBeardieId] = useState(null)


    function setId(id) {
        setBeardieId(id)
        window.scrollTo(0,0)
        console.log(beardieId)
    }

    
    function resetId() {
        setBeardieId(null)
        window.scrollTo(0,0)
        console.log(beardieId)
    }

    if (dragons_for_sale.length ===0) {
        return(
            <div className='info-div'>
            <h3 className='information-text'>No offsprings yet. If you want to be informed about new baby dragons, insert your email below.</h3>
            <Mail_form></Mail_form>
            </div>
        )

    }else{
        return(
            <>
                 <div className='info-div'>
                 <h3 className='information-text'>Price you see is bounded to one dragon, price for delivery is <span className='visible'>NOT</span> included and will be added.</h3>
                 </div>
             <div className='dragons-for-sale-div'>
            {dragons_for_sale.map((x,key)=>{
                const result = x.birthday.toString().slice(0,-14)
                return(
                    beardieId === x.id ? (
                        dragons_for_sale.map((x,key)=>{
                            return(
                                beardieId===x.id?(
                            <div className='beardie-info-div'>
                            <div onClick={resetId} className='image-div-detail'>
                            <img className='bearded-dragon-image-detail' src={require(x.photo)} alt='idk'></img>
                            </div>
                                <div className='text-div-hatchlings'>
                            <h1>{x.indication} {x.sex} {x.morph}</h1>
                            <h3> ${x.price} + shipping</h3>
                            <span className='infor-text'>If you are interested in buying this bearded dragon, insert your email </span>
                            <Contact_Hatchling a={x.indication}></Contact_Hatchling>
                            </div>
                        </div>
                        )
                        :
                        <></>
                        )
                        })
                      
                    ):
             <div key={key} onClick={()=>setId(x.id)} className={beardieId === null ? 'single-dragon-card' : 'single-dragon-card-hiden'}>
                <img className='bearded-dragon-image' src={x.photo} alt='idk'></img>
                <h3 className='bearded-dragon-sex-morph'>{x.indication} {x.sex} {x.morph}</h3>
                <span className='bearded-dragon-price'>${x.price}</span>
                <br></br>
                <span className='bearded-dragon-birth'>Date of birth: {result}</span>
             </div>
         )
            })}

        </div>
        </>
        )
    }
}

export default Breeder_card;
