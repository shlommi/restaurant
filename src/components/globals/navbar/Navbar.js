import React, { Component } from "react";
import styled from "styled-components";

import NavbarHeader from "./NavbarHeader";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

export default class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  handleNavbar = () => {
    console.log("handleNavbar clicked");
    this.setState(() => {
      return {
        navbarOpen: !this.state.navbarOpen
      };
    });
  };

  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarIcons />
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  direction: rtl;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
