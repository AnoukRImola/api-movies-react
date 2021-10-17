import React, { useState, useEffect } from 'react';


const Carrusel = (props) => {

    const [imagenCarrusel, setImagenCarrusel] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  setImagenCarrusel(data.results));
    
    },[])

    console.log(imagenCarrusel);
    return ( 
        <div className="carrusel">
            <div id="carouselExampleCaptions" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {imagenCarrusel.map((item,index)=>
                    index ===0?
                    <div className="carousel-item active">
                        <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path} className="d-block w-100" alt="..." />
                    </div>:
                    <div className="carousel-item">
                        <img src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}  className="d-block w-100" alt="..." />
                    </div>)}
                </div> 
            
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </div>
      
     );
}
 
export default Carrusel;