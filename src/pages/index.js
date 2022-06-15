import React from "react"
import Header from "../components/Layout/Header"

import Footer from "../components/Layout/Footer"
import SEO from "../components/Layout/SEO"
import HomeBanner from "../components/HomeBanner"
import HomeAbout from "../components/HomeAbout"
import HomeMission from "../components/HomeMission"
import Layout from "../components/Layout"

export default function PageIndex() {


  return (
    <Layout>
        {/* <Header /> */}
        <HomeBanner />
        <HomeAbout />
        <HomeMission />
        {/* <Footer /> */}
    
    </Layout>
  )
}
