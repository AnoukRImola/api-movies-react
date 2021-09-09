import { StarFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Programas = (props) => {
    return (  
        <div className="card border-0" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/original" + props.urlP} className="card-img-top" alt="..." />
            <div className="card-body px-0">
              <Link to={"/programas/"+ props.id}><h5 className="card-title text-white">{props.titleP}</h5></Link>  
                <div className="row">
                    <div className="col-9">
                    <p className="card-text text-secondary m-0">{props.dateP}</p>
                    </div>
                    <div className="col-3">
                    <p className="card-text text-danger"><StarFill className="star"/> {props.ratingP}</p>  
                    </div>
                </div>          
            </div>
        </div>
    );
}
 
export default Programas;