import React, { useState, useEffect } from 'react';
import PeliCalificacion from '../components/PeliCalificacion';


const SectionPeliCalificacion = () => {

    const [mejorCalificacion, setmejorCalificacion] = useState([]);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  {setmejorCalificacion(data.results)});

    },[])
    return ( 
        <div className="section-scroll">
            <div className="scroll-container">
            {mejorCalificacion.map(item=> <PeliCalificacion  url={item.poster_path} />)};
            </div>
        </div>
     );
}
 
export default SectionPeliCalificacion;