import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PeliculaDetalle = () => {
    const {id} = useParams();
    const [peliculaDetalles, setPeliculaDetalles] = useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
        .then(response => response.json())
        .then(data =>  {setPeliculaDetalles(data)});
    },[]);    

    console.log(peliculaDetalles)

    return ( 
        <div className="container-fluid p-0 details">
            <div className="details-card">
                <div className="row fila">
                     <div className="col">
                     <img src={"https://image.tmdb.org/t/p/original" + peliculaDetalles.poster_path} className="card-img-top" alt="..." />
                     </div>
                     <div className="col">
                        <h1>{peliculaDetalles.title}</h1>
                     </div>
                </div>

            </div>
            
        </div>
     );
}
 
export default PeliculaDetalle;