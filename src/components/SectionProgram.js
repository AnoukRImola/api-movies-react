import React, { useState, useEffect } from 'react';
import Programas from './Programas';

const SectionProgram = () => {

    const [programa, setPrograma] = useState([]);
    console.log(programa);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data => {setPrograma(data.results)});
    },[])

    return ( 
        <div className="section">
            {programa.map(item=> <Programas titleP={item.original_name} urlP={item.poster_path} dateP={item.first_air_date} ratingP={item.vote_average} /> )}
        </div>    
     );
}
 
export default SectionProgram;