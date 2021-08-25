import { StarFill } from 'react-bootstrap-icons';

const Programas = (props) => {
    return (  
        <div className="card border-0" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/original" + props.urlP} className="card-img-top" alt="..." />
            <div className="card-body px-0">
                <h5 className="card-title text-white">{props.titleP}</h5>
                <div className="row">
                    <div className="col-9">
                    <p className="card-text text-info m-0">{props.dateP}</p>
                    </div>
                    <div className="col-3">
                    <p className="card-text text-warning"><StarFill className="star"/> {props.ratingP}</p>  
                    </div>
                </div>          
            </div>
        </div>
    );
}
 
export default Programas;