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
        <div classNameName="container p-0 mt-5" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div className="card mb-3 bg-transparent" style={{maxWidth: "78vw"}} >
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={"https://image.tmdb.org/t/p/original" + peliculaDetalles.poster_path} className="card-img-top" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                          <h1>{peliculaDetalles.title}</h1>
                          <p>{peliculaDetalles.overview} </p>
                          <p>{peliculaDetalles.original_language} </p>
                          <p>{peliculaDetalles.release_date} </p>
                          <p>{peliculaDetalles.runtime} </p>
                        </div>
                    </div>
               </div>
            </div>
            
        </div>
     );
}
 
export default PeliculaDetalle;