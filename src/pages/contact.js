import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

// import Fifa from '../assets/images/fifa.jpg'
import GlobalBg from '../assets/images/goal-bg.jpg'
import SmallGlobalBg from '../assets/images/goal-bg-p-500.jpeg'
import MediumGlobalBg from '../assets/images/goal-bg-p-800.jpeg'
import LargeGlobalBg from '../assets/images/goal-bg-p-1080.jpeg'
import Layout from '../components/Layout'
// import Foundation from '../images/assets.Algorand_Foundation.jpg'

const About = () => {
  return (
    
   <Layout>

      <div className="spacer" />
        <section id="mission" className="section is-full-image">
          <div className="container is--more-padding is--centered">
            <div className="gold-border is--centered">
              <div id="w-node-ec27b4ce-4377-84fa-04b2-cfc7d63809ac-786ffb22" className="centered-grid">
                <div id="w-node-_44257c11-c653-45e0-3aa3-816f6a05c9d9-786ffb22" className="grid-item">
                  <div className="section-header is--black-bg">How can we help?<span className="gold" /></div>
                  <div className="form-block w-form">
                    <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form" action="/success" method="post" data-netlify="true"><input type="text" className="text-field w-input" maxLength={256} name="name" data-name="Name" placeholder="Name" id="name" /><input type="text" className="text-field w-input" maxLength={256} name="Company" data-name="Company" placeholder="Company" id="Company" /><input type="text" className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Email" id="Email-2" required /><textarea id="Message" name="Message" maxLength={5000} data-name="Message" placeholder="Message" className="text-field area w-input" defaultValue={""} /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="general-button w-button" /></form>
                    <div className="success-message w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-image_photo-height">
            <div className="full-image_photo-wrap"><img src={GlobalBg} loading="lazy" sizes="100vw" srcSet={`${SmallGlobalBg} 500w, ${MediumGlobalBg} 800w, ${LargeGlobalBg} 1080w, ${GlobalBg} 1440w`} alt="" className="full-image_photo" /></div>
            <div className="full-image_bottom-gradient" />
          </div>
        </section>
        
    </Layout>
  )
}

export default About