import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

import Navbar from "../components/globals/navbar/Navbar";

// import "./bootstrap.min.css";
// import "./layout.css";
// import "../sass/layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Assistant');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Assistant', sans-serif;
    color: balck;
    background: #fff;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
