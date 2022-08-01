import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "reactstrap";
import AppartmentCard from "../AppartmentCard";
import Slider from "react-slick";

import appartmentImg from '../../assets/image/app.png'
import appartmentImg1 from '../../assets/image/app1.png'
import appartmentImg2 from '../../assets/image/app2.png'
import appartmentImg3 from '../../assets/image/app3.png'
import appartmentImg4 from '../../assets/image/app4.png'

const MainSection = () => {
    
    const appartments = [

        { img: [appartmentImg, appartmentImg1, appartmentImg3] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg1, appartmentImg4, appartmentImg2] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: '34,322' , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg2, appartmentImg1, appartmentImg4] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg3, appartmentImg2, appartmentImg1] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg4, appartmentImg2, appartmentImg3] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg2, appartmentImg1, appartmentImg3] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' },
        { img: [appartmentImg2, appartmentImg1, appartmentImg3] , name : '5300 Lakeside, Newyork', status: 'Buy', cost: '14,500', prev_cost: null , area: '1600', rooms: '2', baths: '2' }


    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                  slidesToShow: 6
                }
            },
            {
                breakpoint: 2599,
                settings: {
                  slidesToShow: 5
                }
            },
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 520,
                settings: {
                  slidesToShow: 1
                }
              }
          ]
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
                </Slider>
                <div className="horizontal-bar mx-auto mt-5 mb-3 px-2">

                </div>
            </div>

        </section>
    )
}

export default MainSection;