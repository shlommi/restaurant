import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from "../utils";
import Quickinfo from "../components/HomePageComponents/Quickinfo";
import homeImg from "../images/bcg/homeBcg.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={homeImg}>
      <Banner title="...mmm" subtitle="אבן גבירול 34, תל אביב">
        <BannerButton style={{ margin: "2rem auto" }}>תפריט</BannerButton>
      </Banner>
    </HomeHeader>
    <Quickinfo />
  </Layout>
);

export default IndexPage;
