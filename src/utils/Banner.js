import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    ${styles.letterSpacing({ spacing: "0.5rem" })}
  }

  .subtitle {
    font-size: 2rem;
    ${styles.letterSpacing({ spacing: "0.6rem" })};
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted}
  }
`;

Banner.defaultProps = {
  title: "default title"
};
