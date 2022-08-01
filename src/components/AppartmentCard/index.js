import { Button, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appartmentImg from '../../assets/image/app.png'
import Slider from "react-slick";
const AppartmentCard = ({appartment}) => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    let {name, img, status, cost, prev_cost, area, rooms, baths } = appartment;
    console.log(appartment)
    return (
        <Card
            
            className={"ap-card"}
            >
            <div className="ap-card-img-section">
                
                            {/* <img
                                alt={'item'}
                                src={appartmentImg}
                            /> */}
                <Slider {...settings} className="ap-img-slider">
                    {
                        img.map( (item, i) => (
                            <img
                                alt={name}
                                src={item}
                            />
                        ))
                    }
                </Slider>   

                
                <div className="ap-card-img-icon">
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                </div>
            </div>
            <CardBody>
                <div className="ap-card-content-section">
                    <h3 className="ap-content-name">
                        {name}
                    </h3>
                    <div className="ap-content-btn-section">
                        <a href="#" className="ap-status-btn"> For {status} </a>
                        <p className="ap-cost">$ { cost }</p>
                        {
                            prev_cost && 
                            <p className="ap-prev-cost"> $ { prev_cost } </p>

                        }
                    </div>

                    <div className="ap-content-details-section">
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                            <span> { area } sqft </span>
                        </div>
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-solid fa-bed" />
                            <span> { rooms } rooms </span>
                        </div>
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-solid fa-shower" />
                            <span> {baths} baths </span>
                        </div>
                    </div>
                    
                </div>
            </CardBody>
        </Card>
    )
}

export default AppartmentCard;