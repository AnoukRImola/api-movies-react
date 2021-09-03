import React from 'react';

import "../assets/css/style.css"
import SectionPopular from './SectionPopular';
import SectionProximas from './SectionProximas';


const SectionInicio = () => {


    return ( 
        <div className="section">
           
            <SectionPopular/>
            <h2>PROXIMAS</h2>
            <SectionProximas />
        </div>
        
     );
}
 
export default SectionInicio;