import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { styles } from "../../../utils";

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "בית"
      },
      {
        id: 1,
        path: "/about",
        name: "אודות"
      },
      {
        id: 2,
        path: "/menu",
        name: "תפריט"
      },
      {
        id: 3,
        path: "/contact",
        name: "צור קשר"
      }
    ]
  };

  render() {
    const { links } = this.state;
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </LinkWrapper>
    );
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    font-size: 1.2rem;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1.5rem 0.5rem 1rem;
    }
  }
  height: ${props => (props.open ? "170px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "0.5s" })};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;

    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`;
