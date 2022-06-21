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
      <script src="https://use.typekit.net/vre6bgn.js" type="text/javascript"></script>
      {/* <script type="text/javascript">try{Typekit.load();}catch(e){}</script> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script>
      <script dangerouslySetInnerHTML={{ __html: `function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document)`, }} />
    </Helmet>
  )
}

export default SEO
