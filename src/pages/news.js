import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import Fifa from '../assets/images/fifa.jpg'
import Foundation from '../assets/images/Algorand_Foundation.jpg'
import { graphql, Link, useStaticQuery } from 'gatsby';
import Moment from 'react-moment'
import Layout from '../components/Layout'

const News = () => {


  const newsItems = useStaticQuery(graphql`
  {
    graphCmsData  {
          news {
              title
              featuredPhoto {
              url
              }
              feature
              publishedAt
              slug
              tags
              date
              seo {
          title
          description
          keywords
        }
            }
          }
}
`)
  return (
    <Layout>
      <div className="spacer"></div>
      <section id="about-us" className="section">
        {newsItems.graphCmsData.news.map(post => (
        post.feature ?
        <div className="featured-news-item">
          <div className="featured-news-left">
          <Moment format="MMM DD, YYYY">{post.date}</Moment>
            <Link to ={`/news/${post.slug}`} className="featured-news-title">{post.title}</Link>
          </div>
          <Link to ={`/news/${post.slug}`} className="featured-news-right w-inline-block"><img loading="lazy" sizes="(max-width: 479px) 88vw, 50vw" src={post.featuredPhoto.url} alt="" className="featured-news-image" /></Link>
        </div>
        : null
        ))}
      </section>

      <section id="about-us" className="section">
        <div className="left-fill">
          <div data-w-id="2309cc13-94b5-7281-2492-de02ed709089" className="gold-bar"></div>
        </div>
        <div className="container">
          <div className="news-wrapper">
            <div className="news-grid">
              {newsItems.graphCmsData.news.map(post => (
                <div id="w-node-_675be6ae-374e-1122-ccff-a7549f02f416-74c3e019" className="news-item">
                  {post.featuredPhoto && <Link to ={`/news/${post.slug}`} className="news-item-link w-inline-block"><img src={post.featuredPhoto.url} loading="lazy" alt="" className="news-item-image" /></Link>}
                  <div id="w-node-_8678e719-1dbf-e63f-58a7-43b186934cdf-74c3e019">
                    <Link id="w-node-_8678e719-1dbf-e63f-58a7-43b186934ce0-74c3e019" to={`/news/${post.slug}`} className="news-item-title">{post.title}</Link>
                    <Moment format="MMM DD, YYYY">{post.date}</Moment>
                    {/* <div>June 1, 2022</div> */}
                  </div>
                </div>

              ))}
              {/* <div id="w-node-_82780b27-b6dd-a801-3f6b-57a2c14d8fb3-74c3e019" className="news-item">
                <a href="news/fifa-announces-partnership-with-blockchain-innovator-algorand.html" className="news-item-link w-inline-block"><img loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 36vw, 23vw" src={Fifa} alt="" className="news-item-image" /></a>
                <div id="w-node-_82780b27-b6dd-a801-3f6b-57a2c14d8fb6-74c3e019">
                  <a id="w-node-_82780b27-b6dd-a801-3f6b-57a2c14d8fb7-74c3e019" href="news/fifa-announces-partnership-with-blockchain-innovator-algorand.html" className="news-item-title">FIFA announces partnership with blockchain innovator Algorand</a>
                  <div>May 1, 2022</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default News