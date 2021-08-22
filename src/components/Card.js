

const Card = (props) => {

    return ( 
        <div>
            <div className="card" style={{width: "18rem"}}>
        <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"></p>
            <a href="1" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
     );
}
 
export default Card;