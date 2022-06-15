import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc:description,
        image
        siteUrl
        siteTitle: title,
        keywords
      }
    }
  }
`
const SEO = ({ title, description, canonical }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    keywords
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      {/* <link rel="canonical" href={`${siteUrl}/${canonical}`} /> */}
      <meta name="description" content={description || siteDesc} />
      <meta name="keywords" content={keywords}></meta>
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:type" content="website" />

      {/* twitter cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
    </Helmet>
  )
}

export default SEO
