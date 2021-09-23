import React from 'react';
import Carrusel from '../components/Carrusel';
import "../assets/css/style.css"
import SectionPopular from './SectionPopular';
import SectionProximas from './SectionProximas';


const Home = () => {


    return ( 
        <div>
            <Carrusel/>
            <SectionProximas />
            <SectionPopular/>
        </div>
     );
}
 
export default Home;