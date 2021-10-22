import React from 'react';
import Carrusel from '../components/Carrusel';
import "../assets/css/style.css"
import SectionPopular from './SectionPopular';
import SectionProximas from './SectionProximas';
import SectionPeliCalificacion from './SectionPeliCalificacion';


const Home = () => {


    return ( 
        <div>   
            <Carrusel />
            <div className="home">
            <h1>Mejor Calificación</h1>  
            <SectionPeliCalificacion />
            <h1>Próximas</h1>
            <SectionProximas />
            <h1>Populares</h1>
            <SectionPopular />
            </div>
       </div>
     );
}
 
export default Home;