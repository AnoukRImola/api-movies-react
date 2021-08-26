import avengers from "./img/avengers.jpg";
import ca from "./img/ca.jpg";
import xmen from "./img/xmen.jpg";


const Inicio = () => {
    return ( 
        
         <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={avengers} className=" w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                   
                    
                </div>
            </div>
            <div classNameName="carousel-item">
                <img src={ca} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                   
                    
                </div>
            </div>
            <div className="carousel-item">
                <img src={xmen} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                   
                    
                </div>
             </div>
            </div> 
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
         </div>
        
     );
}
 
export default Inicio;