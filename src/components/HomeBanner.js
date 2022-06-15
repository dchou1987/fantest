import React from 'react'
import GoalBg from '../assets/images/goal-bg.jpg'
import SmallGoalBg from '../assets/images/goal-bg-p-500.jpeg'
import MediumGoalBg from '../assets/images/goal-bg-p-800.jpeg'
import LargeGoalBg from '../assets/images/goal-bg-p-1080.jpeg'
import PlayerCircle from '../assets/images/player-circle.png'
import SmallPlayerCircle from '../assets/images/player-circle-p-500.png'
import MediumPlayerCircle from '../assets/images/player-circle-p-800.png'
const HomeBanner = () => {
    return (
        <section data-w-id="7c27bf9c-6cc9-5f09-4e35-d8fe1ff6572b" className="section is-full-image">
            <div className="full-image_photo-height">
                <div className="full-image_photo-wrap"><img src={GoalBg} loading="lazy" sizes="100vw" srcSet={`${SmallGoalBg} 500w, ${MediumGoalBg} 800w, ${LargeGoalBg} 1080w, ${GoalBg} 1440w`} alt="" className="full-image_photo" /></div>
                <div className="full-image_bottom-gradient" />
            </div>
            <div className="container is--full-image">
                <div className="full-image_text-wrap">
                    <div className="headline_wrapper">
                        <h1 className="headline_text tricks active"><span className="gold">Evolve</span> the way you fan.<br /></h1>
                    </div>
                    <p className="description-paragraph is--white">AlgoFan develops and delivers breakthrough Web3 experiences that are reinventing fandom around the world.</p>
                </div><img src={PlayerCircle} loading="lazy" data-w-id="63a695fa-d906-d379-f9e9-1a31c0b9b602" sizes="(max-width: 767px) 100vw, (max-width: 991px) 644.1484375px, 65vw" srcSet={`${SmallPlayerCircle} 500w, ${MediumPlayerCircle} 800w, ${PlayerCircle} 1060w`} alt="" className="home-player" />
            </div>
        </section>
    )
}

export default HomeBanner