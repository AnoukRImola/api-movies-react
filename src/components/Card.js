import "./css/style.css";

const Card = (props) => {

    return ( 
        <div>
            <div className="card border-0" style={{width: "15rem"}}>
            <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top" alt="..." />
            <div className="card-body px-0">
                <h5 className="card-title text-white">{props.title}</h5>
                <p className="card-text text-info">{props.date}</p>
            </div>
        </div>
        </div>
     );
}
 
export default Card;