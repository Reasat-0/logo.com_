import CustomNav from "../CustomNavbar"

import { Container } from "reactstrap"
import MainSection from "../MainSection";

const Home = () => (
    <Container className="custom-container">
        <CustomNav/>
        <MainSection/>
    </Container>
)

export default Home;