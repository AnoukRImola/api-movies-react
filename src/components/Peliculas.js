import { Link} from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';
import { BsHeartFill } from 'react-icons/bs';

const Card = (props) => {

    return ( 
        <div>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                   <Link to={"/peliculas/"+props.id}><h5 className="card-title text-white">{props.title}</h5></Link> 
                    <div className="row">
                        <div>
                            <p className="card-text text-secondary pl-3">{props.date}</p>
                        </div>
                    </div>

                    <div className="row">
                       <div className="col-10">
                            <p className="card-text text-info"><StarFill className="star"/> {props.rating}</p>
                       </div>  
                       <div className="col-2">
                                <Link className="text-danger">
                                <BsHeartFill />
                                </Link>
                       </div>
                    </div>           
                </div>
            </div>
        </div>
     );
}
 
export default Card;