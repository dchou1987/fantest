import React, {useEffect} from 'react'

const HomeMission = () => {

  const scrollProgressBar = () => {
    const progressBarDown = document.getElementById('mission-bar-down');
    const progressBarTop = document.getElementById('mission-bar-top');

    const section = document.getElementById('mission');

    let scrollBottom = (section.getBoundingClientRect().bottom);
    let scrollTop = (section.getBoundingClientRect().top);

    let percentageBottom =
    (scrollBottom /
    (section.getBoundingClientRect().height - 
    document.documentElement.clientHeight)) * 100;

    let percentageTop =
    (scrollTop /
    (section.getBoundingClientRect().height - 
    document.documentElement.clientHeight)) * 100;
    
    let bottom = Math.floor(percentageBottom) - 50;
    let top = Math.floor(percentageTop) - 50;
  
    progressBarDown.style.width = bottom + '%';

    if (bottom > 100) {
        progressBarDown.style.width = '100%';
    }

    progressBarTop.style.width = top + '%';

    if (top > 100) {
        progressBarTop.style.width = '100%';
    }
};

  useEffect(() => {
    document.addEventListener('scroll', scrollProgressBar);

  }, [])
  return (
    <section id="mission" className="section is--trophy-bg">
        <div className="left-fill">
          <div data-w-id="c46adab3-ff1e-8f62-4d2b-ad06a140af68" className="gold-bar" id='mission-bar-top' />
        </div>
        <div className="container is--centered is--grey-bg">
          <div className="gold-border is--centered">
            <div id="w-node-ec27b4ce-4377-84fa-04b2-cfc7d63809ac-3b54e6cc" className="centered-grid">
              <div id="w-node-_44257c11-c653-45e0-3aa3-816f6a05c9d9-3b54e6cc" className="grid-item">
                <div className="section-header is--black-bg"><span className="gold">Evolve</span> the way you fan.<span className="gold" /></div>
                <p className="description-paragraph">Sports are a part of our identify. The sports we watch, the teams we root for, the flags we fly, the athletes we follow. For billions of fans around the world, our love for sport is a central part of our personality. Blockchain-based experiences, such as NFTs, provide a new way for us to showcase our identify and are transforming the way we engage with our favorite sports and athletes. Technology is unlocking a new frontier of fandom and bringing more power, ownership, and control to the fan, ultimately bringing us all closer to the sports we love.</p>
              </div>
              <div id="w-node-_70163b77-5f55-b618-a344-e6cc480617cf-3b54e6cc" className="grid-item">
                <div className="section-header is--black-bg">Enter the <span className="gold">new frontier.</span></div>
                <p className="description-paragraph">The applications of blockchain technology are limitless, changing the way we work, play, and engage with sport. AlgoFan was born to help rightsholders, like FIFA, capitalize on this opportunity and more dynamically engage with their fans using Web3 technology and capabilities. Our mission is to unleash the power of blockchain for the benefit of sports fans around the world.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-fill">
          <div data-w-id="0afbd863-11a6-a83c-5301-6e995e92047d" id='mission-bar-down' className="gold-bar" />
        </div>
      </section>
  )
}

export default HomeMission