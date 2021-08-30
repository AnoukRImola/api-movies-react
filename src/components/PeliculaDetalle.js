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
        <div className="jumbotron">
  <h1 className="display-4">{peliculaDetalles.title}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
</div>
     );
}
 
export default PeliculaDetalle;