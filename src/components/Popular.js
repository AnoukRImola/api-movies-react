
const Popular = (props) => {
    return ( 
        <div>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                   <h5 className="card-title text-white">{props.title}</h5>
                    <div className="row">
                        <div className="col-9">
                        <p className="card-text text-secondary m-0">{props.date}</p>
                        </div>
                        <div className="col-3">
                         
                        </div>
                     </div>           
                </div>
            </div>
        </div>
     );
}
 
export default Popular;