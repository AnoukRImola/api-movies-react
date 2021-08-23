import React, { useState, useEffect } from 'react';
import Card from './Card';
import "./css/style.css";


const Section = () => {

    const [film, setFilm] = useState([]);
    console.log(film);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setFilm(data.results)});
    
    },[])


    return ( 
        <div className="section">
            {film.map(item=> <Card title={item.original_title} url={item.poster_path} date={item.release_date}/>)}
        </div>
     );
}
 
export default Section;