import React, { useState, useEffect } from 'react';
import Personas from '../components/Personas';


const SectionPersonas = () => {

    const [people, setPeople] = useState([]);
    console.log(people);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/person/popular?api_key=d6090b4ce2a41ad46da7767f56682434')
        .then(response => response.json())
        .then(data =>  {setPeople(data.results)});
    
    },[])

    
    return ( 
        <div className="section">
          {people.map(item=> <Personas nombre={item.name} urlPerson={item.profile_path} /> )}     
        </div>
     );
}
 
export default SectionPersonas;