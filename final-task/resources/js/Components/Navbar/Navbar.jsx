import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import Button from 'react-bootstrap/Button';

function NavbarComp(props) {
    return (
        <Navbar expand="lg" className="bg-body-light">
            <Container>
                <Navbar.Brand href="#home"><img src={props.logo} alt="" srcset="" id='logo-qwords' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ln">
                        <Nav.Link href="#home" >Cloud Hosting</Nav.Link>
                        <Nav.Link href="#link" >Server</Nav.Link>
                        <Nav.Link href="#home"  >Domain</Nav.Link>
                        <Nav.Link href="#link" >Email Suite</Nav.Link>
                        <Nav.Link href="#home" >Services</Nav.Link>
                        <Nav.Link href="#link">Internet Access</Nav.Link>
                        <Nav.Link href="#home" >Promo</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Button variant="outline-warning" className='ms-auto'>Log In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComp;