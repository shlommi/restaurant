import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import menuImg from "../images/bcg/menuBcg.jpg";

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={menuImg}>
      <Banner title="תפריט" subtitle="תבחרו מה בא לכם" />
    </PageHeader>
  </Layout>
);

export default MenuPage;
