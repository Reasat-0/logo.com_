
import { useEffect, useState } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from "reactstrap"
import logoImg from '../../assets/image/logo.png'
// import SmoothScrolling from "../../utils/smooth_scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CustomNav = () => {

    const [navbar_color,setNavbarColor] = useState('transparent')
    const [active_nav,setActiveNav] = useState(null)
    const [navbarToggleOpen,setNavbarToggleOpen] = useState(false)

    useEffect( () => {
        window.addEventListener("scroll", changeNavbarColor)
    })

    const toggle = () => {
        setNavbarToggleOpen((prev) => !prev)
    }


    const changeNavbarColor = () => {
        if( document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
            setNavbarColor('colored')
        }
        else{
            setNavbarColor('transparent')
        }
    }

    // const onNavClick = (active_nav) => {
    //     setActiveNav(active_nav)
    //     scrollUp(active_nav)
    // }

    // const scrollUp = (id) => {
    //     SmoothScrolling.scrollTo(id);
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }
    return (
        <>
            <Navbar
                className={`custom-navbar ${navbar_color} ${navbarToggleOpen ? 'toggle-opened' : ""}`}
                onClick={changeNavbarColor}
                // color="light" 
                light 
                expand="md"
            >
                {/* <div className="custom-nav-container"> */}
                    <NavbarBrand className="logo-section">
                      <img src={logoImg} alt="logo"/>
                    </NavbarBrand>

                    <NavbarToggler onClick={toggle} className="custom-nav-toggler"/>
                    <Collapse isOpen={navbarToggleOpen} navbar className="custom-nav-collapse">
                        <Nav
                            navbar
                            className="custom-nav-item-container"
                        >
                            <NavItem className={ active_nav === null ? 'active' : ""}>
                                <NavLink href="/" >
                                    Home
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'properties' ? 'active' : ""}>
                                <NavLink>
                                    Properties
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'agent' ? 'active' : ""}>
                                <NavLink>
                                    Agent
                                </NavLink>
                            </NavItem>

                            <NavItem className={ active_nav === 'blog' ? 'active' : ""}>
                                <NavLink>
                                    Blog
                                </NavLink>
                            </NavItem>

                            <NavItem className="log-in-nav-item">
                                <NavLink>
                                    Log In
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className="static-hamburger-menu">
                            <FontAwesomeIcon icon="bars" />
                        </div>
                        
                        
                    </Collapse>

                {/* </div> */}
            </Navbar>

            
        </>
    )
}


export default CustomNav