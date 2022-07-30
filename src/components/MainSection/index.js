import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "reactstrap";
import AppartmentCard from "../AppartmentCard";
import Slider from "react-slick";
const MainSection = () => {
    
    const appartments = [

        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: '34,322' , area: '1600', rooms: '2', baths: '2' },
        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: '' , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' }


    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };


    return (



        <section className="main-section">
            <div className="section-heading-wrapper">
                <h5 className="section-heading">All Appartments</h5>
                <div className="section-heading-link">
                    <a href="#" >Show All <FontAwesomeIcon icon="fa-angle-right" /></a>
                </div>
            </div>

            <div className="section-content-wrapper">
                <Slider {...settings} className="ap-slider">
                    {
                        appartments.map( (item, i) => (
                            <AppartmentCard appartment={item} key={i}/>
                        ))
                    }
                    {/* <Row>
                        {
                            appartments.map( (item, i) => (

                                <Col className="col-1 col-sm-2 col-md-3 col-lg-3" key={i}>
                                    
                                </Col>
                                
                            ))
                        }

                    </Row> */}

                </Slider>
            </div>
        </section>
    )
}

export default MainSection;