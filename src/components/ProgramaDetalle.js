import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProgramaDetalle = () => {
    const {id} = useParams();
    const [programaDetalles, setProgramaDetalles] = useState({});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d6090b4ce2a41ad46da7767f56682434`)
        .then(response => response.json())
        .then(data =>  {setProgramaDetalles(data)});
    },[]);    

    console.log(programaDetalles)
    
    return ( 
        <div className="container-fluid p-0 details">
            <div className="details-card">
                <div className="row fila">
                     <div className="col">
                     <img src={"https://image.tmdb.org/t/p/original" + programaDetalles.poster_path} className="card-img-top" alt="..." />
                     </div>
                     <div className="col">
                        <h1>{programaDetalles.name}</h1>
                        <p>Temporadas: {programaDetalles.number_of_seasons} </p>
                        <p>Episodios: {programaDetalles.number_of_episodes} </p>
                        <p>{programaDetalles.overview} </p>
                     </div>
                </div>

            </div>
            
        </div>
     );
}

export default ProgramaDetalle;
