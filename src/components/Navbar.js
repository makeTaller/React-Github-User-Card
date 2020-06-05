import React from "react";
import Navbar from "react-bootstrap/Navbar"

const Nav = (props) =>{

return(
    <Navbar>
        <Navbar.Brand href="#home">Welcome Friend!</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login"> {props.username}</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav;
