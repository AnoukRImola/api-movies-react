// import React, { useState, useEffect } from 'react';
// import Carrusel from "./Carrusel";

// const SectionCarrusel = () => {

//     const [imagenCarrusel, setImagenCarrusel] = useState([]);

//     useEffect(()=>{
//         fetch('https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
//         .then(response => response.json())
//         .then(data =>  {setImagenCarrusel(data.results)});
    
//     },[])

//     return ( 
//         <div>
//             <Carrusel imagenCarrusel={imagenCarrusel}/>
//         </div>
//      );
// }
 
// export default SectionCarrusel;