import React from "react";
import styled from "styled-components";
import img from "../images/bcg/homeBcg.jpg";

function HomeHeader({ img, children }) {
  return <BaseHeader img={img}>{children}</BaseHeader>;
}
function PageHeader({ img, children }) {
  return <DefaultHeader img={img}>{children}</DefaultHeader>;
}

const BaseHeader = styled.header`
  min-height: calc(100vh - 128.8px);
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
`;

const DefaultHeader = styled(BaseHeader)`
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${props => props.img}) center/cover fixed no-repeat;
`;

HomeHeader.defaultProps = {
  img: img
};
PageHeader.defaultProps = {
  img: img
};

export { HomeHeader, PageHeader };
