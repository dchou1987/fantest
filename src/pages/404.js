import React from "react"
// import Page from '../components/Page'
// import NotFOund from '../assets/images/not-found.png'
import Layout from "../components/Layout"
// import useStoryblok from '../utils/storyblok'
import { Link } from "gatsby"
import Header from "../components/Layout/Header"

export default function Page404({ location }) {

    let content = (<section className="notfound-section">
        <div className="notfound-wrapper">
            {/* <img src={NotFOund} className="w-100" alt="404" /> */}
            <p className="primary-text mt-4">This page could not be found!</p>
            <Link to="/" className="mt-5"><button variant="success" className="primary-btn simple-btn">BACK TO HOME</button></Link>
        </div>
    </section>)

    return (
        <>
        <Header />
            {content}
        </>
    )
}