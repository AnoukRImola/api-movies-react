import React from 'react';
import Carrusel from '../components/Carrusel';
import "../assets/css/style.css"
import SectionPopular from './SectionPopular';
import SectionProximas from './SectionProximas';


const Home = () => {


    return ( 
        <div>
            <Carrusel/>
        <div classNameName="section">
            <h2 classNameName="h1 text-white">Próximas</h2>
            <SectionProximas />
            <h2 classNameName="h1 text-white">Populares</h2>
            <SectionPopular/>
        </div>
        </div>
     );
}
 
export default Home;