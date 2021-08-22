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


    return ( 
        <div>
            <h1>Hola</h1>
            {film.map(item=> <Card title={item.original_title} url={item.backdrop_path}/>)}

        </div>
     );
}
 
export default Section;