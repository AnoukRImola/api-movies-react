import React from 'react';

import "../assets/css/style.css"
import SectionPopular from './SectionPopular';
import SectionProximas from './SectionProximas';


const Home = () => {


    return ( 
        <div className="section">
            <h2 className="h1 text-white">Próximas</h2>
            <SectionProximas />
            <h2 className="h1 text-white">Populares</h2>
            <SectionPopular/>
            
            
        </div>
        
     );
}
 
export default Home;