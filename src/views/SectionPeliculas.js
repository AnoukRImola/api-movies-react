import React, { useState, useEffect } from 'react';
import Card from '../components/Peliculas';
import "../assets/css/style.css"

const SectionPeliculas = () => {

    const [film, setFilm] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setFilm(data.results)});

    },[])
    console.log(film);
    
    return ( 
        <div className="section">
            {film.map(item=> <Card title={item.original_title} url={item.poster_path} date={item.release_date} rating={item.vote_average} id={item.id}/>)};
        </div>
     );
}
 
export default SectionPeliculas;