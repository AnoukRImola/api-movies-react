
const Personas = (props) => {
    return ( 
        <div>
            <div className="card border-0" style={{width: "15rem"}}>
                <img src={"https://image.tmdb.org/t/p/original" + props.urlPerson} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                    <h5 className="card-title text-white">{props.nombre}</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Personas;