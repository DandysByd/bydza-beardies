import React from 'react';
import breeders_json from '../database/breeders_list';

function Breeder_card() {
    return(
        breeders_json.map(x => {
         return(
             <div className='breeder-card'>
                 <h2 className='name'>{x.name}</h2>
                 <h4 className='morph_sex'>{x.morph} - {x.sex}</h4>
                 <img width='60%' height='90%' src={x.image_path}></img>
             </div>
         )})
        )
}

export default Breeder_card;
