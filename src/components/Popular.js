
const Popular = (props) => {
    return ( 
        <div>
            <div className="card border-0 scroll" style={{width: "8rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top item" alt="..." />
            </div>
        </div>
     );
}
 
export default Popular;