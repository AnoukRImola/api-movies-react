import React, { useState, useEffect } from 'react';
// import {Carousel} from 'react-bootstrap';

const Carrusel = (props) => {

    const [imagenCarrusel, setImagenCarrusel] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setImagenCarrusel(data.results)});
    
    },[])

    console.log(imagenCarrusel);
    return ( 
        <div>
            <h1>{imagenCarrusel.title} </h1>
            <h1>{imagenCarrusel.title} </h1>
            {/* <h1>{imagenCarrusel[0].title} </h1> */}
        <p>jdjdjdjdjdjdjdjdjdsdjshsofhsdsdsjdjhhdhjsjghfjshdfhsdjkweidjsdji</p>
      </div>
     );
}
 
export default Carrusel;