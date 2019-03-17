import React from "react";
import styled from "styled-components";
import { styles } from "../utils";

export function Title({ title, message }) {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1>{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  );
}

Title.defaultProps = {
  message: "ההודעה שלנו",
  title: "הכותרת שלנו"
};

const TitleWrapper = styled.div`
  text-align: center;

  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing("0.3rem")};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }

  .title {
    ${styles.letterSpacing("0.3rem")};
    font-size: 2rem;
  }

  .underline {
    width: 5rem;
    height: 0.15rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`;
