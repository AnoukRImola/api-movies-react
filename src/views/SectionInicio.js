import React, { useState, useEffect } from 'react';
import Inicio from '../components/Inicio';
import "../assets/css/style.css"


const SectionInicio = () => {

    const [carrusel, setCarrusel] = useState([]);
    console.log(carrusel);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setCarrusel(data.results)});
    
    },[])

    return ( 
        <div className="section">
            <Inicio carrusel={carrusel} />;
        </div>
     );
}
 
export default SectionInicio;