import React, {useEffect} from 'react'
import GoalBg from '../assets/images/goal-bg.jpg'
import SmallGoalBg from '../assets/images/goal-bg-p-500.jpeg'
import MediumGoalBg from '../assets/images/goal-bg-p-800.jpeg'
import LargeGoalBg from '../assets/images/goal-bg-p-1080.jpeg'
import PlayerCircle from '../assets/images/player-circle.png'
import SmallPlayerCircle from '../assets/images/player-circle-p-500.png'
import MediumPlayerCircle from '../assets/images/player-circle-p-800.png'
import Anime, { anime } from 'react-anime';
import $ from 'jquery';

const HomeBanner = () => {
    const scrollProgressBar = () => {
        const player = document.getElementById('player');
        const section = document.getElementById('banner');
        const ImgGradient = document.getElementById('img-gradient');
        let scrollTop = -(section.getBoundingClientRect().top);
    
        let percentageTop =
        (scrollTop /
        (section.getBoundingClientRect().height - 
        document.documentElement.clientHeight)) * 100;
        
        let top = Math.floor(percentageTop);
        
        if(top < 60){
            player.style.width = "65em"
            ImgGradient.style.opacity = 1
       }
       if(top > 60 && top < 80){
        player.style.width = "62em"
       }
       if(top > 80 && top < 100){
        player.style.width = "59em"
        ImgGradient.style.opacity = 0.3
       }
       if(top > 100 && top < 120){
        player.style.width = "56em"
        ImgGradient.style.opacity = 0.1
       }
       if(top > 120 && top < 140){
        player.style.width = "53em"
        ImgGradient.style.opacity = 0
       }
 
       if(top > 140){
        player.style.width = "50em"
       }
    };
    useEffect(() => {
        document.addEventListener('scroll', scrollProgressBar);


        var tricksWord = document.getElementsByClassName("tricks");
        for (var i = 0; i < tricksWord.length; i++) {
        var wordWrap = tricksWord.item(i);
        wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>'); 
        }
        var tricksLetter = document.getElementsByClassName("tricksword");
        for (var i = 0; i < tricksLetter.length; i++) {
        var letterWrap = tricksLetter.item(i);
        letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        function switchHeadlines() {
                let activeHeadline = $('.headline_text.tricks.active');
                if (activeHeadline.next().length > 0) {
                  activeHeadline.next().addClass('active');
              } else {
                  $('.headline_text.tricks').eq(0).addClass('active');
              }
              activeHeadline.removeClass('active');
        }
        function createAnimation() {
        var tl = anime.timeline({
          loop: true,
          autoplay: true
        });
        tl
          .add({
            targets: '.headline_text.active .letter',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 300 + 30 * i
          }).add({
            targets: '.headline_text.active .letter',
            translateY: [0,-100],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 800,
            delay: (el, i) => 100 + 30 * i,
          });
        }
        createAnimation();
    
      }, [])
    return (
        <section data-w-id="7c27bf9c-6cc9-5f09-4e35-d8fe1ff6572b" id='banner' className="section is-full-image">
            <div className="full-image_photo-height">
                <div className="full-image_photo-wrap"><img src={GoalBg} loading="lazy" sizes="100vw" srcSet={`${SmallGoalBg} 500w, ${MediumGoalBg} 800w, ${LargeGoalBg} 1080w, ${GoalBg} 1440w`} alt="" className="full-image_photo" /></div>
                <div className="full-image_bottom-gradient" id='img-gradient' />
            </div>
            <div className="container is--full-image">
                <div className="full-image_text-wrap">
                    <div className="headline_wrapper">
                        <h1 className="headline_text tricks active">
                            <span className="gold">Evolve</span> the way you fan.<br />
                            </h1>
                    </div>
                    <p className="description-paragraph is--white">AlgoFan develops and delivers breakthrough Web3 experiences that are reinventing fandom around the world.</p>
                </div>
                <img 
                src={PlayerCircle} 
                loading="lazy" 
                data-w-id="63a695fa-d906-d379-f9e9-1a31c0b9b602" 
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 644.1484375px, 65vw" 
                srcSet={`${SmallPlayerCircle} 500w, ${MediumPlayerCircle} 800w, ${PlayerCircle} 1060w`} 
                alt="" 
                id='player' 
                className="home-player" />
            </div>
        </section>
    )
}

export default HomeBanner