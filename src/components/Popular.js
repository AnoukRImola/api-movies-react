
const Popular = (props) => {
    return ( 
        <div>
            <div className="card border-0 scroll-item" style={{width: "10rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top border-0" alt="..." />
                <div className="card-body px-0 py-2">
                <h5 className="card-title text-white">{props.title}</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Popular;