import React, { Children } from "react"
import SEO from "../components/seo";
import Layout from '../components/Layout'

import { Link, navigate } from "gatsby";
import Moment from 'react-moment'


const BlogPost = ({ pageContext: { data, posts, category } }) => {
  console.log("dattt", data.bulletedSummaryContent)
  // const allPosts = posts.filter(item => item.title !== data.title)
  // const shareUrl = `https://techlovers.netlify.app/${category}/${data.slug}`;
  return <Layout>
    {/* <SEO title={data.title} description={`${data.description}`} canonical={`/${category}/${data.slug}`} /> */}
    <section id="about-us" className="section">
        <div className="container is--more-padding">
          <div className="news-header">
            <div className="news-header-content">
              <h1 className="news-title">{data.title}</h1>

              {/* <div>May 1, 2022</div> */}
              <div>
              <Moment format="MMM DD, YYYY">{data.publishedAt}</Moment>
              </div>
            </div>
            <div className="news-gradient" />
            <img srcSet={`
            ${data.featuredPhotoSmall && data.featuredPhotoSmall.url} 500w, 
            ${data.featuredPhotoMedium && data.featuredPhotoMedium.url} 800w, 
            ${data.featuredPhotoLarge && data.featuredPhotoLarge.url} 1080w, 
            ${data.featuredPhoto.url} 1400w`} 
            loading="lazy" sizes="(max-width: 479px) 88vw, (max-width: 767px) 90vw, 92vw" src="../images/fifa.jpg" alt="" className="news-image-file" />
          </div>
          <div className="news-content">
            {data.bulletedSummaryContent ? 
            <div className="rich-text is--bulleted-summary w-richtext" dangerouslySetInnerHTML={{ __html: data.bulletedSummaryContent.html }}>
            </div>
            : null }
            <div className="rich-text w-richtext" dangerouslySetInnerHTML={{ __html: data.mainBody.html }}>
              
            </div>
          </div>
        </div>
      </section>
  </Layout>
}

export default BlogPost;