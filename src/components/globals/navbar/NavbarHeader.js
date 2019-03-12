import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../../images/logo.png";
import { FaAlignLeft } from "react-icons/fa";
import styled from "styled-components";
import { styles } from "../../../utils";

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <img src={logo} alt="company logo" className="company-logo" />
        </Link>
        <FaAlignLeft
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: start;
  justify-content: space-between;

  a img {
    width: 100px;
    height: 100px;
    margin-top: -0.5rem;
    margin-right: -1rem;
  }

  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
