import React from 'react'
import AlgorandLogo from '../assets/images/algorand-logo.svg'
import IntersportLogo from '../assets/images/intersport-logo.svg'
import NevyGold from '../assets/images/nevy-gold.png'
import SmallNevyGold from '../assets/images/nevy-gold-p-500.png'
import TellyAwards from '../assets/images/Telly-Awards.jpeg'
import Crypto from '../assets/images/crypto.png'
import Emmy from '../assets/images/emmy.png'
import SmallEmmy from '../assets/images/emmy-p-500.png'
import WebbyAwardsLogo from '../assets/images/Webby-Awards-Logo.jpg'

const HomeAbout = () => {
    return (
        <section id="about-us" className="section is--phone-bg">
            <div className="container is--more-padding is--centered">
                <div data-w-id="931fb7d6-e733-7594-4c65-0220f6ff6a49" style={{ opacity: 1 }} className="logo-lockup">
                    <a href="https://www.algorand.com" target="_blank" className="w-inline-block"><img src={AlgorandLogo} loading="lazy" alt="" className="algorand-logo" /></a>
                    <div className="logo-lockup_divider" />
                    <a href="https://www.intersport.global" target="_blank" className="w-inline-block"><img src={IntersportLogo} loading="lazy" alt="" className="intersport-logo" /></a>
                </div>
                <div className="centered-grid">
                    <div id="w-node-a7d97da5-1637-b644-695d-ea224f6b6bc8-3b54e6cc" className="grid-item">
                        <div className="section-header">The <span className="gold">Power</span> of <span className="gold">Partnership.</span></div>
                        <p className="description-paragraph">Two dynamic companies – <strong>Algorand</strong>, the world’s most decentralized, scalable, and secure blockchain infrastructure, and <strong>Intersport</strong>, a world-class sports marketing and creative agency – have joined forces to develop one-of-a-kind Web3 experiences for sports fans everywhere.</p>
                    </div>
                    <div id="w-node-_9728ddbf-9f21-57fb-2818-1d1395fdd88d-3b54e6cc" className="grid-item">
                        <div className="gold-line" />
                    </div>
                    <div id="w-node-_87f64e33-3414-e4fe-9618-e52704560dfe-3b54e6cc" className="grid-item">
                        <div className="logo-lockup is--grid">
                            <img src={NevyGold} loading="lazy" sizes="(max-width: 479px) 42vw, (max-width: 767px) 15vw, (max-width: 991px) 16vw, 14vw" srcSet={`${SmallNevyGold} 500w, ${NevyGold} 838w`} alt="" />
                            <img src={TellyAwards} loading="lazy" alt="" />
                            <img src={Crypto} loading="lazy" alt="" />
                            <img src={Emmy} loading="lazy" sizes="(max-width: 479px) 42vw, (max-width: 767px) 15vw, (max-width: 991px) 16vw, 14vw" srcSet={`${SmallEmmy} 500w, ${Emmy} 800w`} alt="" />
                            <img src={WebbyAwardsLogo} loading="lazy" sizes="(max-width: 479px) 42vw, (max-width: 767px) 15vw, (max-width: 991px) 16vw, 14vw" srcSet={`${WebbyAwardsLogo} 500w, ${WebbyAwardsLogo} 618w`} alt="" /></div>
                    </div>
                    <div id="w-node-_6cbebc85-5403-26b0-dd9c-c368ba5bb20c-3b54e6cc" className="grid-item">
                        <div className="gold-line" />
                    </div>
                    <div id="w-node-a7d97da5-1637-b644-695d-ea224f6b6bcf-3b54e6cc" className="grid-item">
                        <p className="description-paragraph">AlgoFan’s first product to hit the market, FIFA+ Collect, will launch this summer and give fans access to the World Cup in ways never imagined. Football is a global force with the ability to unite nations and drive unbridled passion. FIFA+ Collect is built to harness that force and build community, giving fans around the world the opportunity to own a piece of the game’s past and to fuel its future.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout