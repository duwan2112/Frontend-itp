import React from "react";
import Layout from "../Layout/Layout";
import HomeHeader from "./HomeHeader";
import HomeFeatures from "./HomeFeatures";
import {HomePageStyled} from "./StyledHomePage";
import HomePricing from "./HomePricing";
import HomeContact from "./HomeContact";
import HomeResources from "./HomeResources";
export default function HomePage() {
  return (
    <Layout>
      <HomePageStyled>
        <HomeHeader />
        <HomeFeatures />
        <HomePricing />
        <HomeResources />
        <HomeContact />
      </HomePageStyled>
    </Layout>
  );
}
