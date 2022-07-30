import { Button, Card, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const AppartmentCard = ({appartment}) => {
    let {name, img, status, cost, prev_cost, area, rooms, baths} = appartment;
    return (
        <Card
            
            className={"ap-card"}
            >
            <div className="ap-card-img-section">
                <img
                    alt="Card image"
                    src="https://picsum.photos/300/200"
                />
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
                            <p className="ap-prev-cost">$ { prev_cost }</p>

                        }
                    </div>

                    <div className="ap-content-details-section">
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                            <span> { area } sqft </span>
                        </div>
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                            <span> { rooms } rooms </span>
                        </div>
                        <div className="ap-content-details-item">
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                            <span> {baths} baths </span>
                        </div>
                    </div>
                    
                </div>
            </CardBody>
        </Card>
    )
}

export default AppartmentCard;