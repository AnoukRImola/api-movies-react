
const Proximas = (props) => {
    return ( 
        <div className="section-scroll">
            <div className="scroll-container">
              <div className="border-0">
                <div className="card border-0 scroll-item" style={{width: "10rem"}}>
                    <img src={"https://image.tmdb.org/t/p/original" + props.url} className="card-img-top border-0" alt="..." />
                </div>
            </div>      
           </div>
        </div>
     );
}
 
export default Proximas;