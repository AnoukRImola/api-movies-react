import React, { useState, useEffect } from 'react';
import Popular from '../components/Popular';



const SectionPopular = () => {

    const [popular, setPopular] = useState([]);
    console.log(popular);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  {setPopular(data.results)});
    
    },[])

    return ( 
        <div className="section-scroll">
            <h2>Populares</h2>
        <div className="scroll-container">
            {popular.map(item=> <Popular title={item.title} url={item.poster_path}/>)};
        </div>
        </div>
     );
}
 
export default SectionPopular;