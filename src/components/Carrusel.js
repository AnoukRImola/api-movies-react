import {Carousel} from 'react-bootstrap';

const Carrusel = (props) => {

     const{imagenCarrusel} = props;
     console.log(props);

    return ( 
        <Carousel style={{height: "40rem"}} fade>
        <Carousel.Item>
             
                <img
                className="d-block w-100"
                style={{height: "40rem"}}
                src={"https://image.tmdb.org/t/p/original/7WJjFviFBffEJvkAms4uWwbcVUk.jpg"}
                alt="First slide"
            />
           
            
            {/* <Carousel.Caption>
                <h3 className="text-white">First slide label</h3>
                <p>blabla.</p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                style={{height: "40rem"}}
                src={"https://image.tmdb.org/t/p/original/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg"}
                alt="Second slide"
            />
            {/* <Carousel.Caption>
                <h3 className="text-white">Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                style={{height: "40rem"}}
                src={"https://image.tmdb.org/t/p/original/kcvKEvTWqIGMjpVJdbDVRHdIt4C.jpg"}
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>vvv</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
     );
}
 
export default Carrusel;