import React, { Component } from "react";
import { 
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  
} from "reactstrap";


export default class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.State.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar style={{backgroundColor:"green"}}expand="sm">
          <NavbarBrand style={{color:"white",fontWeight:"bolder",fontSize:"40px"}} href="/">Gardening.com</NavbarBrand>
          <Nav className="ml-auto">
          <NavItem >
              <NavLink href="/" style={{color:"white"}}>Home</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/Blog" style={{color:"white"}}>Blog</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/About" style={{color:"white"}}>About Us</NavLink>
            </NavItem>
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle style={{color:"white"}} nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Flowers</DropdownItem>
                <DropdownItem>Fruits</DropdownItem>
                <DropdownItem>Vegetables</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem >
              <NavLink href="/Registration" style={{color:"white"}}>Sign Up</NavLink>
            </NavItem>          
          </Nav>
        </Navbar>
      </div>
    );
  }
}
