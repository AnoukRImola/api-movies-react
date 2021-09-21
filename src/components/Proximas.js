
const Proximas = (props) => {
    return ( 
        <div>
            <div className="card border-0" style={{width: "8rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top" alt="..." />
            </div>
        </div>
     );
}
 
export default Proximas;