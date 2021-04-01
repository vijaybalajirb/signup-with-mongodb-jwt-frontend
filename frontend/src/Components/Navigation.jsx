import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap"
import "../App.css"

const Navigation = () => {

return(
    
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Signup with forgot password</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto ">
    <Link className="mr-5 mt-2 nav-links" to="/login">
            <h5>Login</h5>
          </Link>
    <Link className="mr-5 mt-2 nav-links" to="/register">
        <h5>Register</h5>
</Link>
    

    </Nav>
    
   
  </Navbar.Collapse>
</Navbar>
  

)
}
export default Navigation;