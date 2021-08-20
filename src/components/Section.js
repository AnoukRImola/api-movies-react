import React, { useState, useEffect } from 'react';
import Card from './Card';


const Section = () => {

    const [film, setFilm] = useState([]);
    console.log(film);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setFilm(data.results)});
    
    },[])

    const url= ["https://image.tmdb.org/t/p/original/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg", "https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg", "https://image.tmdb.org/t/p/original/acCS12FVUQ7blkC8qEbuXbsWEs2.jpg"]

    return ( 
        <div>
            <h1>Hola</h1>
            {film.map(item=> <Card title={item.original_title} url={item.url}/>)}

        </div>
     );
}
 
export default Section;