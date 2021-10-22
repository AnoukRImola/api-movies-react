import React, { useState, useEffect } from 'react';
import Proximas from '../components/Proximas';

const SectionProximas = () => {

    const [proximas, setProximas] = useState([]);
    console.log(proximas);

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d6090b4ce2a41ad46da7767f56682434&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  {setProximas(data.results)});
    
    },[])

    return ( 
        <div className="section-scroll">
            <div className="scroll-container">
                 {proximas.map(item=> <Proximas title={item.title} url={item.poster_path}/>)};
            </div>
        </div>
     );
}
 
export default SectionProximas;